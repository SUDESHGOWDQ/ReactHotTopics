import React from 'react'
import ChildA from './PropsDrilling/ChildA'

const App = () => {
  const name = "SudeshGowda"
  return (
    <div>
      <ChildA name={name}/>
    </div>
  )
}

export default App
