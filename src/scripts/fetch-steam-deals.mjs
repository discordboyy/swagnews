// scripts/fetch-steam-deals.mjs
import { mkdir, writeFile } from 'node:fs/promises'

const FEATURED_URL =
  'https://store.steampowered.com/api/featuredcategories?cc=no&l=norwegian'

const OUTPUT_FILE = 'public/data/steam-deals.json'
const TARGET_COUNT = 40

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
    },
  })

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}: ${url}`)
  }

  return res.json()
}

// 1. Получаем список игр
const featured = await fetchJson(FEATURED_URL)

const games = [
  ...(featured.specials?.items ?? []),
  ...(featured.top_sellers?.items ?? []),
  ...(featured.new_releases?.items ?? []),
]

// 2. Убираем дубли
const uniqueGames = Array.from(
  new Map(games.map((game) => [game.id, game])).values()
)

// 3. Только игры со скидкой
const discountedGames = uniqueGames.filter(
  (game) =>
    Number(game.discount_percent) > 0 &&
    Number(game.final_price) > 0 &&
    game.name &&
    game.id
)

// 4. Берём первые 40
const selectedGames = discountedGames.slice(0, TARGET_COUNT)

// 5. Получаем настоящий header_image от Steam
const items = []

for (const game of selectedGames) {
  try {
    const details = await fetchJson(
      `https://store.steampowered.com/api/appdetails?appids=${game.id}&cc=no&l=norwegian`
    )

    const app = details?.[game.id]?.data

    if (!app) {
      console.warn(`Skipping ${game.name}: no app data`)
      continue
    }

    const image = app.header_image

    if (!image) {
      console.warn(`Skipping ${game.name}: no header image`)
      continue
    }

    const id = game.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    items.push({
      id,
      appId: game.id,
      image,
      title: game.name,
      platform: `-${game.discount_percent}%`,
      date: `${(game.original_price / 100).toFixed(2)} kr/${(
        game.final_price / 100
      ).toFixed(2)} kr`,
      url: `https://store.steampowered.com/app/${game.id}/`,
    })

    console.log(`✓ ${game.name}`)
  } catch (error) {
    console.warn(`Failed to fetch ${game.name}:`, error.message)
  }
}

// 6. Создаём директорию
await mkdir('public/data', { recursive: true })

// 7. Сохраняем
await writeFile(
  OUTPUT_FILE,
  JSON.stringify(
    {
      updatedAt: new Date().toISOString(),
      items,
    },
    null,
    2
  )
)

console.log('')
console.log(`Steam deals updated: ${items.length} games`)
console.log(`Saved to: ${OUTPUT_FILE}`)
