import { View,Text,TextInput,StatusBar,TouchableOpacity,ScrollView } from "react-native";
import { styles } from "./styles";
import Feather from 'react-native-vector-icons/AntDesign';
import axios from "../../plugin/axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthenticationContext } from "../../AuthContext";


export default function HistoryScreen2({navigation}){

  const [DATA,setDATA] = useState([{}]);
 

  const {userid} = useContext(AuthenticationContext);
  const {book_id} = useContext(AuthenticationContext);
  console.log(book_id)
  React.useEffect(() =>{

    axios.post('/api/receipt.php', {
                                        
      user_id: userid,
      booking_id: book_id
     
      })
      .then(function (response) {
        console.log(response.data)
        setDATA(response.data)
          
      })
      .catch(function (error) {
          console.log(error)
          
      });
  
  },[]);

return(
    <View style={styles.containter}>

    <StatusBar barStyle='dark-content' translucent backgroundColor="transparent"/>

      <View style={styles.navbar}>
          
            <TouchableOpacity style={styles.backbutton} onPress={()=>{
                        
                        navigation.goBack()
                    
                }}>
                
                <Feather name={'arrowleft'} size={40} color={'black'} 
                    style={{position:'absolute',alignSelf:'flex-start',marginTop:'7%',marginLeft:'2%'}} />
                
                </TouchableOpacity>
                
                <Text style={styles.fontstyle1}> Book History</Text>
                
              
      </View>
      
      <ScrollView style={styles.container2} showsVerticalScrollIndicator={false}>
            
            <View style={styles.box1}>
                <Text style={styles.fontstyle3}>Booking Reference:</Text>
                <Text style={styles.fontstyle4}>{DATA[0].booking_id}</Text>
            </View>
            <View style={styles.box1}>
                <Text style={styles.fontstyle3}>Booking type:</Text>
                <Text style={styles.fontstyle4}>{DATA[0].booking_type}</Text>
            </View>

            <View style={styles.box1}>
                <Text style={styles.fontstyle3}>Pick up at:</Text>
                <Text style={styles.fontstyle4}>{DATA[0].pickup_location}</Text>
            </View>

            <View style={styles.box1}>
                <Text style={styles.fontstyle3}>Drop off at:</Text>
                <Text style={styles.fontstyle4}>{DATA[0].dropoff_location}</Text>
            </View>

            <View style={styles.box1}>
                <Text style={styles.fontstyle3}>Payment Method:</Text>
                <Text style={styles.fontstyle4}>{DATA[0].payment_method}</Text>
            </View>

            <View style={styles.box1}>
                <Text style={styles.fontstyle3}>Date and Time:</Text>
                <Text style={styles.fontstyle4}>{DATA[0].pickup_date}  -  {DATA[0].pickup_time}</Text>
            </View>

            <View style={styles.box1}>
                <Text style={styles.fontstyle3}>Vehicle Type:</Text>
                <Text style={styles.fontstyle4}>{DATA[0].type_vehicle}</Text>
            </View>

            <View style={styles.box1}>
                <Text style={styles.fontstyle3}>Total:</Text>
                <Text style={styles.fontstyle4}>{DATA[0].price}</Text>
            </View>

            <View style={styles.box2}>
                <Text style={styles.fontstyle3}>Note:</Text>
                <View style={{width:'90%',height:'100%',alignSelf:'center',}}>
                    <Text style={styles.fontstyle4}>{DATA[0].note}</Text>
                </View>
            </View>

      </ScrollView>
    </View>
)
}