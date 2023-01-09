import { View,Text, Image, TouchableOpacity,StatusBar,TextInput,Alert} from "react-native"
import { React,useState } from "react"
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




export default function LoginScreen({navigation}){

    const [passoption,setPassoption] = useState(false)
    const [showpass,setShowpass] = useState(true)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const email1 = 'admin@sample.com'
    const password1 = 'admin123'
    
    
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
    
      console.log(email)
   
    return(
   
        <View style={styles.container}>
            
            <StatusBar barStyle='light-content' translucent backgroundColor="transparent"/>
        

           

            <Image
                style={styles.bgstyle}
                source={require('../assets/background.jpg')}
                resizeMode='cover'
            />

            
            
            <View style={styles.carousel}>

    
                    <Image 
                    source={require('../assets/image_3.png')} resizeMode='cover' 
                    style={{width:'100%',height:'100%',borderBottomLeftRadius: 70,
                    borderBottomRightRadius: 70,}} />
                
                    </View>

                  
            <View style={styles.filter}/>


            <View style={styles.backbutton}>

                <TouchableOpacity onPress={()=>{navigation.navigate('FirstScreen');}}> 
                    <Icon name={'arrow-left'} size={42} color={'white'} />
                </TouchableOpacity >

                <Text style={styles.Logo}>MY<Text style={{color:'#ACFF43'}}>SUNDO</Text></Text>

                </View>   
          

            <View style={styles.pannel1}>
        
                <Text style={styles.fontstyle1}>LOGIN YOUR ACCOUNT</Text>
             
                
                <View style={{marginTop:'7%'}}>

                    {/* kani na part ang input text */}
                     <TextInput
                        style={isFocused.entry1 ? [styles.textinputstyle, 
                               { borderColor: '#438EFF' }] : styles.textinputstyle}
                        
                        placeholder="Email"
                        
                        onChangeText = {setEmail}
                        onFocus={() => handleInputFocus('entry1')}
                         onBlur={() => handleInputBlur('entry1')}

                         
                        />
                  </View>

                  <View style={{alignSelf:'center',flexDirection:'row'}}>
                    <TextInput

                        style={isFocused.entry2 ? [styles.textinputstyle, 
                              { borderColor: '#438EFF' }] : styles.textinputstyle}
                        placeholder="Password"
                        value={password}
                        onChangeText = {setPassword}
                        secureTextEntry={showpass}                    
                        onFocus={() => handleInputFocus('entry2')}
                        onBlur={() => handleInputBlur('entry2')}
                        />
                       

                    <TouchableOpacity style={{position:'absolute',marginLeft:'61%',paddingTop:6}}
                    
                    onPress={()=>{

                        
                        setShowpass(!showpass)
                        setPassoption(!passoption)
                    }}
                    
                    >
                       

                     <Icon name={passoption === false ? 'eye' : 'eye-off-outline'} size={20} color={'#7A7A7A'}/>
          
                    </TouchableOpacity>
                </View>

                        

    {/* //flexDirection:'row' */}


                <TouchableOpacity style={styles.Loginbutton} onPress={()=>{

                        if(email == email1 && password == password1){
                            Alert.alert('Login Successfully','Cridentials are all correct!..',[
                                {text:'close', onPress: () => console.log('alert closed')},
                            
                            ]);
                            
                           
                        }
                        else if(email != email1 || password != password1){
                            Alert.alert('Login Failed','Your email or password is incorrect Please try again.',[
                                {text:'close', onPress: () => console.log('alert closed')},
                            
                            ]);
                                
                                
                        } 
                        

                }}>
                    
                    <Image 
                        source={require('../assets/button.png')} resizeMode='contain' 
                        style={styles.sample} />

                    <Text style={{textAlign: 'center',top:-35,
                                fontSize:20,fontFamily:'Roboto',
                                fontWeight:'bold',color:'white'}}>LOGIN</Text>
                </TouchableOpacity>


                <Text style={styles.fontstyle4}>Forgot the password?


                    <TouchableOpacity onPress={()=>{navigation.navigate('Screen1');}}>

                        <Text style={{color:'#438EFF',top:4,}}>  click here</Text>

                    </TouchableOpacity>

                </Text>



                <View style={styles.line}/>
                <Text style={styles.fontstyle3}>or connect using</Text>
                
                <View style={styles.container2}>

                    <TouchableOpacity style={styles.icon1}>
                 
                        <Image 
                            source={require('../assets/fb_logo.png')} resizeMode='contain' 
                             style={{marginRight:-1,alignSelf:'center',width:45,height:42}} />
                   
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.icon2}>

                        <Image 
                            source={require('../assets/email_logo.png')} resizeMode='contain' 
                            style={{marginRight:-1,alignSelf:'center',height:42}} />

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon3}>

                        <Image 
                            source={require('../assets/in_logo.png')} resizeMode='contain' 
                            style={{marginRight:-1,alignSelf:'center',height:42}} />

                    </TouchableOpacity>


                   
                </View>

                <View style={{top:80}}>
                    <Text style={styles.fontstyle4}>Don't have an account yet?
                        <TouchableOpacity>
                            <Text style={{color:'#438EFF',top:4, fontSize:12}}>  Sign up here</Text>
                        </TouchableOpacity>
                        </Text>
                </View>
            </View>

          

        </View>
        


    )
}