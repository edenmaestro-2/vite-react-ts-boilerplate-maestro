
// import { Routes } from "react-router-dom"
import { TailwindIndicator } from "./components/tailwind-indicator"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// // import Home from "./pages/home/home"
// import Catalogue from "./pages/catalogue/catalogue"
// import Contact from "./pages/contact/contact"
// import About from "./pages/about/about"
// import Panier from "./pages/panier/panier"
// import Blog from "./pages/blog/blog"
// import CatalogueDetail from "./pages/catalogue-detail/catalogue-detail"
// import Wishlist from "./pages/wishlist/wishlist"
// import Teste from "./pages/teste/teste"
// import Login from "./pages/auth/login"
// import Register from "./pages/auth/register"


// const routes = [{ path: "/", element: <Home /> }]

function App() {
  // const children = useRoutes(routes)
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="catalogue-detail" element={<CatalogueDetail />} />
        <Route path="panier" element={<Panier />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} /> */}
      {/* <Route path="teste" element={<Teste />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* </Routes> */}


      <div className='my-auto mx-auto'>
        <div className=''>
          <p className='italic'>Maestro in development</p>
          <p className='italic text-slate-400'>This is the boilerplate made for high learning skills, creative website in responsive and processing new technologies for development.</p>



          <div className='flex justify-center'>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>

        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count: number) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>

      <Card className="my-6 mx-auto w-3/5 justify-center p-6">
        <CardHeader>
          <CardTitle>A whole univers</CardTitle>
          <CardDescription>Eden is trying to pull everything inside the code for the Votheyia Project</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Voytheia est une plateforme dédiée à l'amélioration de la qualité de vie des personnes malvoyantes grâce à un vaste catalogue de produits électroniques adaptés. Notre site web se distingue par son engagement à offrir des solutions technologiques innovantes et accessibles, permettant à nos utilisateurs de surmonter les défis quotidiens liés à la malvoyance. </p>
        </CardContent>
        <CardFooter className="justify-center">
          <p>Coming soon...</p>
        </CardFooter>
      </Card>


      <TailwindIndicator />
    </>
  )
}

export default App
