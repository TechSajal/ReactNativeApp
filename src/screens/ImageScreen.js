import React from "react";
import {View,Text,StyleSheet,Image} from 'react-native'
import ImageDetail from "./components/ImageDetails";
const ImageScreen = () => {
    return(
        <View>
            <ImageDetail 
            title="Forest" 
            imagesource={require("../../assets/forest.jpg")}
            />
            <ImageDetail 
            title="Beach"  
            imagesource={require("../../assets/beach.jpg")}
            />
            <ImageDetail 
            title="Mountain" 
            imagesource={require("../../assets/mountain.jpg")}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen;