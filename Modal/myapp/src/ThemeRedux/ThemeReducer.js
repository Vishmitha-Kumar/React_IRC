import { TOGGLETHEME } from "./ThemeAction";
// import React from 'react'
const initialState={
    theme:'black'
}
const ThemeReducer=(state=initialState,action)=>{
    switch(action.type){
      case TOGGLETHEME:
        return{...state,theme: state.theme==='black'?'white':'black'}
        default :
        return state
    }
}
export default ThemeReducer