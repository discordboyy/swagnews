import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

async function fetchBinancePrice(symbol: string): Promise<string> {
  const res  = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`)
  const data = await res.json() as { price: string }
  return parseFloat(data.price).toFixed(2)
}

export default function Header() {
  const [eth,    setEth]    = useState<string | null>(null)
  const [btc,    setBtc]    = useState<string | null>(null)
  const [narrow, setNarrow] = useState<boolean>(window.innerWidth <= 830)

  useEffect(() => {
    const updateNarrow = () => setNarrow(window.innerWidth <= 830)
    window.addEventListener('resize', updateNarrow)
    return () => window.removeEventListener('resize', updateNarrow)
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

  const ethLabel = eth ? (narrow ? `$${eth}` : `ETH/USDT: $${eth}`) : 'Loading...'
  const btcLabel = btc ? (narrow ? `$${btc}` : `BTC/USDT: $${btc}`) : 'Loading BTC...'

  return (
    <header>
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
          <img id="logo" src="/swagnews/link/SWAGNEWS logo.svg" alt="logo" />
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
