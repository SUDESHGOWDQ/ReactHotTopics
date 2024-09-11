//Lazy loading is a technique used in web design and development to defer the initialization of an object until it's needed. 
//It's a common best practice for improving a website's performance and user experience (UX)


import React, { Suspense } from "react"

const Lazy = React.lazy(()=>import('./LazyLoading/LazyLoading'))

const App = () => {
  return (
    <div>
      <h1>Learnig Lazy Loading....</h1>
     <Suspense fallback={<div>Loading Data ....</div>}>
        <Lazy/>
     </Suspense>
    </div>
  )
}

export default App
