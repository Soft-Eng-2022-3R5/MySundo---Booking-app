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
    },
    backbutton:{
        
        top:'5%',
    
    },
    searchbar:{

        backgroundColor:'white',
        width:'80%',
        height:windowHeight/20,
        alignSelf:'flex-end',
        marginTop:'8.5%',
        marginRight:'5%',
        paddingLeft:10,
        paddingRight:10,
        borderRadius:10,

    },

    fontstyle1:{

        paddingLeft:10,
        marginTop:'2%',
        fontWeight:'bold',
        fontSize:RFValue(24,680),

    },

    fontstyle2:{

        paddingLeft:10,
        marginTop:'2%',
        fontWeight:'500%',
        fontSize:RFValue(14,680),
        alignSelf:'center',
        top:'32%',

    },

})