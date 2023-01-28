import { View,Text,TextInput,StatusBar,TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Feather from 'react-native-vector-icons/AntDesign';

export default function MessageScreen({navigation}){

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
            
                <TextInput
                    style={styles.searchbar}
                    placeholder='Search'
                
                />
                <Feather name={'search1'} size={25} color={'black'} 
                    style={{position:'absolute',alignSelf:'flex-end',marginTop:'10%',marginRight:'10%'}} />

      </View>
      <Text style={styles.fontstyle1}>Messages</Text>
      <Text style={styles.fontstyle2}>No messages at this moment.</Text>
    </View>
)
}