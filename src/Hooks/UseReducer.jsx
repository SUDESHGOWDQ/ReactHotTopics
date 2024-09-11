//The useReducer hook is a powerful tool in React for managing complex state logic in functional components
//It's often used when the state logic involves multiple sub-values or when the next state depends on the previous one
//It's similar to useState, but it allows for more structured state updates

//Reducer will accept two Parameter(CurrentState,action)



import  { useReducer } from 'react';
// Counter component
const App = () => {
 
const initialState = {count:0}  
const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      default:
        throw new Error(`Unknown action: ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(reducer,initialState);


  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default App;
