import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

async function fetchBinancePrice(symbol: string): Promise<string> {
  const res = await fetch(
    `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
  )

  const data = await res.json() as { price: string }

  return parseFloat(data.price).toFixed(2)
}

export default function Header() {
  const [eth, setEth] = useState<string | null>(null)
  const [btc, setBtc] = useState<string | null>(null)
  const [narrow, setNarrow] = useState<boolean>(window.innerWidth <= 830)

  const [showHeader, setShowHeader] = useState(true)

  useEffect(() => {
    const updateNarrow = () => {
      setNarrow(window.innerWidth <= 830)
    }

    window.addEventListener('resize', updateNarrow)

    return () => {
      window.removeEventListener('resize', updateNarrow)
    }
  }, [])

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // В самом верху header всегда виден
      if (currentScrollY <= 10) {
        setShowHeader(true)
        lastScrollY = currentScrollY
        return
      }

      // Скролл вниз
      if (currentScrollY > lastScrollY) {
        setShowHeader(false)
      }

      // Скролл вверх
      else if (currentScrollY < lastScrollY) {
        setShowHeader(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const load = async () => {
      try {
        const [e, b] = await Promise.all([
          fetchBinancePrice('ETHUSDT'),
          fetchBinancePrice('BTCUSDT'),
        ])

        setEth(e)
        setBtc(b)
      } catch (_) {}
    }

    load()

    const id = setInterval(load, 5000)

    return () => clearInterval(id)
  }, [])

  const ethLabel = eth
    ? (narrow ? `$${eth}` : `ETH/USDT: $${eth}`)
    : 'Loading...'

  const btcLabel = btc
    ? (narrow ? `$${btc}` : `BTC/USDT: $${btc}`)
    : 'Loading BTC...'

  return (
    <header className={showHeader ? 'header-visible' : 'header-hidden'}>
      <div className="header-container">

        <a
          href="https://www.tradingview.com/twitter-chart/?symbol=ethusd"
          id="eth-price"
          target="_blank"
          rel="noopener noreferrer"
        >
          {ethLabel}
        </a>

        <Link className="logo-position" to="/">
          <img
            id="logo"
            src="/swagnews/link/SWAGNEWS logo.svg"
            alt="logo"
          />
        </Link>

        <a
          href="https://www.tradingview.com/twitter-chart/?symbol=btcusd"
          id="btc-price"
          target="_blank"
          rel="noopener noreferrer"
        >
          {btcLabel}
        </a>

      </div>
    </header>
  )
}
