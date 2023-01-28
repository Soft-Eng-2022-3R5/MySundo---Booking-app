import { StyleSheet,Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export const styles = StyleSheet.create({

    container:{

        flex:1,
        justifyContent:'flex-start',
        backgroundColor:'#ECECEC',
        flexDirection:'column'
    },
    pannel1:{
        width:'100%',
        height: windowHeight/1.7,
        backgroundColor:'white',
        borderRadius:20,
        flexDirection:'column'
    },
    headernav:{
        
        width:windowWidth,
        height: windowHeight/9.5,
        backgroundColor:'#25FFC4',
        elevation:5,
        
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
    backbutton:{
        
        top:'5%',
    
    },
    userbackground:{
        width:windowWidth,
        height:windowHeight/4.5,
        backgroundColor:'skyblue',
    },
    userprofile:{

        width:'30%',
        height:windowHeight/6.7,
        position:'absolute',
        alignSelf:'center',
        backgroundColor:'white',
        borderRadius:360,
        borderWidth:2,
        borderColor:'white',
        top:windowHeight/4.2
    },
    fontstyle1:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:RFValue(15,680),
        top:windowHeight/14,
    },
    pannel2:{
        width:'97%',
        height:windowHeight/17,
        //backgroundColor:'pink',
        top:windowHeight/7.5,
        flexDirection:'row',
        justifyContent:'space-around',
        alignSelf:'center',
    },
    userabout:{

        position:'absolute',
        width:'20%',
        height:'8%',
        backgroundColor:'white',
        left:'3%',
        top:'58%',
        borderRadius:10,
        borderWidth:2,
        borderColor:'#25FFC4'
    },
    fontstyle2:{
        fontWeight:'bold',
        textAlign:'center',
        marginTop:'5%',
        fontSize:RFValue(14,680),
    },
    editprofile:{

        position:'absolute',
        width:'20%',
        height:'8%',
        backgroundColor:'white',
        right:'3%',
        top:'58%',
        borderRadius:10,
        borderWidth:2,
        borderColor:'#25FFC4',
        alignSelf:'flex-end'
    },
    fontstyle3:{
        marginTop:'2%',
        fontWeight:'bold',
        fontSize:RFValue(13,680),
        left:'3%',
        color:''
    },


})