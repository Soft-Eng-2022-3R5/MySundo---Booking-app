import { StyleSheet,Dimensions } from "react-native";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const styles = StyleSheet.create({

container:{

   flex:1,
   backgroundColor:'white',
   
 
},
bgstyle:{
    
    width: windowWidth,
    height: windowHeight,
    
},
pannel1:{

    flex:1,
    alignSelf:'center',
    position:'absolute',
    top:'10%',
    alignItems:'center',
    height:500,
    width:windowWidth-40,


},

iconstyle:{

    top:'22%',
},

fontstyle1:{
    top:'27%',
    fontFamily:'Roboto',
    fontSize:18,
    fontWeight:'bold',
},

fontstyle2:{

    top:'28%',
    textAlign: 'center',
    fontFamily:'Roboto',
    fontSize:11,
    fontWeight:'40%',
    marginLeft: '15%',
    marginRight: '15%',
    
},
textfield:{
    


},

textinput:{
    height:35,
    //width:'70%',
    borderWidth:1,
    backgroundColor:'white',
    borderColor:'#d9d9d9',
    borderRadius:5,
    paddingLeft:10,
    paddingRight:10,
    //top:"33%",
    marginBottom:'3%',
},

buttonstyle:{
  
    width:'50%',
    height:40,
    top:'47%',
    marginBottom:'5%',
    borderRadius:10,

},

bgbuttonstyle:{
    width:'100%',
    height:40,
    borderRadius:10,

},

backbutton:{
    flex:1,
    position:'absolute',
    paddingLeft:10,
    paddingTop:40,
    flexDirection:'row',
},
passwordinputfield:{

    height:50,
    width:'70%',
    top:'33%'

}







})