import React from 'react'
import ChildC from './ChildB'

const ChildB = (name) => {
  return (
    <div>
      <ChildC name={name}/>
    </div>
  )
}

export default ChildB
