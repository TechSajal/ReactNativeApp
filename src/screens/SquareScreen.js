import React,{useReducer} from "react";
import {Text,View,StyleSheet,Button} from 'react-native'
import ColorCounter from "./components/ColorCounter";
const COLOR_INCREMENT = 15;
// argument 1 -> state === {red:number,green:number,blue:number}
// argument 2 -> action[how to change state object] === {colortochange:"reg" || "green" || "blue" , amount:15||-15}
const reducer = (state,action) =>{
    switch(action.colorToChange){ 
        case "red":
            if(state.red+action.amount >255 || state.red + action.amount <0){
                return state;
            }else{
                return {...state , red:state.red + action.amount}
            }
        case "green" :
            return {...state , green:state.green + action.amount}
        case "blue":
            return {...state , green:state.green + action.amount}
        default:
            return state  
    }
}
const  squarescreen = () =>{
    // dispatch -> run my  reducer
const [state,dispatch] =useReducer(reducer,{red:0 , green:0 , blue:0});
console.log(state) // {red:0.green:0,blue:0}
const {red,green,blue} = state
    return(
        <View>
           <ColorCounter 
           onIncrese ={()=> dispatch({colorToChange:"red",amount:COLOR_INCREMENT}) }
           onDecrese ={()=> dispatch({colorToChange:"red",amount:-1*COLOR_INCREMENT})}
           color="Red"/>
           <ColorCounter
              onIncrese ={()=> dispatch({colorToChange:"blue",amount:COLOR_INCREMENT}) }
              onDecrese ={()=> dispatch({colorToChange:"blue",amount:-1*COLOR_INCREMENT})}
           color="Blue"/>
           <ColorCounter
              onIncrese ={()=> dispatch({colorToChange:"green",amount:COLOR_INCREMENT}) }
              onDecrese ={()=> dispatch({colorToChange:"green",amount:-1*COLOR_INCREMENT})}
           color="Green"/>
        <View style={{height:150,width:150,backgroundColor:`rgb(${red},${blue},${green})`}}/>
        </View>
    )
}

const style = StyleSheet.create({})
export default squarescreen;