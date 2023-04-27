import React from "react";
import {Text,View,StyleSheet} from 'react-native'
const boxscreen = () =>{
  return(
    <View style={styles.patentstyle}>
    <Text style={styles.childstyle}>Child #1</Text>
    <Text style={styles.childstyle}>Child #2</Text>
    <Text style={styles.childstyle}>Child #3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    childstyle:{
       borderWidth:2,
       borderColor:"black",
    },
     patentstyle:{
        height:200,
         borderColor:"red",
         borderWidth:2,
         alignItems:"center",
         flexDirection:"row",
         justifyContent:"center"
     }  
})
export default boxscreen