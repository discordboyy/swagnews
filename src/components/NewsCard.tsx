// src/components/NewsCard.tsx
import { useNavigate } from 'react-router-dom'
import type { ArticleFeedItem, ExternalFeedItem } from './types'
import "../css/new-style.css"; // основные стили

type NewsCardItem = ArticleFeedItem | ExternalFeedItem

interface Props {
  item: NewsCardItem
}

export default function NewsCard({ item }: Props) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (item.type === 'external') {
      window.open(item.url, '_blank', 'noopener,noreferrer')
    } else {
      navigate(`/post/${item.id}`)
    }
  }

  const containerClass =
  item.type === 'article' && item.size === 'long'
    ? 'long-container-youtube'
    : 'short-container'

  const style =
  item.type === 'article' && item.bgStyle
    ? {
        background: `linear-gradient(to top, rgba(0,0,0,0.25), transparent), url(../src/link/content/another/offgodtate-1.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {}
  
  const imageEl = item.image ? (
    <img className="image-content" src={item.image} alt="" />
  ) : null

  const innerClass =
  item.type === 'article' && item.size === 'long'
    ? 'content-section-long-container-youtube'
    : 'content-section-short-container'

  return (
    <div
      className={containerClass}
      id={item.id}
      onClick={handleClick}
      style={{ cursor: 'pointer', ...style }}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className={innerClass} id={`${item.id}-inner`}>
        {item.imagePosition !== 'bottom' && imageEl}

        <div className="title-section" id={`${item.id}-title-section`}>
          <h2 id={`${item.id}-h2`}>{item.category}</h2>
          <h1 id={`${item.id}-h1`}>
            {item.title}
            {item.emoji && (
              <span>
                <img
                  style={{ display: 'inline-flex', marginBottom: '-9px' }}
                  src={item.emoji}
                  alt=""
                />
              </span>
            )}
          </h1>
        </div>

        {item.imagePosition === 'bottom' && imageEl}

        {item.description && (
          <p className="content-description-short-container">
            {item.description}
          </p>
        )}
      </div>
    </div>
  )
}