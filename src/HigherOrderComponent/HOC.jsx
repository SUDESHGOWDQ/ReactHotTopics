function Hoc(OldComponent){
    return function NewComponent(props){
        return <OldComponent {...props} newProps="I am SudeshGowda"></OldComponent>
    }
}
export default Hoc