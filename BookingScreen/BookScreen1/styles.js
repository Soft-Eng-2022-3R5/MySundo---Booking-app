import { StyleSheet,Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const styles = StyleSheet.create({

    
container1:{

    flex:1,
    //justifyContent:'center',
    alignItems:'center',
    height:windowHeight,
    windowWidth:'100%',
    backgroundColor:'pink'


},

inputFiled:{

    width:'100%',
    height:windowHeight/5.5,

    backgroundColor:'white',
    //justifyContent:'flex-start',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'black',
    paddingLeft:20,
    
},
locationseatch:{

    marginTop:'5%',
    width:'80%',
    height:'23%',
    //backgroundColor:'yellow',
    borderBottomWidth:1,
    paddingLeft:10,
    paddingRight:10,


},
option1:{
    width:'100%',
    height:windowHeight/5,
    backgroundColor:'white',
    alignSelf:'center',
    borderBottomWidth:1,
    borderColor:'black',
    //flexDirection:'row'
},



})