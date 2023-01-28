import { useState } from "react";
import { View,TextInput,TouchableOpacity,Text,Image,StatusBar } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/AntDesign';
import { styles } from "./styles"
import { useContext } from "react";
import { AuthenticationContext } from "../../AuthContext";

export default function PaymentMethodScreen({navigation}){

    const {setPaymentmethod} =useContext(AuthenticationContext)

    return(
    
      <View style={styles.container1}>
       <View>
       <TouchableOpacity style={styles.backbutton} onPress={()=>{
                        
                        navigation.navigate('BookScreen1')
                    
                }}>
                
                <Feather name={'arrowleft'} size={40} color={'black'} 
                    style={{position:'absolute',alignSelf:'flex-start',marginTop:'7%',marginLeft:'2%'}} />

        </TouchableOpacity>

        <Text style={styles.fontstyle1}>Payment Method</Text>
       </View>

        <View style={styles.container2}>

            <TouchableOpacity onPress={()=>{setPaymentmethod('cash')}}
            style={{ height:'12%', width:'95%', marginTop:'3%', borderColor:'#D9D9D9',
            borderRadius:10,borderWidth:1,}}>
                <Text style={styles.fontstyle2}>Cash</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setPaymentmethod('paymaya')}}
            style={{ height:'12%', width:'95%', marginTop:'3%', borderColor:'#D9D9D9',
            borderRadius:10,borderWidth:1,}}>
                <Text style={styles.fontstyle2}>Paymaya</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setPaymentmethod('gcash')}}
            style={{height:'12%', width:'95%', marginTop:'3%', borderColor:'#D9D9D9',
            borderRadius:10,borderWidth:1,}}>
                <Text style={styles.fontstyle2}>Gcash</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{setPaymentmethod('credit/debit card')}}
            style={{height:'12%', width:'95%', marginTop:'3%', borderColor:'#D9D9D9',
            borderRadius:10,borderWidth:1,}}>
                <Text style={styles.fontstyle2}>Credit/Debit Card</Text>
            </TouchableOpacity>

        </View>
      </View>



)}