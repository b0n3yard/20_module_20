import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import{Routes,Route} from 'react-router-dom'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const [page,setpage] = useState('about')
  window.addEventListener('beforeunload',(e)=>{
    e.preventDefault()
    alert('reloading')
  })
  
  
  const location = useLocation()
  console.log(location.pathname)
  return (
    <>
    <Header />

    <Routes>
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="/about" element={<About/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/contact' element={<Contact/>}/> 

    </Routes>
      <Footer/>
    </>
  )
}

export default App
