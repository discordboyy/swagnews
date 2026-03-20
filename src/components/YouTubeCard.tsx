import type { YouTubeFeedItem } from './types'

interface Props {
  item: YouTubeFeedItem
}

export default function YouTubeCard({ item }: Props) {
  const handleClick = () => {
    window.open(item.url, '_blank', 'noopener,noreferrer')
  }

  const containerClass = item.size === 'short'
    ? 'short-container-youtube'
    : 'long-container-youtube'

  const innerClass = item.size === 'short'
    ? 'content-section-short-container-youtube'
    : 'content-section-long-container-youtube'

  return (
    <div
      className={containerClass}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div
        className={innerClass}
        style={{
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'flex-start',
          justifyContent: 'flex-end',
        }}
      >
        <div className="title-section">
          {item.avatar && (
            <img className="icon-youtube" src={item.avatar} alt="" />
          )}
          <h2>
            {item.channel}
            {item.views ? `, ${item.views}` : ''}
          </h2>
          <h1 style={{ color: 'white' }}>{item.title}</h1>
        </div>
      </div>
    </div>
  )
}