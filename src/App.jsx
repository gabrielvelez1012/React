import { useState } from 'react'
import reactLogo from './assets/react.svg'
import User from './components/User'
import Hobbies from './components/Hobbies'
import Time from './components/Time'
import Stack from './components/Stack'
import Food from './components/Food'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const sayHi = () => {
    alert("Hello World")
    console.log("Gabriel")
  }

  const me = {
    name: "Gabriel",
    movie: "Advangers end game",
    music: "Salsa"
  }

  return (
    <div className='container'>
      <div className="App">
        <User/>
        <h1 className='title'>Sobre mí</h1>
          <ul>
            <li>{me.name}</li>
            <li>Pelicula favorita: {me.movie}</li>
            <li>Musica favorita: {me.music}</li>
            </ul>
            <button className='button' onClick={sayHi}>Ok</button>
          </div>
          
          <Hobbies/>
          <Time/>
          <Food/>
          
          <Stack/>
    </div>
    
  )
}

export default App
