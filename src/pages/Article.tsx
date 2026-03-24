// src/pages/Article.tsx
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { feedItems } from '../data/posts.ts'
import type { ArticleFeedItem, ArticleSection } from '../components/types'
import Sidebar from '../components/Sidebar'
import GameWidget from '../components/GameWidget'
import NewsCard from '../components/NewsCard'
import YouTubeCard from '../components/YouTubeCard'
import { sidebarItemsExtra, sidebarItemsMain, sidebarItemsFirst } from '../data/sidebar'
import type { FeedItem } from '../components/types'

function FeedItemComponent({ item }: { item: FeedItem }) {
  if (item.type === 'youtube') return <YouTubeCard item={item} />
  return <NewsCard item={item} />
}

// After index 1 (nettspend), sidebar renders, then the rest of the feed
const SIDEBAR_BREAK_AFTER_INDEX = 1

function Section({ s, index }: { s: ArticleSection; index: number }) {
  return (
    <>
      <article className="article-container">
        {s.heading && (
          <h2 className="assignment-style" id={`assignment-${index}`}>
            {s.heading}
            {s.headingEmoji && (
              <span>
                <img
                  style={{ display: 'inline-flex', marginBottom: '-5px' }}
                  src={s.headingEmoji}
                  alt=""
                />
              </span>
            )}
          </h2>
        )}

        {s.text && s.text.split('\n\n').map((para, i) => (
          <p key={i} className="item-text">{para}</p>
        ))}

        {s.list && (
          <ul>
            {s.list.map((li, i) => (
              <li key={i} className="item-li">{li}</li>
            ))}
          </ul>
        )}

        {s.orderedList && (
          <ol>
            {s.orderedList.map((li, i) => (
              <li key={i} className="item-li">
                {li.url
                  ? <a href={li.url} target="_blank" rel="noopener noreferrer">{li.text}</a>
                  : li.text
                }
              </li>
            ))}
          </ol>
        )}
      </article>

      {s.connector && (
        <article className="connector">
          <img src={s.connector} alt="" className="connector-image" />
        </article>
      )}
    </>
  )
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

  const filteredFeed = feedItems.filter((f) => f.id !== article.id)

  const firstSection  = filteredFeed.slice(0, 2)
  const middleSection = filteredFeed.slice(2, 4)
  const related       = filteredFeed.slice(4)

  return (
    <main>
      <div className="section-news">

        <div className="big-section">
          <div className="open-item">

            {article.heroImage && (
              <img className="open-item-image" src={article.heroImage} alt="" />
            )}

            {article.instagram && (
              <div className="item-context">
                <div className="instagram-post">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-captioned
                    data-instgrm-permalink={article.instagram.url}
                    data-instgrm-version="14"
                    style={{
                      background: '#FFF',
                      border: 0,
                      borderRadius: '3px',
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                      margin: '1px',
                      maxWidth: '540px',
                      minWidth: '326px',
                      padding: 0,
                      width: '99.375%',
                    }}
                  >
                    <div style={{ padding: '16px' }}>
                      <a href={article.instagram.url} target="_blank" rel="noopener noreferrer">
                        Se dette innlegget på Instagram
                      </a>
                    </div>
                  </blockquote>
                  <script async src="//www.instagram.com/embed.js" />
                </div>
              </div>
            )}

            <div className="item-context">
              <h1 className="item-title">
                {article.itemTitle ?? article.title}
              </h1>

              {article.sections?.map((s, i) => (
                <Section key={i} s={s} index={i} />
              ))}
            </div>

          </div>

          <button onClick={() => navigate('/')} className="article-back-btn">
            ← назад
          </button>
        </div>

        <div className="small-section">

          {firstSection.map((item) => (
            <FeedItemComponent key={item.id} item={item} />
          ))}

          {/* ПЕРШИЙ SIDEBAR */}
          <GameWidget items={sidebarItemsFirst} />

          {/* 🆕 MID SECTION */}
          {middleSection.map((item) => (
            <FeedItemComponent key={item.id} item={item} />
          ))}

          {/* ДРУГИЙ SIDEBAR */}
          <Sidebar items={sidebarItemsMain} />
        </div>

        {/* ── related feed — reuses the exact same components as Home ── */}
        <div className="small-section">
          {related.map((f) => {
            if (f.type === 'youtube') return <YouTubeCard key={f.id} item={f} />
            return <NewsCard key={f.id} item={f} />
          })}
        </div>

        {/* ТРЕТІЙ SIDEBAR */}
        <Sidebar items={sidebarItemsExtra} />

      </div>
    </main>
  )
}