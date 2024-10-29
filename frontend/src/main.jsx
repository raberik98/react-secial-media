import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"

import Layout from './pages/Layout'
import Home from './pages/Home'
import Friends from './pages/Friends'
import Admin from './pages/Admin'
import Registration from './pages/Registration'
import NotFound from './pages/NotFound'


createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path={'/'} element={<Layout/>} >
        <Route path={"/"} element={<Home />} />
        <Route path={"/friends"} element={<Friends />} />
        <Route path={"/register"} element={<Registration />} />
        <Route path={"/admin"} element={<Admin />} />

        {/* The not found route comes last */}
        <Route path={"/*"} element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
)


// function Router() {
//   const [currentPage, setCurrentPage] = useState("home")


//   return <>
//     <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
//     <main>
//       {
//         currentPage == "home" ? <Home/> :
//         currentPage == "friends" ? <Friends/> :
//         <NotFound/> 
//       }
//     </main>
//     {/* //Footer! */}
//   </>
// }

