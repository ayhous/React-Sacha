import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyFunctionMovieComponent } from './MyFunctionMovieComponent'
import { MovieComponent} from './MovieComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     
      <MovieComponent/>
      
    </div>
  )
}

export default App
