import React,{useState} from "react";
import {Text,View,StyleSheet,Button,FlatList} from 'react-native'

const addcolor = () =>{
    const [colors,setcolor] = useState([])
    return(
        <View  style={styles.margin}>
             <Button
             onPress={()=>{
                setcolor([...colors,randomRgb()])
             }}
             title="Add a Color"/>
               <FlatList
                  keyExtractor={(item) => item}
                  data={colors}
                  renderItem={(item)=>{
                     return  <View   style={{height:100,width:100,backgroundColor:item.item,marginHorizontal:10,marginVertical:10}}/>  
                  }}
               />
        </View>
    )
}

// helper class

const randomRgb = () =>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({
    margin:{ 
       marginTop:30,
       marginHorizontal:30
    }
})
export default addcolor;