import { StyleSheet,Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({


container:{
    flex:1,
    backgroundColor: 'green',
    //flexDirection:'column'
    //justifyContent:'center'
},

bgstyle:{
    width: windowWidth,
    height: windowHeight,
},


backbutton:{

position:'absolute',
paddingLeft:10,
paddingTop:40,
justifyContent:'flex-start',
top:'-1%',



},



pannel1:{
    flex:1,
    position: 'absolute',
    alignItems:'center',
    backgroundColor: 'white',
    width: '90%',
    height: windowHeight/1.8,
    alignSelf: 'center',
    top: '23%',
    borderRadius: 20,
    shadowRadius: 1,
    elevation: 5,
    
},
fontstyle1:{
    textAlign:'center',
    fontSize: RFValue(20,680),
    fontWeight:'700',
    fontFamily: 'Roboto',
    paddingTop: 30,
},

fontstyle3:{
    textAlign: 'center',
    alignSelf:'center',
    fontSize: RFValue(14,680),
    fontFamily: 'Roboto',  
    backgroundColor:'white',
    width:windowWidth/3,
    
   },

SignUpbutton:{
    alignSelf:'center',
    backgroundColor:'white',
    borderWidth:2,
    borderColor:'#25FFC4',
    width:160,
    height:40,
    top:50,
    marginBottom:'5%',
    borderRadius:10,
    
},

Loginbutton:{
    //alignSelf:'center',
    //backgroundColor:'red',
    //alignItems:'center',
    width:windowWidth/2,
    height:'11%',
    top:'2%',
    //marginBottom:'5%',
    borderRadius:10,
     
},

sample:{
    width:'100%',
    height:'100%',
    borderRadius:10,

},

loginfont:{
    textAlign: 'center',top:'-85%',
    fontSize:RFValue(20,680),fontFamily:'Roboto',
    fontWeight:'bold',color:'white'
},

line:{
    top:'3%',
    width:'80%',
    borderColor:'#d9d9d9',
    borderWidth:1,
    marginLeft:'10%',
    marginRight:'10%',
},

container2:{

    position:'absolute',
    height:windowHeight/14,
    top:windowHeight/2.34,
    width:'70%',
    alignItems:'stretch',
    flexDirection:'row',
    justifyContent:'space-around',
  
    
},

icon1:{
   
    height:'100%',
    width: '25%',
},

icon2:{

    height:'100%',
    width: '25%',

},

icon3:{
    
    height:'100%',
    width: '25%',
},

test:{
    marginTop:'5%',
    width:'90%',
    height:windowHeight/5,
    backgroundColor:'white',
},

textinputstyle:{
    
    alignSelf:'center',
    height:windowHeight/20,
    width:'80%',
    borderColor:'#d9d9d9',
    borderRadius:5,
    borderWidth:1,
    marginBottom:'5%',
    paddingStart:10,
    paddingEnd:10,
    fontSize: RFValue(12,680),

},

fontstyle4:{
    fontSize: RFValue(12,680),
    fontFamily: 'Roboto',   
   },

clickherestyle:{
    fontSize: RFValue(12,680),
    fontFamily: 'Roboto',  
    color:'#438EFF',
    fontWeight:'500',

   },

eyestyle:{
    
    width:windowWidth/15,
    height:windowHeight/30,
   },

signuphere_nav:{
    top:windowHeight/7,
    flexDirection:'row',


},

})