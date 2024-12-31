import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Products from './components/Products'
import Blogs from './components/Blogs'
import NewsLetter from './components/NewsLetter'
import Myfooter from './components/Myfooter'

function App() {
 
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Products/>
    <Blogs/>
    <NewsLetter/>
    <Myfooter/>
    </div>
    </>
  )
}

export default App
