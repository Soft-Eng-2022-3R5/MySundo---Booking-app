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
    backgroundColor:'white',


},
headerpannel:{

flexDirection:'row',
backgroundColor:'#25FFC4',
width:'100%',
height:windowHeight/9,
},

backbutton:{

    marginTop:'8%',
    //backgroundColor:'blue',
    height:'70%',
    width:'13%',
    alignSelf:'flex-start',
},

donebutton:{
    
    marginTop:'-10%',
    height:'70%',
    width:'13%',
    alignSelf:'flex-end',
},

fontstyle1:{

    width:'72%',
    alignSelf:'flex-start',
    marginTop:'10%',
    fontWeight:'bold',

    fontSize:RFValue(20,680),

},

container2:{
    width:'100%',
    height:windowHeight,
    //backgroundColor:'pink',
    justifyContent:'flex-start',
   

},

textinputstyle:{
    marginTop:'12%',
    paddingLeft:15,
    paddingRight:15,
    height:windowHeight,
    textAlignVertical: 'top',
    fontSize:RFValue(14,680)
},

textcount:{
    position:'absolute',
    marginRight:'5%',
    top:'1.5%',
    alignSelf:'flex-end',





},



})
