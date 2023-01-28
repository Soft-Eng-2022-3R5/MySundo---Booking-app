import { StyleSheet,Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  
container1:{

    flex:1,
    //alignItems:'center',
    height:windowHeight,
    windowWidth:'100%',
    backgroundColor:'white'

},

backbutton:{
        
    top:'5%',
    
},
fontstyle1:{

    width:'45%',
    alignSelf:'flex-start',
    marginTop:'9%',
    fontWeight:'bold',
    marginLeft:'15%',
    fontSize:RFValue(20,680),

},

container2:{
    width:'100%',
    height:windowHeight/2,
    //backgroundColor:'pink',
    marginTop:'5%',
    justifyContent:'flex-start',
    alignItems:'center'

},

fontstyle2:{
    left:'5%',
    marginTop:'3%',
    fontSize:RFValue(16,680),
    fontWeight:'450',
},



})
