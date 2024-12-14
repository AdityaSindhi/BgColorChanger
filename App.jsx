import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
    <div className='w-[100vw] h-screen duration-200'
    style={{backgroundColor: color}}>
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
  <div className='flex flex-wrap justify-ceneter gap-3 shadow-lg bg-white px-3 py-4 rounded-3xl'>
   
   
   
<button 
onClick={()=> setColor('red')}
className='outline-none px-4 rounded-full shadow-lg'
style={{backgroundColor: 'red'}}>Red</button>
<button 
onClick={()=> setColor('green')}
className='outline-none px-4 rounded-full shadow-lg'
style={{backgroundColor: 'green'}}>Green</button>
<button
onClick={()=> setColor('yellow')}
 className='outline-none px-4 rounded-full shadow-lg'
style={{backgroundColor: 'yellow'}}>Yellow</button>
<button
onClick={()=> setColor('blue')}
 className='outline-none px-4 rounded-full shadow-lg'
style={{backgroundColor: 'blue'}}>Blue</button>
<button 
onClick={()=> setColor('pink')}
className='outline-none px-4 rounded-full shadow-lg'
style={{backgroundColor: 'pink'}}>Pink</button>
<button
onClick={()=> setColor('orange')}
 className='outline-none px-4 rounded-full shadow-lg'
style={{backgroundColor: 'orange'}}>Orange</button>
<button 
onClick={()=> setColor('black')}
className='outline-none px-4 rounded-full shadow-lg'
style={{backgroundColor: 'Black'}}>Black</button>
 
<button 
onClick={()=> setColor('white')}
className='outline-none px-4 rounded-full shadow-lg'
style={{backgroundColor: 'white'}}>white</button>
 
<button 
onClick={()=> setColor('aqua')}
className='outline-none px-4 rounded-full shadow-lg'
style={{backgroundColor: 'aqua'}}>aqua</button>
 
  </div>
</div>

    </div>
    </>
  )
}

export default App
