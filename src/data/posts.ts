import type { FeedItem, SidebarItem } from '../components/types'

// ─── FEED ITEMS ───────────────────────────────────────────────────────────────
// type: 'article' | 'external' | 'youtube'
// size: 'short' | 'long'   — matches .short-container / .long-container-youtube
// Order here = order rendered on the page

export const feedItems: FeedItem[] = [
  {
    id: 'mixxtales',
    type: 'article',
    category: 'новини світу',
    title: 'Allkill1t анонсував новий альбом "mixxtales"',
    description: 'Реліз заплановано на 16 травня 2025 року. За попередньою інформацією, mixxtales включатиме 11 треків такі як..',
    image: './src/link/content/another/MIXXTALES.png',
    emoji: './src/link/span/span-emoji 10.png',
    size: 'short',
    content: `Allkill1t офіційно анонсував свій наступний альбом під назвою mixxtales. За словами артиста, цей реліз стане новою главою у його творчості.

Альбом включатиме 11 треків:

1. Different Trap Days
2. Litniy Trek?
3. Where am I
4. On G Way
5. Runna Mod
6. Hard Breath
7. Be FoReal
8. Lost Crew
9. Killa for dawg
10. Let me be
11. F.U.C.K.

Реліз заплановано на 16 травня 2025 року на всіх стрімінгових платформах.`,
  },
  {
    id: 'nettspend-mhopscotch',
    type: 'youtube',
    channel: 'Nettspend',
    views: null,
    title: 'Новий кліп "MHOPSCOTCH"',
    avatar: 'https://yt3.googleusercontent.com/BbjSMoiLhr7xlzzWQZA34jg6ce32V7KT3mb672HYAy5ij_MyeW8mIICqNqcTeUAM2owOG5Q0Lf0=s160-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/watch?v=SXnFASFePu0',
    size: 'long',
    thumbnail: 'https://i.ytimg.com/vi/xPhmHVkaZaY/maxresdefault.jpg',
  },
  {
    id: 'spotify-fix',
    type: 'external',
    category: 'новини світу',
    title: 'Spotify пофіксили неполадки',
    description: 'Аккаунт "Spotify Status", затвердив що вони вирішили проблеми та тепер все працює як треба.',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e2/7e/db/e27edb0a-a64b-480b-060d-231054de80ca/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/1200x600wa.png',
    emoji: './src/link/span/span-emoji 08.png',
    size: 'short',
    url: 'https://x.com/SpotifyStatus/status/1912538521489051844',
  },
  {
    id: 'mertygraal-zipka',
    type: 'youtube',
    channel: 'Mertygraal',
    views: '57 переглядів',
    title: 'zipka tshirts / créative web / мертіграл розповідає',
    avatar: 'https://yt3.googleusercontent.com/wbEZxPk5AiwTk1XLVxIk4UpjE3fQNIPjihf0Io4gn33WjVKoG8q7tNIpivel2F_0YLSdgqQ6LQQ=s160-c-k-c0x00ffffff-no-rj',
    url: 'https://youtu.be/_JZeWGITpyM?si=oGsb2XGf2xcZoWnw',
    size: 'long',
    thumbnail: 'https://img.youtube.com/vi/_JZeWGITpyM/maxresdefault.jpg',
  },
  {
    id: 'ai',
    type: 'article',
    category: 'креативні web',
    title: 'Ai',
    description: 'Штучний інтелект революціонізує кодинг, дизайн, музику та бізнес, скорочуючи час роботи з місяців до секунд. Майбутнє за тими, хто ефективно інтегрує ШІ у свою діяльність.',
    image: './src/link/content/créative web/ai.png',
    emoji: './src/link/span/span-emoji 01.png',
    size: 'short',
    content: `Штучний інтелект революціонізує кодинг, дизайн, музику та бізнес, скорочуючи час роботи з місяців до секунд. Майбутнє за тими, хто ефективно інтегрує ШІ у свою діяльність.`,
  },
  {
    id: 'sketches',
    type: 'article',
    category: 'креативні web',
    title: 'Скетчі – ваш скарб',
    description: 'Скетчі – це основа будь-якої творчої професії, і вони мають величезну цінність у мистецтві, дизайні, моушн-дизайні, анімації, коміксах та інших сферах.',
    image: './src/link/content/créative web/Скетчі – ваш скарб!.png',
    emoji: './src/link/span/span-emoji 02.png',
    size: 'short',
    content: `Скетчі – це основа будь-якої творчої професії, і вони мають величезну цінність у мистецтві, дизайні, моушн-дизайні, анімації, коміксах та інших сферах. Ось чому вони важливі та чому їх варто зберігати і навіть монетизувати.`,
  },
  {
    id: 'offgod-adidas',
    type: 'article',
    category: 'новини світу моди',
    title: 'OFFGOD:TATE x adidas Originals 2025',
    description: '',
    image: null,
    size: 'long',
    bgStyle: true,
    content: `Нова колаборація OFFGOD:TATE x adidas Originals 2025.`,
  },
  {
    id: 'mertygraal-lockdown',
    type: 'youtube',
    channel: 'Mertygraal',
    views: '43 переглядів',
    title: 'Як почати ненавидіти усіх | LOCKDOWN Protocol',
    avatar: 'https://yt3.googleusercontent.com/wbEZxPk5AiwTk1XLVxIk4UpjE3fQNIPjihf0Io4gn33WjVKoG8q7tNIpivel2F_0YLSdgqQ6LQQ=s160-c-k-c0x00ffffff-no-rj',
    url: 'https://youtu.be/fAvndUbSNP4',
    size: 'short',
    thumbnail: 'https://img.youtube.com/vi/fAvndUbSNP4/maxresdefault.jpg',
  },
  {
    id: 'pollyceremony-youtube-1',
    type: 'youtube',
    channel: 'PollyCeremony',
    views: '6,7 тис. переглядів',
    title: 'KANYE WEST: ІСТОРІЯ БОЖЕВІЛЛЯ II',
    avatar: 'https://yt3.googleusercontent.com/cdXrTPKMUpNZygy6ibXwmxesTV19ObkcFPumTf-OONG3wQZrwVrQx_-wJjtEDNZU08p7HOKG_g=s160-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/watch?v=GHjb1sIAvbM',
    size: 'long',
    thumbnail: 'https://img.youtube.com/vi/GHjb1sIAvbM/maxresdefault.jpg',
  },
  {
    id: 'references',
    type: 'article',
    category: 'креативні web',
    title: 'Як знайти референси?',
    description: 'Ви ніколи не зможете швидко знайти референси які вам дійсно підійдуть у портфоліо особливо коли треба знайти дійсно гарне натхнення. Запамятайте Pinterest, Are.na, Twitter, Tumblr, Dribbble чи Awwwards, ви ніколи не зможете знайти усі діаманти просто нічого не шукаючи...',
    image: './src/link/content/créative web/Як знайти референси для свого портфоліо.png',
    imagePosition: 'bottom',
    size: 'short',
    content: `Ви ніколи не зможете швидко знайти референси які вам дійсно підійдуть у портфоліо особливо коли треба знайти дійсно гарне натхнення. Запамятайте Pinterest, Are.na, Twitter, Tumblr, Dribbble чи Awwwards — ви ніколи не зможете знайти усі діаманти просто нічого не шукаючи.`,
  },
  {
    id: 'pollyceremony-kanye1',
    type: 'youtube',
    channel: 'PollyCeremony',
    views: '75 тис. переглядів',
    title: 'KANYE WEST: ІСТОРІЯ БОЖЕВІЛЛЯ',
    avatar: 'https://yt3.googleusercontent.com/cdXrTPKMUpNZygy6ibXwmxesTV19ObkcFPumTf-OONG3wQZrwVrQx_-wJjtEDNZU08p7HOKG_g=s160-c-k-c0x00ffffff-no-rj',
    url: 'https://www.youtube.com/watch?v=X8qEa6H-9tI',
    size: 'long',
    thumbnail: 'https://img.youtube.com/vi/X8qEa6H-9tI/maxresdefault.jpg',
  },
  {
    id: 'identity',
    type: 'article',
    category: 'креативні web',
    title: 'Айдентика, або корпоративний ідентифікаційний стиль',
    description: 'Включає логотипи, кольори, шрифти, графічні елементи та інші візуальні компоненти, які використовуються для ідентифікації бренду. Це створює єдиний зовнішній вигляд компанії...',
    image: './src/link/content/créative web/Що таке айдентика.png',
    size: 'short',
    content: `Айдентика включає логотипи, кольори, шрифти, графічні елементи та інші візуальні компоненти, які використовуються для ідентифікації бренду. Це створює єдиний зовнішній вигляд компанії.`,
  },
  {
    id: 'mertygraal-cs1',
    type: 'youtube',
    channel: 'Mertygraal',
    views: null,
    title: 'Останній заїзд | Counter-Strike 2',
    avatar: 'https://yt3.googleusercontent.com/wbEZxPk5AiwTk1XLVxIk4UpjE3fQNIPjihf0Io4gn33WjVKoG8q7tNIpivel2F_0YLSdgqQ6LQQ=s160-c-k-c0x00ffffff-no-rj',
    url: 'https://youtu.be/dEEc1tsphE4',
    size: 'long',
    thumbnail: 'https://img.youtube.com/vi/dEEc1tsphE4/maxresdefault.jpg',
  },
  {
    id: 'style',
    type: 'article',
    category: 'креативні web',
    title: 'Що таке Стиль?',
    description: 'СТИЛь це деталі які повторюються, від роботи до роботи й виділяють цим роботи художника, надають свого стилю.',
    image: './src/link/content/créative web/Що таке стиль.png',
    imagePosition: 'bottom',
    size: 'short',
    content: `СТИЛь це деталі які повторюються, від роботи до роботи й виділяють цим роботи художника, надають свого стилю. У випадку SpaceHeadTR це включає використання геометричні форм, абстракцій, як ви можете бачити на банері.`,
  },
  {
    id: 'mertygraal-cs2',
    type: 'youtube',
    channel: 'Mertygraal',
    views: null,
    title: 'Одного разу під Полтавою | Counter-Strike 2',
    avatar: 'https://yt3.googleusercontent.com/wbEZxPk5AiwTk1XLVxIk4UpjE3fQNIPjihf0Io4gn33WjVKoG8q7tNIpivel2F_0YLSdgqQ6LQQ=s160-c-k-c0x00ffffff-no-rj',
    url: 'https://youtube.com/watch?v=LYZhOpYn2tk',
    size: 'long',
    thumbnail: 'https://img.youtube.com/vi/LYZhOpYn2tk/maxresdefault.jpg',
  },
  {
    id: 'sicko',
    type: 'article',
    category: 'креативні web',
    title: 'Sicko',
    description: 'Sicko — це бренд одягу, створений репером Young Thug. Бренд став відомим завдяки своєму унікальному дизайну та стилю.',
    image: './src/link/content/créative web/sicko.png',
    size: 'short',
    content: `Sicko — це бренд одягу, створений репером Young Thug. Бренд став відомим завдяки своєму унікальному дизайну та стилю, але особливо ще тому що вони заполонили інтернет своїми артами та постерами.`,
  },
]

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────
export const sidebarItems: SidebarItem[] = [
  {
    id: 'gumroad-pack',
    image: './src/link/content/créative web/Cover gumroad (3).png',
    title: 'Мертіграл продає свій пак з мокапами',
    platform: 'Gumroad',
    date: '14/04/2025',
    url: 'https://mertygraal.gumroad.com/l/fzach',
  },
  {
    id: 'brand-tg',
    image: './src/link/content/créative web/INDEPENDENT INTERNATIONAL UKRAINIAN KIDS.png',
    title: 'Мертіграл опублікував свій майбутній бренд у тг',
    platform: 'telegram',
    date: '10/04/2025',
    url: 'https://t.me/creativewebtg/2795',
  },
  {
    id: 'csgo-work',
    image: './src/link/content/créative web/lol relationshit.png',
    title: 'Остання робота з теми csgo',
    platform: 'Pinterest',
    date: '05/04/2025',
    url: 'https://pin.it/4sOAM1xuS',
  },
]