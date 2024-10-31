
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Moviedetails from './Moviedetails'
import Movies from './Movies'
import Navbar from './Navbar'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Movies/>}/>
      <Route path='/movieDetail' element = {<Moviedetails/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
