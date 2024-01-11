import { toggleTheme } from "./ThemeAction";
import React from 'react'
import {useDispatch,useSelector} from 'react-redux'

const Theme=()=>{
    const dispatch=useDispatch()
    const theme=useSelector((state)=>state.theme)

    const style={
        backgroundColor:theme,
        width:'100%',
        height:'100vh',
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        flexDirection:'column'
    }
    const btn={
        backgroundColor:'gray',
        padding:'10px',
        color:'white',
        cursor:'pointer'
    }
    return(
        <div style={style}data-testid='theme-container'>
          <button style={{...btn,width:'120px'}} onClick={()=>dispatch(toggleTheme())}>Theme</button>
        </div>
    )
}
export default Theme