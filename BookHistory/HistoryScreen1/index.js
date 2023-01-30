import { View,Text,TextInput,StatusBar,TouchableOpacity,FlatList } from "react-native";
import { styles } from "./styles";
import Feather from 'react-native-vector-icons/AntDesign';
import axios from "../../plugin/axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthenticationContext } from "../../AuthContext";


export default function HistoryScreen1({navigation}){

  const {setBook_id} = useContext(AuthenticationContext)
  const [DATA,setDATA] = useState([{}]);
  
  const Item = ({title,status,date_created,book_id}) => (
  
    <TouchableOpacity style={styles.item_style} onPress={()=>{setBook_id(book_id), navigation.navigate('HistoryScreen2')}}>
      
      <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.fontstyle3}>{date_created}</Text>
      </View>
      <Text style={styles.fontstyle4}>{status}</Text>
      
    </TouchableOpacity>
  
  );


  const {userid} = useContext(AuthenticationContext);

  React.useEffect(() =>{

    axios.post('/api/bookhistory.php', {
                                        
      user_id: userid,
     
      })
      .then(function (response) {

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
                        
                        navigation.navigate('Dashboard')
                    
                }}>
                
                <Feather name={'arrowleft'} size={40} color={'black'} 
                    style={{position:'absolute',alignSelf:'flex-start',marginTop:'7%',marginLeft:'2%'}} />
                
                </TouchableOpacity>
                
                <Text style={styles.fontstyle1}> Book History</Text>
                
              
      </View>
      
      <View style={styles.container2}>
          
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.booking_type} status={item.status} 
        date_created={item.date_created} book_id={item.booking_id} />}




        
        keyExtractor={item => item.id}
      />


      </View>
    </View>
)
}