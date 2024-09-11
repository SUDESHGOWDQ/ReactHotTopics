import  { useContext } from 'react';
import { ThemeContext } from '../App';

const Child = () => {
  const { mode, changeTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>My name is Sudeshowda</h1>
      <button onClick={changeTheme}>
        Switch to {mode === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  );
};

export default Child;
