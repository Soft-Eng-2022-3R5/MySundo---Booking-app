import Carousel from "react-native-reanimated-carousel";
import { Dimensions,Image,StyleSheet } from "react-native";
import React from "react";
import { styles } from "./styles";

const windowWidth = Dimensions.get('window').width;
const windowHeight = '50%';

const imageslide = [

    <Image
    style={styles.imagestyle}
        source={require('../../assets/image1.png')}
        resizeMode='cover'
    
      />,

    <Image
        style={styles.imagestyle}
        source={require('../../assets/image2.png')}
        resizeMode='cover'
       
      />,

    <Image
    
        style={styles.imagestyle}
        source={require('../../assets/image3.png')}
        resizeMode='cover'
        
      />,

    <Image
        style={styles.imagestyle}
        source={require('../../assets/image4.png')}
        resizeMode='cover'
    />,


];

export default function CarouselComponent(){

return(
    <Carousel
        loop
        width={windowWidth}
        height={windowHeight}
        autoPlay
        scrollAnimationDuration={2500}
        data={imageslide}
        renderItem={({ index }) => {
        return imageslide[index];
    }}
    />
 
)
    }

   