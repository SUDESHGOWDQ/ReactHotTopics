//Uncontrolled Component: The component's state is not controlled by React. Instead,
// the input element maintains its own internal state. 
//You would typically use a ref to access the value of the input


const App = () => {
    return (
      <div>
      <form>
          <label>Name</label>
          <input value={"sudesh"} type="text"/>
      </form>
      </div>
    )
  }
  
  export default App
  