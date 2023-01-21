import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View,Text,ScrollView,Image,TextInput, TouchableOpacity} from "react-native"
import { styles } from "./style"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useContext } from 'react';
import { AuthenticationContext } from '../AuthContext';


export default function Dashboard({navigation}){


    const {user} = useContext(AuthenticationContext);

    return(

       <View style={styles.containter}>
            
         <View style={styles.box1}></View>

           <ScrollView style={styles.scrollcontainer}  showsVerticalScrollIndicator={false}>
            <View style={styles.pannel1}>

                <Image 
                style={styles.picture1}
                source={require('../assets/dashboard_1.jpg')}
                        resizeMode='contain'
                    />

                <Text style={styles.textstyle1}>Hello, {user}</Text>
                <Text style={styles.textstyle2}>Have a nice Day!</Text>

                <TouchableOpacity style={styles.menubutton} onPress={()=>{
                    
                        navigation.openDrawer()
                    
                }}>
                
                <Feather name={'menu'} size={40} color={'black'} 
                    style={{position:'absolute',alignSelf:'flex-end',top:"10%",}} />

                </TouchableOpacity>
                

                <View style={styles.inputstyle}>
                    
                    <TextInput
                        style={styles.searchbar}
                        placeholder="Search"
                    />
                    
                    <Feather name={'search'} size={25} color={'black'} 
                    style={{position:'absolute',alignSelf:'flex-end',paddingRight:15,top:"20%",}} />

                </View>

            </View>

                <Text style={styles.textstyle3}> Choose your Service</Text>

            <View style={styles.pannel2}>

                <Text style={styles.textstyle4}> SUNDO DRIVER</Text>
                
                <TouchableOpacity style={styles.selectbutton}>
                    <Text style={{fontFamily:'Roboto',fontWeight:'bold',textAlign:'center'}}>SELECT</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.pannel3}>

            <Text style={styles.textstyle4}> BOOK A RIDE</Text>
                
                <TouchableOpacity style={styles.selectbutton} onPress={()=>{navigation.navigate('BookScreen1')}}>
                    <Text style={{fontFamily:'Roboto',fontWeight:'bold',textAlign:'center'}}>SELECT</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.pannel4}>
            
            <Text style={styles.textstyle4}> BOOK FOR LATER</Text>
                
                <TouchableOpacity style={styles.selectbutton} onPress={()=>{navigation.navigate('BookScreen2')}}>
                    <Text style={{fontFamily:'Roboto',fontWeight:'bold',textAlign:'center'}}>SELECT</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.pannel5}>
                
                 <Text style={styles.textstyle4}> BOOK FOR SOMEONE</Text>
                
                <TouchableOpacity style={styles.selectbutton} onPress={()=>{navigation.navigate('BookScreen3')}}>
                    <Text style={{fontFamily:'Roboto',fontWeight:'bold',textAlign:'center'}}>SELECT</Text>
                </TouchableOpacity>


            </View>
              
            </ScrollView> 

           

       </View>

    )
}