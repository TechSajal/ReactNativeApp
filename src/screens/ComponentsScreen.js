//  part one
 import React from "react";
 import {Text,StyleSheet,View} from 'react-native';
 
//  part 2
const ComponentsScreen =() =>{
    const greeting = "Hi There!!!"
    const name = "Sajal Kaushal"
    return (
    <View>
        <Text style={style.textStyle}>Getting started with react native!</Text>
        <Text style={style.textsizename}> My name is {name}</Text>
    </View>
    )
}

// part 3
const style =StyleSheet.create({
    textStyle:{
        fontSize:45,
    },
    textsizename:{
      fontSize:20,
    }

});
// part 4
export default ComponentsScreen;