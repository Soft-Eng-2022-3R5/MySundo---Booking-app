import { StyleSheet,Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export const styles = StyleSheet.create({

containter:{

    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
    backgroundColor:'#fbfbfb',
    height:'100%'

},



navbar:{

    backgroundColor:'white',
    width:'100%',
    height:'8%',
    alignSelf:'flex-end',
    flexDirection:'row',
    justifyContent:'space-around'

},

chatbutton:{

    width:'15%',
    height:'80%',
    alignSelf:'center',

},

homebutton:{

    width:'15%',
    height:'80%',
    alignSelf:'center',

},

booklistbutton:{
    width:'15%',
    height:'80%',
    alignSelf:'center',
},



pannel1:{

    backgroundColor:'skyblue',
    width:windowWidth,
    height:windowHeight/4,
    marginBottom:'25%',
    alignSelf:'center',
    justifyContent:'center'
},

menubutton:{
    position:'absolute',
    height:'20%',
    width:'10%',
    top:'20%',
    right:'5%',

    alignSelf:'flex-end',
},

picture1:{

    width:windowWidth

},

textstyle1:{

    position:'absolute',
    fontFamily:'Roboto',
    fontSize: RFValue(13,680),
    fontWeight:'bold',
    paddingLeft:15,
    top:'25%',
},

textstyle2:{

    position:'absolute',
    fontFamily:'Roboto',
    fontSize: RFValue(23,680),
    fontWeight:'bold',
    paddingLeft:15,
    top:'30%',
},

textstyle3:{

    position:'absolute',
    fontFamily:'Roboto',
    fontSize: RFValue(14,680),
    fontWeight:'bold',
    paddingLeft:15,
    top:'26%',
},

textstyle4:{

    position:'absolute',
    fontFamily:'Roboto',
    fontSize: RFValue(20,680),
    fontWeight:'bold',
    paddingLeft:15,
    top:'15%',
},


inputstyle:{

    position:'absolute',
    width:'80%',
    height:'22%',
    alignSelf:'center',
    top:'100%',
    borderRadius:10,
    elevation:5,
},

searchbar:{
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    borderRadius:10,
    paddingLeft:20,
    paddingRight:45,

},

pannel2:{

    backgroundColor:'#83FDDC',
    width:'90%',
    height:150,
    marginBottom:'5%',
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:10,

},

selectbutton:{

    height:'15%',
    width:'20%',
    backgroundColor:'white',
    left:'6%',
    top:'30%',
    borderRadius:5,

},

pannel3:{

    backgroundColor:'#27E8B3',
    width:'90%',
    height:150,
    marginBottom:'5%',
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:10,
    
},

pannel4:{

    backgroundColor:'#CFFF93',
    width:'90%',
    height:150,
    marginBottom:'5%',
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:10,

},


pannel5:{

    backgroundColor:'#44AD91',
    width:'90%',
    height:150,
    marginBottom:'10%',
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:10,

},


scrollcontainer:{

    height:'100%',width:'100%',

   
}




})