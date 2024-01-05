import {useState} from 'react'
function Counter(){
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    return(
        <>
          <button onClick={increment}>Increment</button>
          <p>Count :{count}</p>
          <button onClick={decrement}>Decrement</button>
          </>
    )
}
export default Counter