import React,{useState} from "react";
import { Text,View,StyleSheet,TextInput} from "react-native";

const squarescreen = () => {
    const [name,setname] = useState("");
   return(
     <View>
        <Text>Enter Name:</Text>
        <TextInput
         autoCapitalize="none"
         autoCorrect={false} 
         onChangeText={newvalue => setname(newvalue)}
         style={styles.input}/>

         <Text>My name is {name}</Text>
     </View>
   )
}
const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:"black",
        borderWidth:1
    }
})
export default squarescreen;