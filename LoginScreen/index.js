import { View,Text, Image, TouchableOpacity,StatusBar,TextInput,Alert, Dimensions} from "react-native"
import { React,useState } from "react"
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CarouselComponent from "../Components/CarouselComponents";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
                    <CarouselComponent/>
                    </View>

                  
            <View style={styles.backbutton}>

                <TouchableOpacity onPress={()=>{navigation.navigate('FirstScreen');}}
                    style={{top:5}}
                    > 
                    <Icon name={'arrow-left'} size={42} color={'white'} />
                </TouchableOpacity >

                <Text style={styles.Logo}>MY<Text style={{color:'#ACFF43'}}>SUNDO</Text></Text>

                </View>   
          

            <View style={styles.pannel1}>
        
                <Text style={styles.fontstyle1}>LOGIN YOUR ACCOUNT</Text>
             
                
                <View style={styles.test}>

                    {/* kani na part ang input text */}
                     <TextInput
                        style={isFocused.entry1 ? [styles.textinputstyle, 
                               { borderColor: '#438EFF' }] : styles.textinputstyle}
                        
                        placeholder="Email"
                        
                        onChangeText = {setEmail}
                        onFocus={() => handleInputFocus('entry1')}
                         onBlur={() => handleInputBlur('entry1')}
                         
                        />
                

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
                       
                    <TouchableOpacity style={{  top:'-32%',left:'77%',}}
                    
                    onPress={()=>{

                        
                        setShowpass(!showpass)
                        setPassoption(!passoption)
                    }}
                    
                    >
                       

                             <Image
                            style={styles.eyestyle}
                            
                            source={passoption === false? require('../assets/eye_open.png') : require('../assets/eye_close.png')}
                            resizeMode='cover'
                            />
                     
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.Loginbutton} onPress={()=>{

                        if(email == email1 && password == password1){
                            Alert.alert('Login Successfully','The credential you entered is all correct!',[
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
                        source={require('../assets/button.png')} resizeMode='cover' 
                        style={styles.sample} />

                    <Text style={styles.loginfont}>LOGIN</Text>
                </TouchableOpacity>


                <View style={{ top:'-2%',flexDirection:'row'}}>
                     <Text style={styles.fontstyle4}>Forgot the password?
                
                    </Text>

                    <TouchableOpacity onPress={()=>{navigation.navigate('Screen1');}}
                        style={{alignContent:'center'}}
                    >      
                        <Text style={styles.clickherestyle}>  click here</Text>

                    </TouchableOpacity>
                </View>

                <View style={styles.signuphere_nav}>
                     <Text style={styles.fontstyle4}>Don’t have an account yet?
                
                    </Text>

                    <TouchableOpacity onPress={()=>{navigation.navigate('SUscreen1');}}
                        style={{alignContent:'center'}}
                    >      
                        <Text style={styles.clickherestyle}>  Signup here</Text>

                    </TouchableOpacity>
                </View>

                <View style={styles.line}/>
                <Text style={styles.fontstyle3}>or connect using</Text>
                
                <View style={styles.container2}>

                    <TouchableOpacity style={styles.icon1}>
                 
                        <Image 
                            source={require('../assets/fb_logo.png')} resizeMode='cover' 
                             style={{width:'70%',height:'85%'}} />
                   
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon2}>

                        <Image 
                            source={require('../assets/email_logo.png')} resizeMode='contain' 
                            style={{width:'90%',height:'90%'}} />

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon3}>

                        <Image 
                            source={require('../assets/in_logo.png')} resizeMode='contain' 
                            style={{width:'90%',height:'90%'}} />

                    </TouchableOpacity>

                </View>


                
            </View>

          

        </View>
        


    )
}