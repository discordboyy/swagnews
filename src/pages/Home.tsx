// src/pages/Home.tsx
import { feedItems } from '../data/posts.ts'
import type { FeedItem } from '../components/types'
import NewsCard from '../components/NewsCard'
import YouTubeCard from '../components/YouTubeCard'
import { sidebarItemsMain, sidebarItemsExtra, sidebarItemsFirst } from '../data/sidebar.ts'
import Sidebar from '../components/Sidebar'
import GameWidget from '../components/GameWidget'
import "../css/logo.css"
import { useEffect, useState } from "react";

// After index 1 (nettspend), sidebar renders, then the rest of the feed
const SIDEBAR_BREAK_AFTER_INDEX = 1

function QuestionBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const isHidden = localStorage.getItem("questionBannerHidden");
    if (isHidden === "true") {
      setVisible(false);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem("questionBannerHidden", "true");
  };

  if (!visible) return null;

  return (
    <div
      className="section-question"
      style={{ backgroundColor: "#ffd60a", position: "relative" }}
    >
      {/* КНОПКА ЗАКРЫТИЯ */}
      <button
        onClick={handleClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          border: "none",
          background: "transparent",
          fontSize: "20px",
          cursor: "pointer",
          zIndex: "9999",
        }}
      >
        ✕
      </button>

      <div className="title-question">
        <h3>
          Маєте ідею чи пропозицію?{" "}
          <span>
            <img
              style={{ display: "inline-flex", marginBottom: "-3px" }}
              src="/swagnews/link/span/span-emoji 09.png"
              alt=""
            />
          </span>
        </h3>
        <p className="question-description" style={{ color: "black" }}>
          Зв'яжіться з розробником сайту — контакти нижче.
        </p>
      </div>

      <a href="#contacts" className="button-contacts">
        <p className="button-description">контакти</p>
      </a>
    </div>
  );
}

function FeedItem({ item }: { item: FeedItem }) {
  if (item.type === 'youtube') return <YouTubeCard item={item} />
  return <NewsCard item={item} />
}

export default function Home() {
  const firstSection  = feedItems.slice(0, SIDEBAR_BREAK_AFTER_INDEX + 1)
  const midSection    = feedItems.slice(SIDEBAR_BREAK_AFTER_INDEX + 1, SIDEBAR_BREAK_AFTER_INDEX + 3)
  const secondSection = feedItems.slice(SIDEBAR_BREAK_AFTER_INDEX + 3)

  return (
    <main>
      <div className="section-news">

        <div className="small-section">
          <QuestionBanner />

          {firstSection.map((item) => (
            <FeedItem key={item.id} item={item} />
          ))}

          {/* ПЕРШИЙ SIDEBAR */}
          <GameWidget items={sidebarItemsFirst} />

          {/* MID SECTION (2 items) */}
          <div className="small-section">
            {midSection.map((item) => (
              <FeedItem key={item.id} item={item} />
            ))}
          </div>

          {/* ДРУГИЙ SIDEBAR */}
          <Sidebar items={sidebarItemsMain} />
        </div>

        <div className="small-section">
          {secondSection.map((item) => (
            <FeedItem key={item.id} item={item} />
          ))}
        </div>

        {/* ТРЕТІЙ SIDEBAR */}
        <Sidebar items={sidebarItemsExtra} />

      </div>
    </main>
  )
}
