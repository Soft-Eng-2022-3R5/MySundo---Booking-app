import React,{Component} from "react";
import { View,Text,TouchableOpacity,TextInput,StatusBar,Image } from "react-native";
import MapView from 'react-native-maps';
import { styles } from "./styles";
import Feather from 'react-native-vector-icons/Feather';
import { useState } from "react";

const latitudeDelta= 0.013
const longitudeDelta= 0.0001

export default function MapScreen({navigation}){

    const [marker,setMarker] = useState({
        Region:{
            latitude: 8.484926271277416,
            longitude: 124.65657623834194,
            latitudeDelta,
            longitudeDelta,
        }

    })

    console.log(marker)

    return(
        
        <View style={styles.container1}>
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent"/>
            <MapView
                style={styles.map}
                initialRegion={marker.Region}

                onRegionChangeComplete={(value) => setMarker(value)}
                 />
                
                <View style={styles.pinicon}>
                    
                    <Image style={styles.iconstyle}
                    source={require('../../assets/pin.png')} resizeMode='contain' />
                </View>   


                    <TouchableOpacity style={styles.button1} onPress={()=>{navigation.goBack()}}>
                        <Text style={styles.fontstyle1}>DONE</Text>
                    </TouchableOpacity>

                <View style={styles.inputstyle}>
                    
                    <TextInput
                        style={styles.searchbar}
                        placeholder="Search"
                    />

                    <Feather name={'search'} size={25} color={'black'} 
                    style={{position:'absolute',alignSelf:'flex-end',paddingRight:60,top:"20%",}} />

                </View>


                  
        </View>
    )
}