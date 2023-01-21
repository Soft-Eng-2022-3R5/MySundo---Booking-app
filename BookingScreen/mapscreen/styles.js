import { StyleSheet,Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({

container1:{
    flex:1,

},
map:{
    width:windowWidth,
    height:windowHeight,
},

button1:{
    position:'absolute',
    width:'70%',
    height:windowHeight/14,
    backgroundColor:'black',
    top:'87%',
    borderRadius:10,
    alignSelf:'center',
    elevation:5
},

inputstyle:{

    position:'absolute',
    width:'100%',
    height:windowHeight/18,
    alignSelf:'center',
    marginTop:'10%',
    borderRadius:10,
   
    
},

searchbar:{
    width:'75%',
    height:'100%',
    backgroundColor:'white',
    borderRadius:10,
    paddingLeft:20,
    paddingRight:45,
    elevation:5,
    alignSelf:'center',

},

fontstyle1:{
    color:'white',
    textAlign:'center',
    fontSize:RFValue(24,680),
    fontWeight:'bold',
    alignSelf:'center',
    marginTop:'3%',
},

pinicon:{

    position:'absolute',
    top:'50%',
    alignContent:'center',
    alignSelf:'center',
    //backgroundColor:'red',
    
},

iconstyle:{
    height:windowHeight/9,
    width:windowWidth,
    elevation:5,
},

})

