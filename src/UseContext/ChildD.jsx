
import  { useContext } from 'react';
import { data1, data2 } from '../App';

const ChildD = () => {
  const name = useContext(data1);
  const age = useContext(data2);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default ChildD;
