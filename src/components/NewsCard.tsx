import { useNavigate } from 'react-router-dom'
import type { ArticleFeedItem, ExternalFeedItem } from './types'

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

  const imageEl = item.image ? (
    <img className="image-content" src={item.image} alt="" />
  ) : null

  return (
    <div
      className="short-container"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className="content-section-short-container">
        {item.imagePosition !== 'bottom' && imageEl}

        <div className="title-section">
          <h2>{item.category}</h2>
          <h1>
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