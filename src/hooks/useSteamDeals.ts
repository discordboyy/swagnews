// src/hooks/useSteamDeals.ts
import { useEffect, useState } from 'react'
import type { SidebarItem } from '../components/types'

export function useSteamDeals() {
  const [items, setItems] = useState<SidebarItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://207.127.92.194.nip.io/steam-deals.json', {
      cache: 'no-store',
    })
      .then((r) => {
        if (!r.ok) throw new Error(`steam-deals.json: ${r.status}`)
        return r.json()
      })
      .then((data) => setItems(data.items ?? []))
      .catch((err) => {
        console.error('Failed to load steam deals:', err)
        setItems([])
      })
      .finally(() => setLoading(false))
  }, [])

  return { items, loading }
}