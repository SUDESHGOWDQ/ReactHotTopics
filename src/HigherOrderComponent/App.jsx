import Hoc from './HigherOrderComponent/HOC'

const App = (props) => {
  return (
    <div>
      {props.newProps}
    </div>
  )
}

export default Hoc(App)
