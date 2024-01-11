import {toggleTheme} from './ThemeAction'
import {useDispatch,useSelector} from 'react-redux'
import React from 'react';
const Theme=()=>{
    const dispatch=useDispatch();
    const theme=useSelector((state)=>state.theme)
     
    const style={
           width:'100%',
           height:'100vh',
           justifyContent:'center',
        alignItems:'center',
           displayflex:'flex',
           flexDirection:'column',
           backgroundColor:theme,
    }
    const btn={
        backgroundColor:'gray',
        color:'white',
        padding:'10px',
        cursor:'pointer',
       
    }
    return(
        <div style={style} data-testid='theme-container'>
            <button style={{...btn,width:'120px'}}onClick={()=>dispatch(toggleTheme())}>Theme</button>
        </div>
    )
}
export default Theme