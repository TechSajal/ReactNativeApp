import React,{useState} from "react";
import {Text,View,StyleSheet,Button} from 'react-native'
import ColorCounter from "./components/ColorCounter";
const COLOR_INCREMENT = 15;
const  squarescreen = () =>{
    const [red,setRed] = useState(0)
    const [blue,setBlue] = useState(0)
    const [Green,setGreen] = useState(0)
    const setcolor = (color,change) =>  {
        // color === red,green,blue
        // change === +15,-15
        if(color === 'red'){
           if(red + change > 255 || red + change <0){
             return;
           }else{
              setRed(red + change);
           }
        }
        if(color === "blue"){
            if(blue + change > 255 || blue + change <0){
              return;
            }else{
               setBlue(blue+change);
            }
         }
         if(color === "Green"){
            if(Green + change > 255 || Green + change <0){
              return;
            }else{
               setGreen(Green+change);
            }
         }
    }

    return(
        <View>
           <ColorCounter 
           onIncrese ={()=> setcolor("red",COLOR_INCREMENT)}
           onDecrese ={()=> setcolor("red",-1*COLOR_INCREMENT)}
           color="Red"/>
           <ColorCounter
             onIncrese ={()=> setcolor("blue",COLOR_INCREMENT)}
             onDecrese ={()=> setcolor("blue", -1*COLOR_INCREMENT)}
           color="Blue"/>
           <ColorCounter
             onIncrese ={()=> setcolor("Green",COLOR_INCREMENT)}
             onDecrese ={()=> setcolor("Green",-1*COLOR_INCREMENT)}
           color="Green"/>
        <View style={{height:150,width:150,backgroundColor:`rgb(${red},${blue},${Green})`}}/>
        </View>
    )
}

const style = StyleSheet.create({})
export default squarescreen;