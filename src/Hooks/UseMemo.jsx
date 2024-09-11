import { useState,useMemo } from "react"

const UseMemo = () => {
    const[add,setAdd]=useState(0)
    const[minus,setMinus]=useState(100)

    function multiply (){
        console.log("Hello")
        return add*10
    }

   const memovalue = useMemo(() =>  multiply(),[add])

  return (
    <div>
       <p>Multiplication-{memovalue}</p>  
      <br/>
      <button onClick={()=>setAdd(add+1)}>+</button><span>{add}</span>
      <br/>
      <button onClick={()=>setMinus(minus-1)}>-</button><span>{minus}</span>
    </div>
  )
}

export default UseMemo
