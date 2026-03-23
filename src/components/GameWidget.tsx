// src/components/GameWidget.tsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import '../css/game-widget.css'

import type { SidebarItem } from './types'

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

export default function GameWidget({ items }: { items: SidebarItem[] }) {
  const slides = chunkArray(items, 6)

  return (
    <div className="game-widget">
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="slide-group">
              {group.map((item) => (
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}