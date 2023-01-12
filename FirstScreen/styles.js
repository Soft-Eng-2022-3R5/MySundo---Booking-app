import { StyleSheet,Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({

container:{
    flex:1,
    backgroundColor: 'white',
    flexDirection:'column'
},

bgstyle:{
    
    width: windowWidth,
    height: windowHeight,
    
},

carousel:{
    position: 'absolute',
    width: '100%',
    height: '50%',
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,

},

backbutton:{
    flex:1,
    position:'absolute',
    paddingLeft:10,
    paddingTop:40,
    flexDirection:'row',
    //justifyContent:'space-around',
    
    },
    
Logo:{
    fontFamily:'Roboto',
    fontWeight:'bold',
    fontSize:RFValue(27,680),
    color:'white',
    paddingLeft:10,
    top:5,
    textShadowColor: 'black',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 10
    
    },
    

pannel1:{
    flex:1,
    position: 'absolute',
    alignItems:'center',
    backgroundColor: 'white',
    width: '100%',
    height: windowHeight/1.9,
    alignSelf: 'center',
    marginLeft:'30%',
    top: windowHeight/3,
    borderRadius: 20,
    shadowRadius: 1,
    elevation: 5,
 
},


fontstyle1:{
    textAlign:'center',
    fontSize: RFValue(23,680),
    fontWeight:'700',
    fontFamily: 'Roboto',
    paddingTop: 30,
},


fontstyle2:{
    textAlign: 'center',
    marginLeft: '10%',
    marginRight: '10%',
    paddingTop:15,
    fontSize: RFValue(14,680),
    fontFamily: 'Roboto',  
},

fontstyle3:{
    textAlign: 'center',
    alignSelf:'center',
    fontSize: RFValue(14,680),
    fontFamily: 'Roboto',  
    top:windowHeight/11.6,
    backgroundColor:'white',
    width:windowWidth/3,
    
   },

SignUpbutton:{
    //alignSelf:'center',
    backgroundColor:'white',
    borderWidth:2,
    borderColor:'#25FFC4',
    width:windowWidth/2,
    height:'11%',
    top:windowHeight/17,
    marginBottom:'5%',
    borderRadius:10,
    
},

Loginbutton:{

    //alignSelf:'center',
    backgroundColor:'white',
    //alignItems:'center',
    width:windowWidth/2,
    height:'11%',
    top:windowHeight/17,
    //marginBottom:'5%',
    borderRadius:10,
},

sample:{
    //alignSelf:'center',
    width:'100%',
    height:'100%',
    borderRadius:10,

},
line:{
    top:windowHeight/9.8,
    width:'80%',
    borderColor:'#d9d9d9',
    borderWidth:1,
    marginLeft:'10%',
    marginRight:'10%',
},

container2:{
    //flex:1,
    position:'absolute',
    //alignSelf:'center',
    height:windowHeight/14,
    top:windowHeight/2.4,
    width:'70%',
    alignItems:'stretch',
    //backgroundColor:'pink',
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

signupfont:{
    textAlign: 'center',top:'10%',
    fontSize:RFValue(20,680),fontFamily:'Roboto',
    fontWeight:'bold',color:'#25FFC4'
},

loginfont:{
    textAlign: 'center',top:'-85%',
    fontSize:RFValue(20,680),fontFamily:'Roboto',
    fontWeight:'bold',color:'white'
},

})