//Controlled Component: The component's state is controlled by React. 
//The value of the input is set via props, and any changes to the input's value are handled by React (via an onChange handler).
// You would typically use the state of the parent component or a state hook to manage the value of the input.


import  { useRef, useState } from 'react';

const App = () => {
  const [name, setName] = useState("sudesh");
  const refElement = useRef()
  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
  };

  const handleClick = (e)=>{
    e.preventDefault()
    console.log((refElement.current.value).toUpperCase())
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <label>Name</label>
        <input
          value={name}
          type="text"
          onChange={handleChange}
          ref={refElement}
        />
        <button >Submit</button>
      </form>
    </div>
  );
};

export default App;
