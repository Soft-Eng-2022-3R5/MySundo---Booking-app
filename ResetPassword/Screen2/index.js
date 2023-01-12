import { View,Text, Image, 
        TouchableOpacity,StatusBar,
        TextInput as Firstbox,
        TextInput as Secondbox,
        TextInput as Thirdbox,
        TextInput as Fourthbox,
        Alert 
        } from "react-native"

import { React,useState,useRef } from "react"
import { styles } from "../Screen2/styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Screen3({navigation}){
    
   
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

                        <Firstbox style={styles.textinput}
                            keyboardType='number-pad'
                            maxLength={1}
                            ref={firstInput}
                            onChangeText={(text)=>{
                            if(text ===""){
                                otp.pop()
                            }
                            else{
                                setOtp([...otp,text])
                                text && secondtInput.current.focus()
                            }
                            console.log(otp,'current value')
                            }}
                        />
                        <Secondbox style={styles.textinput}
                            keyboardType='number-pad'
                            maxLength={1}
                            ref={secondtInput}
                            onKeyPress={({nativeEvent}) =>{
                                if (nativeEvent.key === 'Backspace'){   
                                    firstInput.current.focus() 
                                }
                            }}
                            onChangeText={(text)=>{
                            
                                if(text ===""){
                                    otp.pop()
                                    !text && firstInput.current.focus()
                                }
                                else{
                                    setOtp([...otp,text])
                                    text && thirdInput.current.focus()
                                }
                                console.log(otp,'current value')
                            }}
                        
                        />

                        <Thirdbox style={styles.textinput}
                            keyboardType='number-pad'
                            maxLength={1}
                            ref={thirdInput}

                            onKeyPress={({nativeEvent}) =>{
                                if (nativeEvent.key === 'Backspace'){           
                                    secondtInput.current.focus() 
                                }       
                            }}
                            onChangeText={(text)=>{

                                if(text ===""){
                                    otp.pop()
                                    !text && secondtInput.current.focus()
                                }
                                else{
                                    setOtp([...otp,text])
                                    text && fourthInput.current.focus()
                                }
                                console.log(otp,'current value')
                            }}
                        />
                        <Fourthbox style={styles.textinput}
                            keyboardType='number-pad'
                            maxLength={1}
                            ref={fourthInput}

                            onKeyPress={({nativeEvent}) =>{

                                if (nativeEvent.key === 'Backspace'){
                                    
                                    thirdInput.current.focus() 
                                } 
                            }}
                            onChangeText={(text)=>{
                              
                                if(text ===""){
                                    otp.pop()
                                    !text && thirdInput.current.focus()
                                }
                                else{
                                    setOtp([...otp,text])
                                    
                                }
                                console.log(otp,'current value')
                            }}

                        />
                    
                        </View>


                    <TouchableOpacity style={styles.buttonstyle}

                        onPress={()=>{navigation.navigate('Screen3')
                            
                        console.log(otp.toString())
                            
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

                    <TouchableOpacity onPress={()=>{navigation.navigate('Screen1');}}> 
                        <Icon name={'arrow-left'} size={42} color={'white'} />
                    </TouchableOpacity >

                </View> 
                
        </View>
        


    )}