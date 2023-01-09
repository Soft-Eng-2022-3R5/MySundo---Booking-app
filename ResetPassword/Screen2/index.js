import { View,Text, Image, TouchableOpacity,StatusBar,TextInput,Alert, } from "react-native"
import { React,useState,useRef } from "react"
import { styles } from "../Screen2/styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OTPInputView from '@twotalltotems/react-native-otp-input'

export default function Screen2({navigation}){
    
   

    const [verfiedemail,setVerfiedemail] = useState('')
    
    const [otp,setOtp] = useState([])

    console.log(otp)
  

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

      const firstInput = useRef()
      const secondtInput = useRef()
      const thirdInput = useRef()
      const fourthInput = useRef()


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
                        <Text style={styles.fontstyle1}>ENTER THE 4-DIGIT RECOVERY CODE</Text>
                        <Text style={styles.fontstyle2}>The recovery code was sent to your email address. Please enter the code below.</Text>


                    <View style={styles.textfield}>
                        <TextInput style={styles.textinput}
                            keyboardType='number-pad'
                            maxLength={1}
                            ref={firstInput}
                            onChangeText={(text)=>{
                                setOtp([...otp,text])

                            //{(text)=>{setOtp({...otp, 1: text})
                                text && secondtInput.current.focus()
                            }}
                        
                        />
                        <TextInput style={styles.textinput}
                            keyboardType='number-pad'
                            maxLength={1}
                            ref={secondtInput}
                            onChangeText={(text)=>{
                                setOtp([...otp,text])
                                text ? thirdInput.current.focus() : firstInput.current.focus()
                            }}
                        
                        />
                        <TextInput style={styles.textinput}
                            keyboardType='number-pad'
                            maxLength={1}
                            ref={thirdInput}
                            onChangeText={(text)=>{
                                setOtp([...otp,text])
                                text ? fourthInput.current.focus() : secondtInput.current.focus()
                            }}

                        
                        />
                        <TextInput style={styles.textinput}
                            keyboardType='number-pad'
                            maxLength={1}
                            ref={fourthInput}
                            onChangeText={(text)=>{
                                setOtp([...otp,text])
                                !text && thirdInput.current.focus()
                            }}

                        
                        />
                    
                        </View>
                      
                            
                          


                      

                    <TouchableOpacity style={styles.buttonstyle}

                        onPress={()=>{

                            if (JSON.stringify(otp) != '1234'){
                                Alert.alert('No account found',"There's no Sundo Account with the email that you provided.",[
                                    {text:'close', onPress: () => console.log('alert closed')},
                                
                                ]);
                            }
                            else if (otp == '1234'){
                                navigation.navigate('LoginScreen');
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