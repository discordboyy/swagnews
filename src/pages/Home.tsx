import { feedItems } from '../data/posts.ts'
import type { FeedItem } from '../components/types'
import NewsCard from '../components/NewsCard'
import YouTubeCard from '../components/YouTubeCard'
import Sidebar from '../components/Sidebar'

// After index 1 (nettspend), sidebar renders, then the rest of the feed
const SIDEBAR_BREAK_AFTER_INDEX = 1

function QuestionBanner() {
  return (
    <div className="section-question" style={{ backgroundColor: '#ffd60a' }}>
      <div className="title-question">
        <h3>
          Маєте ідею чи пропозицію?{' '}
          <span>
            <img
              style={{ display: 'inline-flex', marginBottom: '-3px' }}
              src="link/span/span-emoji 09.png"
              alt=""
            />
          </span>
        </h3>
        <p className="question-description" style={{ color: 'black' }}>
          Зв'яжіться з розробником сайту — контакти нижче.
        </p>
      </div>
      <a href="#contacts" className="button-contacts">
        <p className="button-description">контакти</p>
      </a>
    </div>
  )
}

function FeedItem({ item }: { item: FeedItem }) {
  if (item.type === 'youtube') return <YouTubeCard item={item} />
  return <NewsCard item={item} />
}

export default function Home() {
  const firstSection  = feedItems.slice(0, SIDEBAR_BREAK_AFTER_INDEX + 1)
  const secondSection = feedItems.slice(SIDEBAR_BREAK_AFTER_INDEX + 1)

  return (
    <main>
      <div className="section-news">

        <div className="small-section">
          <QuestionBanner />
          {firstSection.map((item) => (
            <FeedItem key={item.id} item={item} />
          ))}
        </div>

        <Sidebar />

        <div className="small-section">
          {secondSection.map((item) => (
            <FeedItem key={item.id} item={item} />
          ))}
        </div>

      </div>
    </main>
  )
}