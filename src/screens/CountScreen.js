import React,{useState} from "react";
import {Text,View,StyleSheet,Button} from 'react-native'

const countscreen = ()=>{
    // todo:Fix this
    // let counter =0;
    const[counter,setcounter]=useState(0);
    return(
        <View>
            <Button title="Increase" onPress={()=>{
                setcounter(counter+1);
            }}/>
            <Button title="Decrease" onPress={()=>{
                setcounter(counter-1);
            }}/>

           <Text>Current Count:{counter}</Text>
        </View>
    )
}

const style = StyleSheet.create({})
export default countscreen;