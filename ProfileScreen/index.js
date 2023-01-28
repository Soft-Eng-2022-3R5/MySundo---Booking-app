import { View,Text,TextInput,TouchableOpacity,Image,StatusBar } from "react-native"
import { styles } from "./styles"
import Feather from 'react-native-vector-icons/AntDesign';
import { useContext } from 'react';
import { AuthenticationContext } from '../AuthContext';

export default function ProfileScreen({navigation}){

    const {user_fname} = useContext(AuthenticationContext);
    const {user_lname} = useContext(AuthenticationContext)

    return(
    
    <View style={styles.container}>
        <StatusBar barStyle='light-content' translucent backgroundColor="transparent"/>
       <View style={styles.pannel1}>

            <View style={styles.headernav}>

                <TouchableOpacity style={styles.backbutton} onPress={()=>{
                        
                        navigation.navigate('Dashboard')
                    
                }}>
                
                <Feather name={'arrowleft'} size={40} color={'black'} 
                    style={{position:'absolute',alignSelf:'flex-start',marginTop:'7%',marginLeft:'2%'}} />

                </TouchableOpacity>

                <TextInput
                    style={styles.searchbar}
                    placeholder='Search'
                
                />
                <Feather name={'search1'} size={25} color={'black'} 
                    style={{position:'absolute',alignSelf:'flex-end',marginTop:'10%',marginRight:'10%'}} />
            
            </View>

            <View style={styles.userbackground}>
            <Image style={{width:'100%',height:'100%'}} 
                source={require('./../assets/wallpaper.png')} resizeMode='cover'/>
            </View>

            <View style={styles.userprofile}>
                <Image style={{width:'100%',height:'100%'}} 
                source={require('./../assets/icon_user.png')} resizeMode='contain'/>
            </View>
            
            <Text style={styles.fontstyle1}>{user_fname.charAt(0).toUpperCase() + user_fname.slice(1)
                + ' ' + user_lname.charAt(0).toUpperCase() + user_lname.slice(1)}</Text>
                <View style={{alignSelf:'center',top:'17%',flexDirection:'row'}}>
                    <Image source={require('./../assets/star.png')}/> 
                    <Text style={{fontWeight:'bold',paddingLeft:6,marginTop:'0.5%'}}>no rating yet</Text>
                </View>

            <View style={styles.pannel2}>
                <Image source={require('./../assets/star5.png')}/> 
                <Image source={require('./../assets/star4.png')}/> 
                <Image source={require('./../assets/star3.png')}/> 
                <Image source={require('./../assets/star2.png')}/> 
                <Image source={require('./../assets/star1.png')}/> 
            </View>

            <TouchableOpacity style={styles.userabout}>
                <Text style={styles.fontstyle2}>About</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.editprofile}>
                <Text style={styles.fontstyle2}>Edit</Text>
            </TouchableOpacity>

          </View> 
            <Text style={styles.fontstyle3}>Rating from passenger</Text>        
       </View>



)}