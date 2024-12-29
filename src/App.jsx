import { useState } from 'react'

import './App.css'
import Cards from './Card/Cards'
import Nav from './Nav/Nav'
import Slider from "./Slider/Slider"
import ShowCard from "./ShowCard/ShowCard"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Nav/>}/>
   

  </Routes>
</BrowserRouter>
<Slider/>
<ShowCard/>
<Cards/>
    
    </>
  )
}

export default App
