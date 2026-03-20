# SWAGNEWS — React

Migrated from static HTML to React + Vite. Hosted on GitHub Pages.

## Stack

- React 18
- React Router v6 (HashRouter — works on GitHub Pages without a server)
- Vite 5
- DM Sans + Bebas Neue + DM Mono fonts
- No UI library — pure custom CSS

## Project structure

```
src/
  components/
    Header.jsx       ← sticky header with logo + crypto tickers
    Footer.jsx       ← contacts, socials, partner logo
    NewsCard.jsx     ← article / external link card
    YouTubeCard.jsx  ← YouTube video card
    Sidebar.jsx      ← créative web sidebar
    CategoryTag.jsx  ← colored category pill
  pages/
    Home.jsx         ← main feed (interleaved articles + youtube)
    Article.jsx      ← single article view
  data/
    posts.js         ← ALL content lives here (edit this to add posts)
  App.jsx
  main.jsx
  index.css
```

## Setup

```bash
npm install
npm run dev
```

## Add a new post

Open `src/data/posts.js` and add an object to the `posts` array:

```js
{
  id: 'my-post',              // unique slug (used in URL)
  type: 'article',            // 'article' | 'external'
  category: 'креативні web', // affects the color tag
  title: 'Post title',
  excerpt: 'Short description shown on the feed',
  image: 'https://...',       // or null
  date: '2025-05-01',
  content: `
    Your article text here.
    Supports paragraphs and numbered lists.
  `,
}
```

For an external link (opens in new tab, no article page):
```js
{
  id: 'some-link',
  type: 'external',
  category: 'новини світу',
  title: 'Title',
  excerpt: 'Description',
  image: 'https://...',
  date: '2025-05-01',
  url: 'https://...',    // ← external URL
}
```

## Deploy to GitHub Pages

### Option A — GitHub Actions (recommended)

1. Push to GitHub
2. Go to **Settings → Pages**
3. Set source to **GitHub Actions**
4. Push anything to `main` — it deploys automatically

### Option B — manual with gh-pages

```bash
npm run deploy
```

## URLs

- Dev:  `http://localhost:5173`
- Live: `https://discordboyy.github.io/swagnews/`

Routes use hash mode so GitHub Pages works without 404 redirects:
- `/#/` → home feed
- `/#/post/mixxtales` → article page
