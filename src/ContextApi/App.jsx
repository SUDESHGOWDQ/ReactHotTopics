import  { createContext } from 'react';
import ChildrenC from './ContextApi/ChildrenC';


const DataContext = createContext();
const DataContext2 = createContext()

const App = () => {
  const name = "SudeshGowda MD";
  const gender = "Male"

  return (
    <div>
      <DataContext.Provider value={name}>
      <DataContext2.Provider value={gender}>
        <ChildrenC />
        </DataContext2.Provider>
      </DataContext.Provider>
    </div>
  );
};

export default App;
export { DataContext,DataContext2};
