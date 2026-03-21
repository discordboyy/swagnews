// src/pages/Article.tsx
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { feedItems } from '../data/posts.ts'
import type { ArticleFeedItem, ArticleSection } from '../components/types'
import Sidebar from '../components/Sidebar'

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

  return (
    <main>
      <div className="section-news">

        {/* ── big-section (matches original layout) ── */}
        <div className="big-section">
          <div className="open-item">

            {/* Hero image (page-07, page-05 style) */}
            {article.heroImage && (
              <img className="open-item-image" src={article.heroImage} alt="" />
            )}

            {/* Instagram embed (page-08 style) */}
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

            {/* Main content block */}
            <div className="item-context">
              <h1 className="item-title">
                {article.itemTitle ?? article.title}
              </h1>

              {article.sections?.map((s, i) => (
                <Section key={i} s={s} index={i} />
              ))}
            </div>

          </div>

          {/* Back button */}
          <button onClick={() => navigate('/')} className="article-back-btn">
            ← назад
          </button>
        </div>

        {/* ── Sidebar ── */}
        <Sidebar />

        {/* ── small-section (related feed on the right, same as originals) ── */}
        <div className="small-section">
          {feedItems
            .filter((f) => f.id !== article.id)
            .slice(0, 8)
            .map((f) => {
              if (f.type === 'youtube') {
                const style = {
                  cursor: 'pointer',
                  background: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${f.thumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }

                const containerClass = f.size === 'short' ? 'short-container-youtube' : 'long-container-youtube'
                const innerClass     = f.size === 'short' ? 'content-section-short-container-youtube' : 'content-section-long-container-youtube'
                return (
                  <div
                    key={f.id}
                    className={containerClass}
                    onClick={() => window.open(f.url, '_blank', 'noopener,noreferrer')}
                    style={style}
                  >
                    <div className={innerClass} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                      <div className="title-section">
                        <img className="icon-youtube" src={f.avatar} alt="" />
                        <h2>{f.channel}{f.views ? `, ${f.views}` : ''}</h2>
                        <h1 style={{ color: 'white' }}>{f.title}</h1>
                      </div>
                    </div>
                  </div>
                )
              }
              return (
                <div
                  key={f.id}
                  className="short-container"
                  onClick={() => navigate(`/post/${f.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="content-section-short-container">
                    {f.image && <img className="image-content" src={f.image} alt="" />}
                    <div className="title-section" id={`${item.id}-title-section`}>
                      <h2 id={`${item.id}-h2`}>{f.category}</h2>
                      <h1 id={`${item.id}-h1`}>{f.title}</h1>
                    </div>
                    {f.description && (
                      <p className="content-description-short-container">{f.description}</p>
                    )}
                  </div>
                </div>
              )
            })}
        </div>

      </div>
    </main>
  )
}