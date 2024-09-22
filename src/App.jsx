import ImageList from './components/ImageList/ImageList'
import './App.css'
import { useState } from 'react'
import ImageFocus from './components/ImageFocus/ImageFocus'

function App() {
  const n = 8
  const [focus,setFocus] = useState(-1)
  return (
    <>
      <ImageList n={n} setfun={setFocus}/>
      {focus != -1 && <ImageFocus n={n} source={focus} delfun={setFocus}/>}
    </>
  )
}

export default App
