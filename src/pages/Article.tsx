import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { feedItems } from '../data/posts.ts'
import type { ArticleFeedItem } from '../components/types'
import Sidebar from '../components/Sidebar'

function renderContent(text: string) {
  const lines = text.trim().split('\n')
  const out: React.ReactNode[] = []
  let listItems: string[] = []
  let key = 0

  const flushList = () => {
    if (!listItems.length) return
    out.push(
      <ol key={key++}>
        {listItems.map((li, i) => <li key={i}>{li}</li>)}
      </ol>
    )
    listItems = []
  }

  for (const line of lines) {
    const t = line.trim()
    if (!t) { flushList(); continue }
    const m = t.match(/^(\d+)\.\s+(.+)/)
    if (m) { listItems.push(m[2]); continue }
    flushList()
    out.push(<p key={key++}>{t}</p>)
  }
  flushList()
  return out
}

export default function Article() {
  const { id }   = useParams<{ id: string }>()
  const navigate = useNavigate()
  const item     = feedItems.find((p) => p.id === id)

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!item || item.type === 'youtube') {
    return (
      <main style={{ padding: '60px 24px', textAlign: 'center' }}>
        <p>Статтю не знайдено.</p>
        <button onClick={() => navigate('/')} style={{ marginTop: 16, cursor: 'pointer' }}>
          ← назад
        </button>
      </main>
    )
  }

  const article = item as ArticleFeedItem

  return (
    <main>
      <div className="section-news">
        <div className="small-section">

          <button onClick={() => navigate('/')} className="article-back-btn">
            ← назад
          </button>

          {article.image && (
            <img
              className="article-hero-img"
              src={article.image}
              alt={article.title}
            />
          )}

          <div className="title-section" style={{ padding: '0 20px 12px' }}>
            <h2>{article.category}</h2>
            <h1>{article.title}</h1>
          </div>

          <div className="article-body">
            {renderContent(article.content)}
          </div>

        </div>

        <Sidebar />
      </div>
    </main>
  )
}