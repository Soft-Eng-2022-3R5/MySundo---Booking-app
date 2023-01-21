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
locationicon:{

    position:'absolute',
    height:'10%',
    width:'10%',
    alignSelf:'flex-start',
    marginTop:'6.5%',
    left:'5%',

},

searchlocation:{

    width:'70%',
    height:'30%',
    alignSelf:'center',
    left:'3%',
    color:'black',
    paddingLeft:10,

},

fontstyle1:{

    left:'20%',
    top:'-37%',
    fontWeight:'bold',
    color:'#7A7A7A'
},

line1:{

    borderWidth:1,
    width:'70%',
    backgroundColor:'black',
    alignSelf:'center',
    left:'3%',
    top:'-10%',

},
option1:{
    width:'100%',
    height:windowHeight/6,
    backgroundColor:'white',
    alignSelf:'center',
    borderBottomWidth:1,
    borderColor:'#d9d9d9',
    marginTop:'5%',
  
},

option2:{

    width:'100%',
    height:windowHeight/17,
    backgroundColor:'white',
    borderBottomWidth:1,
    flexDirection:'row',
    borderColor:'#d9d9d9',
},

icon1:{

    width:'10%',
    height:'60%',
    marginTop:'2%',
    left:'15%'
},
fontstyle2:{
    fontSize:RFValue(14,680),
    marginTop:'3%',
    marginLeft:'2%'
},

button1:{
    position:'absolute',
    left:'89%',
    marginBottom:'1.7%',
    alignSelf:'flex-end'
},

button2:{
    
    position:'absolute',
    right:'3%',
    marginBottom:'1.7%',
    alignSelf:'flex-end'
},

button3:{
    
    position:'absolute',
    right:'3%',
    top:'46%',
    marginBottom:'1.7%',
    alignSelf:'flex-end'
},

option3:{

    width:'100%',
    height:windowHeight/12,
    backgroundColor:'white',
    borderBottomWidth:1,
    borderColor:'#d9d9d9',
    flexDirection:'row',

},

icon2:{

    width:'10%',
    height:'42%',
    marginTop:'6.5%',
    left:'15%'
},

icon3:{
    position:'absolute',
    width:'10%',
    height:'5%',
    marginTop:'6.5%',
    left:'52%'
},

line2:{

    position:'absolute',
    alignSelf:'center',
    height:'6%',
    borderLeftWidth:2,
    top:windowHeight/3.83,
    borderColor:'#d9d9d9',
    
},
cashbutton:{

    width:'15%',
    height:'47%',
    top:'5%',
    left:'15%'

},

fontstyle3:{
    fontSize:RFValue(15,680),
    top:'26%'
},

fontstyle4:{
    fontSize:RFValue(13,680),
    top:'10%',
    fontWeight:'bold',
    //left:windowWidth/3.6,
},

datestyle:{
    position:'absolute',
    width:'22%',
    height:'40%',
    top:'37%',
    left:'62%',
    //backgroundColor:'red'
},

timestyle:{
    position:'absolute',
    width:'19%',
    height:'40%',
    top:'37%',
    left:'83%',
    //backgroundColor:'yellow'
},

fontstyle5:{
    position:'absolute',
    fontWeight:'bold',
    alignSelf:'flex-start',
    top:windowHeight/3.95,
    fontSize:RFValue(12,680),
    left:'5%',
    color:'#7A7A7A'
},
fontstyle6:{
    position:'absolute',
    fontWeight:'bold',
    alignSelf:'flex-start',
    top:windowHeight/3.95,
    fontSize:RFValue(12,680),
    left:'55%',
    color:'#7A7A7A'
},

fontstyle7:{

    fontSize:RFValue(13,680),
    alignSelf:'flex-start',
    fontWeight:'bold',
    padding:5,
    left:'2%',

},

option4:{
    width:'100%',
    height:'15%',
    flexDirection:'row',
    justifyContent:'space-around'
},

motorlogo:{

   
    width:'95%',
    height:'67%',
    marginTop:'10%',
    alignSelf:'center',


},

carlogo:{

    width:'95%',
    height:'62%',
    marginTop:'10%',
    alignSelf:'center',

},

fontstyle8:{

    fontSize:RFValue(26,680),
    fontWeight:'700',
    alignSelf:'flex-start',
    marginTop:'10%',
    left:'5%',

},

bookbutton:{

    marginTop:'20%',
    //backgroundColor:'red',
    width:'80%',
    height:'9%',
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:20,
    elevation:2,

},

bookbuttonstyle:{

    width:'100%',
    height:'100%',
    borderRadius:20,

},

textstylebutton:{

    position:'absolute',
    alignSelf:'center',
    fontSize:RFValue(26,680),
    fontWeight:'bold',


},

})
