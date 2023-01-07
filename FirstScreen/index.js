import { ImageBackground } from "react-native";
import { View,Text, Image, TouchableOpacity,StatusBar } from "react-native"
import { styles } from "./styles"
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function FirstScreen({navigation}){

    const datapicture = [
        {
            id:1,
            

        }
    ];



    return(

        
        
        <View style={styles.container}>
            
            <StatusBar barStyle='light-content' translucent backgroundColor="transparent"/>
        
            <Image
                style={styles.bgstyle}
                source={require('../assets/background.jpg')}
                resizeMode='cover'
            />

            
            
            
            <View style={styles.carousel}>

                 

                    {/* Temporary only */}
                    <Image 
                    source={require('../assets/image_2.png')} resizeMode='cover' 
                    style={{width:'100%',height:'100%',borderBottomLeftRadius: 70,
                    borderBottomRightRadius: 70,}} />

                    
            </View>

            <View style={styles.filter}/>

            <View style={styles.backbutton}>

         

                <Text style={styles.Logo}>MY<Text style={{color:'#ACFF43'}}>SUNDO</Text></Text>

            </View>   



            <View style={styles.pannel1}>
        
                <Text style={styles.fontstyle1}>Welcome to my SUNDO!</Text>
                <Text style={styles.fontstyle2}>Looking for a way to get around town? we've got you covered.</Text>
                
                <TouchableOpacity style={styles.SignUpbutton}>

                    <Text style={{textAlign: 'center',top:3,
                                fontSize:20,fontFamily:'Roboto',
                                fontWeight:'bold',color:'#25FFC4'}}>SIGNUP</Text>

                </TouchableOpacity>


                <TouchableOpacity style={styles.Loginbutton}
                    onPress={()=>{navigation.navigate('LoginScreen');}}
                
                >
                    
                    <Image 
                        source={require('../assets/button.png')} resizeMode='contain' 
                        style={styles.sample} />

                    <Text style={{textAlign: 'center',top:-35,
                                fontSize:20,fontFamily:'Roboto',
                                fontWeight:'bold',color:'white'}}>LOGIN</Text>
                </TouchableOpacity>

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

    
            </View>

          

        </View>
        


    )
}