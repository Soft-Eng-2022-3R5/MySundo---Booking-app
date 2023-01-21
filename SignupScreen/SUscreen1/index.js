import { View,Text, Image, TouchableOpacity,StatusBar,TextInput,Alert, Dimensions} from "react-native"
import { React,useState } from "react"
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from '../../plugin/axios';


export default function SUscreen1({navigation}){

    const [passoption,setPassoption] = useState(false)
    const [showpass,setShowpass] = useState(true)
    const [passoption1,setPassoption1] = useState(false)
    const [showpass1,setShowpass1] = useState(true)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');

    const [isFocused, setIsFocused] = useState({
        entry1: false,
        entry2: false,
        entry3: false,
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
      
let userinputed = {email:email,password:password};
    

    return(
   
        <View style={styles.container}>
            
            <StatusBar barStyle='dark-content' translucent backgroundColor="transparent"/>
        
            <Image
                style={styles.bgstyle}
                source={require('../../assets/background3.jpg')}
                resizeMode='cover'
            />
                


                  
            <View style={styles.backbutton}>

                <TouchableOpacity onPress={()=>{navigation.navigate('FirstScreen');}}
                    style={{top:5}}
                    > 
                    <Icon name={'arrow-left'} size={42} color={'black'} />
                </TouchableOpacity >


                </View>   
          

            <View style={styles.pannel1}>
        
                <Text style={styles.fontstyle1}>CREATE NEW ACCOUNT</Text>
             
                
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
                        
                        onChangeText = {setPassword}
                        secureTextEntry={showpass}                    
                        onFocus={() => handleInputFocus('entry2')}
                        onBlur={() => handleInputBlur('entry2')}
                        />
                    
                    <TextInput

                        style={isFocused.entry3 ? [styles.textinputstyle, 
                              { borderColor: '#438EFF' }] : styles.textinputstyle}
                        placeholder="Re-enter Password"
                        
                        onChangeText = {setPassword1}
                        secureTextEntry={showpass1}                    
                        onFocus={() => handleInputFocus('entry3')}
                        onBlur={() => handleInputBlur('entry3')}
                        />
                       
                    <TouchableOpacity style={{  top:'-32%',left:'77%',}}
                    
                    onPress={()=>{
                  
                        setShowpass1(!showpass1)
                        setPassoption1(!passoption1)
                    }} 
                    >                 
                             <Image
                            style={styles.eyestyle}
                            
                            source={passoption1 === false? require('../../assets/eye_open.png') : require('../../assets/eye_close.png')}
                            resizeMode='cover'
                            />
                     
                    </TouchableOpacity>

                    <TouchableOpacity style={{  top:'-82%',left:'77%',}}
                    
                    onPress={()=>{
                  
                        setShowpass(!showpass)
                        setPassoption(!passoption)
                    }} 
                    >                 
                             <Image
                            style={styles.eyestyle}
                            
                            source={passoption === false? require('../../assets/eye_open.png') : require('../../assets/eye_close.png')}
                            resizeMode='cover'
                            />
                     
                    </TouchableOpacity>

                    
                </View>

                <TouchableOpacity style={styles.Loginbutton} onPress={()=>{

                
                        // axios({
                        //     method: 'post',
                        //     url: 'http://192.168.1.63:80/api/auth.php',
                        //     data: {
                        //         //user_id:'0005',
                        //         email:'jordan@idolo.com',
                        //         password: 'jordanidolo',
                        //         //first_name: 'michael jordan',

                        //     }
                        //   });
                        navigation.push("SUscreen2",userinputed)



                        
                }}>
                    
                    <Image 
                        source={require('../../assets/button.png')} resizeMode='cover' 
                        style={styles.sample} />

                    <Text style={styles.loginfont}>SIGN UP</Text>
                </TouchableOpacity>

                <View style={styles.signuphere_nav}>
                     <Text style={styles.fontstyle4}>Already have an account?
                
                    </Text>

                    <TouchableOpacity onPress={()=>{navigation.navigate('LoginScreen');}}
                        style={{alignContent:'center'}}
                    >      
                        <Text style={styles.clickherestyle}>  Login here</Text>

                    </TouchableOpacity>
                </View>

                <View style={styles.line}/>
                <Text style={styles.fontstyle3}>or connect using</Text>
                
                <View style={styles.container2}>

                    <TouchableOpacity style={styles.icon1}>
                 
                        <Image 
                            source={require('../../assets/fb_logo.png')} resizeMode='cover' 
                             style={{width:'70%',height:'85%'}} />
                   
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon2}>

                        <Image 
                            source={require('../../assets/email_logo.png')} resizeMode='contain' 
                            style={{width:'90%',height:'90%'}} />

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon3}>

                        <Image 
                            source={require('../../assets/in_logo.png')} resizeMode='contain' 
                            style={{width:'90%',height:'90%'}} />

                    </TouchableOpacity>

                </View>


                
            </View>

          

        </View>
        


    )
}