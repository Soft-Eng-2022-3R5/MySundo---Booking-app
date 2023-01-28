import { View,Text,TextInput,StatusBar,TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Feather from 'react-native-vector-icons/AntDesign';

export default function BooklistScreen({navigation}){

return(
    <View style={styles.containter}>

    <StatusBar barStyle='dark-content' translucent backgroundColor="transparent"/>

      <View style={styles.navbar}>
          
            <TouchableOpacity style={styles.backbutton} onPress={()=>{
                        
                        navigation.navigate('Dashboard')
                    
                }}>
                
                <Feather name={'arrowleft'} size={40} color={'black'} 
                    style={{position:'absolute',alignSelf:'flex-start',marginTop:'7%',marginLeft:'2%'}} />
                
                </TouchableOpacity>
                
                <Text style={styles.fontstyle1}>Booking List</Text>
                
              
      </View>
      
      <Text style={styles.fontstyle2}>No booking at this moment.</Text>
    </View>
)
}