export type FeedItemType = 'article' | 'external' | 'youtube'
export type CardSize     = 'short'   | 'long'

interface SharedCardFields {
  id:             string
  size:           CardSize
  title:          string
  category:       string
  description?:   string
  image?:         string | null
  emoji?:         string
  imagePosition?: 'top' | 'bottom'
}

export interface ArticleFeedItem extends SharedCardFields {
  type:      'article'
  bgStyle?:  boolean
  content:   string
}

export interface ExternalFeedItem extends SharedCardFields {
  type: 'external'
  url:  string
}

export interface YouTubeFeedItem {
  id:      string
  type:    'youtube'
  size:    CardSize
  title:   string
  channel: string
  views?:  string | null
  avatar:  string
  url:     string
}

export type FeedItem = ArticleFeedItem | ExternalFeedItem | YouTubeFeedItem

export interface SidebarItem {
  id:       string
  image:    string
  title:    string
  platform: string
  date:     string
  url:      string
}