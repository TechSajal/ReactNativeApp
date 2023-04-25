import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  return (
  <View>
    <Text style={styles.text}>Primathon Technology   Ventures Pvt.ltd!</Text>
    <Button 
    onPress={()=>props.navigation.navigate("Components")}
    title="Go to Components Demo"
    />
    <Button
      onPress={()=>props.navigation.navigate("List")}
      title="Go to List Demo"
    />
    <Button
     onPress={()=>props.navigation.navigate("imagescreen")}
     title="Go to Image Screen"
     />
    {/* <TouchableOpacity onPress={()=>props.navigation.navigate("List")}>
      <Text>Go to List Demo </Text>
    </TouchableOpacity> */}
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
