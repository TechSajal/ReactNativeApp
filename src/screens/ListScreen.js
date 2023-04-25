 import React from "react";
 import {View,Text,StyleSheet,FlatList} from 'react-native'

 const listscreen = () =>{
   const friend = [
      {name:"Friend 1",age:21},
      {name:"Friend 2",age:22},
      {name:"Friend 3",age:61},
      {name:"Friend 4",age:11},
      {name:"Friend 5",age:61}, 
      {name:"Friend 6",age:51},
      {name:"Friend 7",age:43},
      {name:"Friend 8",age:23},
      {name:"Friend 9",age:59},
      {name:"Friend 10",age:46}  
   ]
    return (
      <View>
         {/* elemant === {item :{name:"Frient#1"},index:0} */}
          <FlatList 
         
          keyExtractor={ friend => friend.name}
          data={friend}  
          renderItem={(elemant) => {
            return <Text style={styles.textstyle}>{elemant.item.name} - Age {elemant.item.age}</Text>
          }}
          />
          </View>
    );
 }

 const styles = StyleSheet.create({
     textstyle:{
        marginVertical:50,
        marginHorizontal:50,
        fontSize:20
     }
 });

 export default listscreen;