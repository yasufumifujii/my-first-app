import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Service from './pages/Service'
import Contents from './pages/Contents'
import ArticleDetail from './pages/ArticleDetail'
import News from './pages/News'
import Recruit from './pages/Recruit'
import About from './pages/About'
import Contact from './pages/Contact'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="contents" element={<Contents />} />
          <Route path="contents/:category/:slug" element={<ArticleDetail />} />
          <Route path="news" element={<News />} />
          <Route path="recruit" element={<Recruit />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
