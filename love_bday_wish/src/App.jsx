import { useState } from 'react' 
import './App.css'
import loveImg from './assets/sneha.jpg'
function App() {
  const [count, setCount] = useState(0)
  const showQuote =()=>{

  }
  return (
  <>
  <div>
    <h1 className='heading'>Happiest Birthday sneha</h1>

    <img src={loveImg} className='image'onClick={showQuote}></img>
    </div>
  </>
  )
}

export default App
