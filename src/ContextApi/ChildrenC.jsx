import { DataContext,DataContext2 } from '../App'

const ChildrenC = () => {
  return (
    <div>
      <h1>Hi i am ChildC</h1>
      <DataContext.Consumer>
        {
            (name)=>{
                return(
                    <>
                       <DataContext2.Consumer>
                        {
                            (gender)=>{
                                return(
                                    <h1>My name is {name} and my gender is {gender}</h1>
                                )
                            }
                        }
                       </DataContext2.Consumer>
                    </>
                )
            }
        }
      </DataContext.Consumer>
    </div>
  )
}

export default ChildrenC
