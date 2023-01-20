import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View,Text,ScrollView,Image,TextInput, TouchableOpacity} from "react-native"
import { styles } from "./style"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
export default function Dashboard({navigation}){

   

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

                <Text style={styles.textstyle1}>Hello, Peter Francis</Text>
                <Text style={styles.textstyle2}>Have a nice Day!</Text>

                <TouchableOpacity style={styles.menubutton} onPress={()=>{
                    
                        navigation.navigate('Drawer')
        
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
                
                <TouchableOpacity style={styles.selectbutton}>
                    <Text style={{fontFamily:'Roboto',fontWeight:'bold',textAlign:'center'}}>SELECT</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.pannel5}>
                
                 <Text style={styles.textstyle4}> BOOK FOR SOMEONE</Text>
                
                <TouchableOpacity style={styles.selectbutton}>
                    <Text style={{fontFamily:'Roboto',fontWeight:'bold',textAlign:'center'}}>SELECT</Text>
                </TouchableOpacity>



            </View>
              
            </ScrollView> 

            <View style={styles.navbar}>
                
            
            
                <TouchableOpacity style={styles.chatbutton}>
                    <MaterialCommunityIcons name={'android-messages'} size={30} color={'#D6D6D6'} 
                        style={{alignSelf:'center',top:'20%'}} />
                </TouchableOpacity>
                    

                <TouchableOpacity style={styles.chatbutton}>
                    <MaterialCommunityIcons name={'home'} size={30} color={'black'} 
                        style={{alignSelf:'center',top:'20%'}} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.booklistbutton}>
                    <Feather name={'list'} size={30} color={'#D6D6D6'} 
                            style={{alignSelf:'center',top:'20%'}} />
                </TouchableOpacity>
                          
            </View> 

       </View>

    )
}