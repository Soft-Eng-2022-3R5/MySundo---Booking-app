import { StyleSheet,Dimensions } from "react-native";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const styles = StyleSheet.create({


containter:{

    flex:1,
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor:'white',


},

bgstyle:{
    width:windowWidth,
    height:windowHeight,
},

pannel1:{

    //flex:1,
   
    position:'absolute',
    backgroundColor:'white',
    alignSelf:'center',
    width:'90%',
    height:windowHeight-270,
    //alignItems:'center',
    borderRadius:15,
    top:'20%',
    //shadowRadius: 1,
    elevation: 5,
   
    
},

logostyle:{

    top:42,
    position:'absolute',
    justifyContent:'center',
    alignSelf:'center',


},

fontstyle1:{

    fontFamily:'Roboto',
    fontWeight:'bold',
    fontSize:30,
    alignSelf:'center',
    color:'black',

},

inputfield:{

    height:40,
    width:'85%',
    //backgroundColor:'white',
    borderWidth:1,
    //borderColor:'#d9d9d9',
    borderColor:'#d9d9d9',
    borderRadius:5,
    paddingStart:50,
    paddingEnd:35,
    fontSize:14,
    fontFamily:'Roboto',

    marginBottom:'-7%',

    
},

inputstyle:{

    alignItems:'center',
    
},

inputfieldicon:{
    
    width:40,
    height:40,
    //backgroundColor:'gold',
    top:40,
    right:129,
    borderBottomLeftRadius:5,
    borderTopLeftRadius:5,
    borderRightWidth:1,
    borderEndColor:'#CBCBCB'

},

dropdownmenu:{
    position:'absolute',
    width:50,
    height:50,

    left:270,
    top: 10,
    
},


backbutton:{
    //flex:1,
    position:'absolute',
    flexDirection:'row',
    width:'100%',
    height:'20%',
    marginLeft:'30%',
    top:'5%',
},
dropdownarea:{
    position:'absolute',
    width:'85%',
    height:230,
    borderRadius:10,
    backgroundColor:'white',
    marginTop:'75%',
    elevation:5,


},

searchinput:{
    height:40,
    width:'90%',
    //backgroundColor:'white',
    borderWidth:1,
    //borderColor:'#d9d9d9',
    borderColor:'black',
    borderRadius:10,
    paddingStart:10,
    paddingEnd:35,
    fontSize:14,
    marginTop:15,
    fontFamily:'Roboto',
    alignSelf:'center',

},

provinceitem:{
    width:'80%',
    height: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: '#8e8e8e',
    alignSelf:'center'
},
fontstyle2:{
    top:20,


}

})
