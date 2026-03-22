// src/components/Sidebar.tsx
import type { SidebarItem } from './types'

export default function Sidebar({ items }: { items: SidebarItem[] }) {
  return (
    <section className="catalog-third-item">
      {items.map((item: SidebarItem) => (
        <a
          key={item.id}
          href={item.url}
          className="catalog-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="catalog-image" src={item.image} alt="" />
          <article className="catalog-item-description">
            <p className="catalog-header">{item.title}</p>
            <div className="catalog-item-meta">
              <p className="catalog-meta-name">{item.platform}</p>
              <p className="catalog-meta-time">{item.date}</p>
            </div>
          </article>
        </a>
      ))}
    </section>
  )
}