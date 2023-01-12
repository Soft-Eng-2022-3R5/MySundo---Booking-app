import { View,Text, Image, TouchableOpacity,StatusBar,TextInput,Alert, } from "react-native"
import { React,useState,useRef } from "react"
import { styles } from "../Screen3/styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Screen3({navigation}){
    
   

    const [password,setPassword] = useState('')
    const [subpass,setSubpass] = useState('')

    const [passoption1,setPassoption1] = useState(false)
    const [showpass1,setShowpass1] = useState(true)
    const [passoption2,setPassoption2] = useState(false)
    const [showpass2,setShowpass2] = useState(true)

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

                     

                        <Icon style={styles.iconstyle} name={'key-variant'} size={75} color={'black'} />
                        <Text style={styles.fontstyle1}>ENTER YOUR NEW PASSWORD</Text>
                        <Text style={styles.fontstyle2}>Make sure your password is not easy to access by others.</Text>

                    
                    <View style={styles.passwordinputfield}>

                        <TextInput style={isFocused.entry1 ? [styles.textinput, 
                                { borderColor: '#438EFF' }] : styles.textinput}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={showpass1}
                            placeholder="Enter NewPassword"
                            onFocus={() => handleInputFocus('entry1')}
                            onBlur={() => handleInputBlur('entry1')}

                        />

                        <TouchableOpacity style={{position:'absolute',
                    
                            marginLeft:'87%',top:7}} 
                                onPress={()=>{
                                setShowpass1(!showpass1)
                                setPassoption1(!passoption1)
                            }}   
                        >
                            <Icon name={passoption1 === false ? 'eye' : 'eye-off-outline'} size={20} color={'#7A7A7A'}/>
                            </TouchableOpacity>
                     
                    
                        <TextInput style={isFocused.entry2 ? [styles.textinput, 
                                { borderColor: '#438EFF' }] : styles.textinput}
                            value={subpass}
                            onChangeText={setSubpass}
                            secureTextEntry={showpass2}
                            placeholder="Re-enter NewPassword"
                            onFocus={() => handleInputFocus('entry2')}
                            onBlur={() => handleInputBlur('entry2')}
                        />

                        <TouchableOpacity style={{position:'absolute',
                    
                            marginLeft:'87%',top:50}} 
                                onPress={()=>{
                                setShowpass2(!showpass2)
                                setPassoption2(!passoption2)
                            }}   
                        >
                            <Icon name={passoption2 === false ? 'eye' : 'eye-off-outline'} size={20} color={'#7A7A7A'}/>
                            </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={styles.buttonstyle}

                        onPress={()=>{
                            if (password == '' || subpass == ''){
                                Alert.alert('Failed',"Please enter your new password first before to proceed.",[
                                    {text:'again', onPress: () => console.log('closed')},
                                
                                ]);
                            }

                            else if (password != 'admin123' && password == subpass){
                                Alert.alert('Reset Successful!',"You have successfully reset your password. Please use your new password when logging in.",[
                                    {text:'complete', onPress: () => navigation.navigate('LoginScreen')},
                                
                                ]);
                            }
                            else if (password == 'admin123' || subpass == 'admin123'){
                                Alert.alert('Failed',"You entered your old password, make sure to enter new password.",[
                                    {text:'again', onPress: () => console.log('closed')},
                                
                                ]);
                            }
                            else if (password != subpass && subpass !=password ){
                                Alert.alert('Password Mismatch',"The password you entered did not match. make sure both the same.",[
                                    {text:'again', onPress: () => console.log('closed')},
                                
                                ]);
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
                                     textAlign:'center',color:'white'}}>UPDATE</Text>

                    </TouchableOpacity>

                </View>
            
                <View style={styles.backbutton}>

                    <TouchableOpacity onPress={()=>{navigation.navigate('Screen2');}}> 
                        <Icon name={'arrow-left'} size={42} color={'white'} />
                    </TouchableOpacity >
                        
                </View> 
                
        </View>
        
    )}