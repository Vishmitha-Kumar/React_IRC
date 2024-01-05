import React from 'react'
import {decrement,increment} from './CounterAction'
import {useDispatch,useSelector} from 'react-redux'
function Counter(){
    const dispatch = useDispatch();
    const count=useSelector((state)=>state.count)
    return(
        <div>
          <p>Count : </p>
          <button onClick={()=>dispatch(decrement())}>Decrement</button>
          <button onClick={()=>dispatch(increment())}>Increment</button>
        </div>
    )
}