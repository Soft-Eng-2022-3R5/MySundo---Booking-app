import { View,Text, Image, TouchableOpacity,StatusBar,TextInput,Alert} from "react-native"
import { React,useState } from "react"
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Screen1({navigation}){

    const [verfiedemail,setVerfiedemail] = useState('')

    const [isFocused, setIsFocused] = useState({
        entry1: false,
        entry2: false,
    })
    const handleInputFocus = (textinput) => {
        setIsFocused({
          [textinput]: true
        })
      }
      const handleInputBlur = (textinput) => {
        setIsFocused({
          [textinput]: false
        })
      }

    return(
        
        <View style={styles.container}>
            
            <Image
                style={styles.bgstyle}
                source={require('../../assets/background1.jpg')}
                resizeMode='cover'   
                />

                <View style={styles.pannel1}>

                     <StatusBar barStyle='dark-content' translucent backgroundColor="transparent"/>

                        <Icon style={styles.iconstyle} name={'shield-lock'} size={75} color={'black'} />
                        <Text style={styles.fontstyle1}>RESET PASSWORD</Text>
                        <Text style={styles.fontstyle2}>Enter your registered email address so we can send you a 4 digit code to reset your password.</Text>

                    {/* === Dari ang inputfield === */}

                        <TextInput
                             style={isFocused.entry1 ? [styles.textfield, 
                                { borderColor: '#438EFF' }] : styles.textfield}
                            
                            value= {verfiedemail}
                            onChangeText = {setVerfiedemail}
                            placeholder="Email" 
                            onFocus={() => handleInputFocus('entry1')}
                            onBlur={() => handleInputBlur('entry1')}
                        />

                    <TouchableOpacity style={styles.buttonstyle}

                        onPress={()=>{

                            if (verfiedemail != 'a'){
                                Alert.alert('No account found',"There's no Sundo Account with the email that you provided.",[
                                    {text:'close', onPress: () => console.log('alert closed')},
                                
                                ]);
                            }
                            else if (verfiedemail == 'a'){
                                navigation.navigate('Screen2');
                            }
                        }}
   
                    >

                        <Image
                            style={styles.bgbuttonstyle}
                            source={require('../../assets/button.png')}
                            resizeMode='cover'   
                            />

                        <Text style={{top:'-85%',fontFamily:'Roboto', 
                                     fontWeight:'bold',fontSize:20,
                                     textAlign:'center',color:'white'}}>CONTINUE</Text>

                    </TouchableOpacity>

                </View>
            
                <View style={styles.backbutton}>

                    <TouchableOpacity onPress={()=>{navigation.navigate('LoginScreen');}}> 
                        <Icon name={'arrow-left'} size={42} color={'white'} />
                    </TouchableOpacity >

                </View> 
                
        </View>
        


    )}