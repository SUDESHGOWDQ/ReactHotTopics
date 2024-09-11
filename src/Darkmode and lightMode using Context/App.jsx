import  { createContext, useState } from 'react';
import Child from './ThemeData/Child';
import './App.css';

// Create a single context that holds both theme and changeTheme function
const ThemeContext = createContext();

const App = () => {
  const [mode, setMode] = useState('light');

  const changeTheme = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={mode}>
      <ThemeContext.Provider value={{ mode, changeTheme }}>
        <Child />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
export { ThemeContext };
