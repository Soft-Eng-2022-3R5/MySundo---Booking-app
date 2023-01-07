import { StyleSheet,Dimensions } from "react-native";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export const styles = StyleSheet.create({


container:{
    flex:1,
    backgroundColor: 'pink',
    flexDirection:'column'
},

bgstyle:{
    //flex:1,
    width: windowWidth,
    height: '100%',
    
},

filter:{
    flex:1,
    position: 'absolute',
    backgroundColor: 'black',
    width: '100%',
    height: 392,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    opacity:0.2,

    

},

carousel:{
   flex:1,
    position: 'absolute',
    backgroundColor: 'green',
    width: '100%',
    height: 392,
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
fontSize:27,
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
    backgroundColor: 'white',
    width: '100%',
    height: 430,
    alignSelf: 'center',
    marginLeft:'30%',
    top:'30%',
    borderRadius: 20,
    shadowRadius: 1,
    elevation: 5,
 

    

    //alignItems:'center'
},


fontstyle1:{
    textAlign:'center',
    fontSize: 23,
    fontWeight:'700',
    fontFamily: 'Roboto',
    paddingTop: 30,
},


// fontstyle2:{
//     textAlign: 'center',
//     marginLeft: '10%',
//     marginRight: '10%',
//     paddingTop:15,
//     fontSize: 14,
//     fontFamily: 'Roboto',  
// },

fontstyle3:{
    textAlign: 'center',
    alignSelf:'center',
    fontSize: 14,
    fontFamily: 'Roboto',  
    top:37,
    backgroundColor:'white',
    width:120,
    
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
    alignSelf:'center',
    backgroundColor:'white',
    borderWidth:2,
    borderColor:'white',
    width:160,
    height:40,
    borderRadius:10,
     
},

sample:{
    alignSelf:'center',
    width:160,
    height:40,
    borderRadius:10,

},
line:{
    top:47,
    borderColor:'#A9A9A9',
    borderWidth:0.4,
    marginLeft:'10%',
    marginRight:'10%',
},

container2:{
    flex:1,
    position:'absolute',
    alignSelf:'center',
    height:50,
    top:315,
    width:200,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    
},

icon1:{
   
   
    height:40,
    width: 40,
    borderRadius:100,

},

icon2:{
    
    
    height:40,
    width: 40,
    margin:'10%',
    borderRadius:100,

},

icon3:{
    
    height:40,
    width: 40, 
    borderRadius:100,

},


textinputstyle:{
    
    alignSelf:'center',
    height:35,
    width:windowWidth-140,
    borderColor:'#d9d9d9',
    borderRadius:5,
    borderWidth:1,
    marginBottom:'5%',
    paddingStart:10,
    paddingEnd:10,


},

fontstyle4:{
    textAlign: 'center',
    alignSelf:'center',
    fontSize: 12,
    fontFamily: 'Roboto',  
    top:20,
    //backgroundColor:'white',
    //width:400,
    
   },

})