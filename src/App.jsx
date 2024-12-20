import { useState } from 'react'
import Navbar from './components/Navbar'
import TagGif from './components/TagGif'
import RandomGif from './components/RandomGif'

function App() {
  return (
    <div className='flex flex-col justify-evenly items-center gap-10 background-texture text-white'>
      <Navbar/>
      <RandomGif/>
      <TagGif/>
    </div>
  )
}

export default App
