import { createContext } from "react"
import ChildD from './UseContext/ChildD'


const data1 = createContext()
const data2 = createContext()
const App = () => {
  const name = "Shashank"
  const age = 26

  return (
    <div>
      <data1.Provider value={name}>
        <data2.Provider value={age}>
          <ChildD/>
        </data2.Provider>
      </data1.Provider>
    </div>
  )
}

export default App
export {data1,data2}
