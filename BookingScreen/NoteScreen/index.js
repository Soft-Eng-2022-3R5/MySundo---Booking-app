import { useState } from "react";
import { View,TextInput,TouchableOpacity,Text,Image,StatusBar } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/AntDesign';
import { styles } from "./styles"
import { useContext } from "react";
import { AuthenticationContext } from "../../AuthContext";

export default function NoteScreen({navigation}){

    const {setRidernotes} =useContext(AuthenticationContext)

    const [textcount,setTextcount] = useState('');


    return(
    
      <View style={styles.container1}>

       <View style={styles.headerpannel}>

       <TouchableOpacity style={styles.backbutton} onPress={()=>{
                        
                        navigation.goBack()
                    
                }}>
                
                <Feather name={'arrowleft'} size={40} color={'black'} 
                    style={{alignSelf:'flex-start',marginTop:'7%',marginLeft:'2%'}} />

        </TouchableOpacity>
            
         <Text style={styles.fontstyle1}>Write a note</Text>

        <TouchableOpacity style={styles.donebutton} onPress={()=>{
                        
                        setRidernotes(textcount)
                        navigation.goBack()
                    
                }}>

                <Feather name={'check'} size={40} color={'black'} 
                    style={{alignSelf:'flex-end',marginTop:'17%',marginRight:'5%'}} />

        </TouchableOpacity>

       </View>

        <View style={styles.container2}>
            
            <Text style={styles.textcount}>{textcount.length}/320</Text>

            <TextInput
                style={styles.textinputstyle}
                editable
                multiline
                numberOfLines={100}
                maxLength={320}
                placeholder="Write something.."
                onChangeText={setTextcount}
            
            />

            
           

        </View>
      </View>



)}