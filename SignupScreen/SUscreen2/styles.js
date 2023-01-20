import { StyleSheet,Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const styles = StyleSheet.create({


containter:{

    flex:1,
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor:'#FDFDFD',

},

pannel1:{

    position:'absolute',
    //backgroundColor:'pink',
    alignSelf:'center',
    width:'90%',
    height:windowHeight/1.2,
    alignItems:'center',
    borderRadius:15,
    top:'5%',
    //justifyContent:'center',
    //elevation: 5,
    //paddingTop:40,
   
},

logostyle:{

    top:42,
    position:'absolute',
    justifyContent:'center',
    alignSelf:'center',

},

inputfield:{

    height:windowHeight/20,
    width:'85%',
    //backgroundColor:'white',
    borderWidth:1,
    borderColor:'black',
    //borderColor:'#d9d9d9',
    borderRadius:5,
    paddingStart:15,
    paddingEnd:15,
    fontSize: RFValue(14,680),
    fontFamily:'Roboto',

},

inputstyle:{

    alignItems:'center',
    width:'100%',
    marginBottom:'5%',
},
miniplaceholder:{
    position:'absolute',
    fontSize: RFValue(10,680),
    fontFamily:'Roboto',
    fontWeight:'bold',
    alignSelf:'flex-start',
    left:'11%',
    top:'-12%',
    backgroundColor:'white',
    
},

miniplaceholder1:{
    position:'absolute',
    fontSize: RFValue(10,680),
    fontFamily:'Roboto',
    fontWeight:'bold',
    alignSelf:'flex-start',
    left:'3%',
    top:'-12%',
    backgroundColor:'white',
    
},

dropdownmenu:{
    position:'absolute',
    width:'7%',
    height:'40%',
    alignSelf:'flex-end',
    right:'5%',
    top: '30%',
    
},



dropdownarea:{
  
    width:'85%',
    height:windowHeight/4,
    borderRadius:10,
    backgroundColor:'white',
    top:'2%',
    elevation:5,


},

searchinput:{
    height:windowHeight/23,
    width:'90%',
    //backgroundColor:'white',
    borderWidth:1,
    //borderColor:'#d9d9d9',
    borderColor:'black',
    borderRadius:10,
    paddingStart:10,
    paddingEnd:35,
    fontSize: RFValue(12,680),
    marginTop:15,
    fontFamily:'Roboto',
    alignSelf:'center',

},

renderItem:{
    width:'80%',
    height: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: '#8e8e8e',
    alignSelf:'center'
},

fontstyle2:{
    top:20,
    fontSize: RFValue(12,680),

},

bdayandgenderinputstyle:{
    height:windowHeight/20,
    width:'47%',
    //backgroundColor:'white',
    borderWidth:1,
    borderColor:'black',
    //borderColor:'#d9d9d9',
    borderRadius:5,
    paddingStart:15,
    paddingEnd:15,
    fontSize: RFValue(14,680),
    fontFamily:'Roboto',
    marginRight:'5%',
},

container3:{

    width:'85%',
    alignItems:'center',
    flexDirection:'row',
    marginBottom:'5%',
    
},
datefont:{
    fontSize: RFValue(14,680),
    fontFamily:'Roboto',
    top:'23%'
},

loginfont:{
    textAlign: 'center',top:'-60%',
    fontSize:RFValue(22,680),fontFamily:'Roboto',
    fontWeight:'bold',color:'white'
},

Loginbutton:{
    //alignSelf:'center',
    //backgroundColor:'red',
    //alignItems:'center',
    width:'85%',
    height:'11%',
    top:'5%',
    //marginBottom:'5%',
    borderRadius:10,
     
},

sample:{
    width:'100%',
    height:'70%',
    borderRadius:10,

},



})
