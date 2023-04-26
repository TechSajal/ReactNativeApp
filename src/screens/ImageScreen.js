import React from "react";
import {View,Text,StyleSheet,Image} from 'react-native'
import ImageDetail from "./components/ImageDetails";
const ImageScreen = () => {
    return(
        <View>
            <ImageDetail 
            title="Forest" 
            score = "9"
            imagesource={require("../../assets/forest.jpg")}
            />
            <ImageDetail 
            title="Beach"
            score = "7"  
            imagesource={require("../../assets/beach.jpg")}
            />
            <ImageDetail 
            title="Mountain"
            score = "4" 
            imagesource={require("../../assets/mountain.jpg")}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen;