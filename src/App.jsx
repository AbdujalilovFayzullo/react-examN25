import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/pages/Register'
import History from './components/pages/History'
import Library from './components/pages/Library'
import Like from './components/pages/Like'
import Subscriptions from './components/pages/Subscriptions'
import Trending from './components/pages/Tranding'
import Music from './components/pages/Music'
import Next from './components/pages/Next'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/login' element={<Login/>} />
        <Route  path='/history' element={<History/>} />
        <Route  path='/library' element={<Library/>}/>
        <Route  path='/like' element={<Like/>}/>
        <Route  path='/subscriptions' element={<Subscriptions/>} />
        <Route  path='/trending' element={<Trending/>} />
        <Route  path='/music' element={<Music/>} />
        <Route  path='/next' element={<Next/>} />

      </Routes>
      
      </BrowserRouter>

    </>
  )
}

export default App
