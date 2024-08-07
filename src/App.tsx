
import { TailwindIndicator } from "./components/tailwind-indicator"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Catalogue from "./pages/catalogue/catalogue"
import Contact from "./pages/contact/contact"
import About from "./pages/about/about"
import Panier from "./pages/panier/panier"
import Blog from "./pages/blog/blog"
import CatalogueDetail from "./pages/catalogue-detail/catalogue-detail"
import Wishlist from "./pages/wishlist/wishlist"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import Quiz from "./pages/quiz/quiz"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="catalogue-detail" element={<CatalogueDetail />} />
        <Route path="panier" element={<Panier />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>

      <TailwindIndicator />
    </>
  )
}

export default App
