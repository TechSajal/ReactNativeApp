import React from "react";
import {Text,View,StyleSheet,Button} from 'react-native'

const  ColorCounter = (props) =>{
    return(
        <View style={style.margin}>
            <Text>{props.color}</Text>
          <Button
          onPress={()=>props.onIncrese()}
          title={`Increse ${props.color}`}/>
          <Button
          onPress={()=>props.onDecrese()}
          title={`Decrese ${props.color}`}/>
        </View>
    )
}

const style = StyleSheet.create({
    margin:{
       marginTop:20,
       marginHorizontal:20,
    },
    marginsub:{
      marginTop:10,
    }
})
export default ColorCounter;