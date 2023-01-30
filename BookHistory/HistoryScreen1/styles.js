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
        //backgroundColor:'pink'

    },

    item_style:{
        width:'100%',
        flexDirection:'row',
        //backgroundColor: '#f9c2ff',
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical:5,
        borderBottomWidth:1,
    },
    title:{
        fontWeight:'bold'
    },
    fontstyle3:{
        fontSize:RFValue(12,680),
        
    },
    fontstyle4:{
        position:'absolute',
        left:'87%',
        marginTop:'3%',
        fontWeight:'bold'
    },

})