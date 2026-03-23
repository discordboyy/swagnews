// src/App.tsx
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home    from './pages/Home.tsx'
import Article from './pages/Article.tsx'

export default function App() {
  return (
    <HashRouter>
      <Header />
      <hr />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/post/:id" element={<Article />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}