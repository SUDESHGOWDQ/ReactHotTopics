import React, { useRef, useState } from 'react'

const UseRef = () => {
  
    const[name,setName]=useState("Sudesh")
    const refElement = useRef("")
    console.log(refElement);

    function Reset(){
        setName("")
        refElement.current.focus()
    }

    function Handle(){
      refElement.current.style.color="red"
    }
    
  return (
    <div>
      <input ref={refElement} value={name} type='text' onChange={(e)=>setName(e.target.value)}/>
      <button onClick={Reset}>Reset</button>
      <button onClick={Handle}>Submit</button>
    </div>
  )
}

export default UseRef
