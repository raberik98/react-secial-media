import { useState } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './pages/Home'
import NotFound from './pages/NotFound'

import Navbar from './components/Navbar'

createRoot(document.getElementById('root')).render(
  <Router />
)

const pages = [
  "home",
  "friends"
]

function Router() {
  const [currentPage, setCurrentPage] = useState("home")


  return <>
    <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
    <main>
      {
        currentPage == "home" ? <Home/> : <NotFound/> 
      }
    </main>
    {/* //Footer! */}
  </>
}

