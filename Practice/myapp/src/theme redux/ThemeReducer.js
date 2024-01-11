import { TOGGLETHEME } from "./ThemeAction";

const initialState={
    theme:'black'
}
const ThemeReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case TOGGLETHEME:
            return{...state,theme:state.theme==='black'?'white':'black'}
            default:
                return state;
    }
}
export default ThemeReducer