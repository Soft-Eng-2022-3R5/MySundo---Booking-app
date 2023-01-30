import { StyleSheet,Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({

    containter:{
        flex:1,

    },

    navbar:{
        width:'100%',
        height: windowHeight/9,
        backgroundColor:'#25FFC4',
        elevation:5,
    },
    backbutton:{
        
        top:'5%',
       
    },
  

    fontstyle1:{
      
        width:'35%',
        alignSelf:'center',
        marginTop:'10%',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:RFValue(20,680),

    },

    fontstyle2:{

        paddingLeft:10,
        marginTop:'2%',
        fontWeight:'500%',
        fontSize:RFValue(14,680),
        alignSelf:'center',
        top:'40%',

    },

    container2:{
        //marginTop:'3%',
        width:'100%',
        height:windowHeight,
        backgroundColor:'#FCFCFC',
    },
    fontstyle3:{
        marginTop:'3%',
        fontWeight:'bold',
        color:'#7A7A7A',
        fontSize:RFValue(14,680),
        paddingLeft:15,
        paddingEnd:5,
    },

    fontstyle4:{
        marginTop:'3%',
        fontWeight:'bold',
        color:'black',
        fontSize:RFValue(14,680),
        
        paddingEnd:10,
    },

    box1:{
        width:'100%',
        height:windowHeight/15,

        borderBottomWidth:1,
        flexDirection:'row'
    },
    box2:{
        width:'100%',
        paddingBottom:30,
        borderBottomWidth:1,
        flexDirection:'column',
    },
 
})