import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthenticationProvider,AuthenticationContext } from './AuthContext';
import Dashboard from './Dashboard';
import FirstScreen from './FirstScreen'
import LoginScreen from './LoginScreen';
import Screen1 from './ResetPassword/Screen1';
import Screen2 from './ResetPassword/Screen2';
import Screen3 from './ResetPassword/Screen3';
import SUscreen1 from './SignupScreen/SUscreen1';
import SUscreen2 from './SignupScreen/SUscreen2';
import BookScreen1 from './BookingScreen/BookScreen1';
import ProfileScreen from './ProfileScreen';
import BookScreen2 from './BookingScreen/BookScreen2';
import BookScreen3 from './BookingScreen/BookScreen3';
import MapScreen from './BookingScreen/mapscreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import Loginchecker from './test';

const MessageScreen = () => null;
const BooklistScreen = () => null;

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();



export default function App() {


return(
  
 

  <AuthenticationProvider>
    
        <Loginchecker/>

  </AuthenticationProvider>

)

}

export const Account = () => {
  return(
  <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen  name='FirstScreen' component={FirstScreen}/>
        <Stack.Screen  name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen  name='Screen1' component={Screen1}/>
        <Stack.Screen  name='Screen2' component={Screen2}/>
        <Stack.Screen  name='Screen3' component={Screen3}/>
        <Stack.Screen  name='SUscreen1' component={SUscreen1}/>

        <Stack.Screen  options={{headerShown:true, title:'Registration', headerTitleAlign: 'center',
                                 headerStyle:{
                                 backgroundColor:'#25FFC4',
                        
                      }}} name='SUscreen2' component={SUscreen2}/>
  </Stack.Navigator>
  )
}

const Homepage = () => {
  return(
  <Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen  name='Dashboard' component={Dashboard}/>
        <Stack.Screen  options={{headerShown:true, title:'BOOK A RIDE',
                                 headerStyle:{
                                 backgroundColor:'#25FFC4', 
                        
                      }}} name='BookScreen1' component={BookScreen1}/>

        <Stack.Screen  options={{headerShown:true, title:'BOOK FOR LATER',
                                 headerStyle:{
                                 backgroundColor:'#25FFC4', 
                        
                      }}} name='BookScreen2' component={BookScreen2}/>
        <Stack.Screen  options={{headerShown:true, title:'BOOK FOR SOMEONE',
                                 headerStyle:{
                                 backgroundColor:'#25FFC4', 
                        
                      }}} name='BookScreen3' component={BookScreen3}/>


        <Stack.Screen  name='MapScreen' component={MapScreen}/>
                    
  </Stack.Navigator>
  )
}

const TAB_ICON = {
  Home: "home",
  Messages: "chatbox-ellipses",
  Booklist: "clipboard",
};

const screenOptionstabnav = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Icon name={iconName} size={size} color={color} />
    ),
    headerShown: false,
    tabBarHideOnKeyboard: true,
  };
};

export const Appnav = () => {

  const Tab = createBottomTabNavigator();

  return(
     <Tab.Navigator
     screenOptions={screenOptionstabnav}
     
     >
      <Tab.Screen name="Home" component={Homedrawer} />
      <Tab.Screen name="Messages" component={Messagedrawer} />
      <Tab.Screen name="Booklist" component={Booklistedrawer} />
      
    </Tab.Navigator>

  )
}


const Homedrawer = () => {

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: false,
        swipeEnabled: true,
        swipeEdgeWidth: 150,
        drawerPosition: "right",
        
      }}

      drawerContent = {DrawerList}

      >
   
      <Stack.Screen name="Homepage" component={Homepage} />
      {/* <Stack.Screen name="Sundo" component={SundoScreen} />
      <Stack.Screen name="Book A Ride" component={BookARideScreen} />
      <Stack.Screen name="Book for Later" component={BookForLaterScreen} />
      <Stack.Screen name="Book for Someone" component={BookForSomeoneScreen} /> */}
    </Drawer.Navigator>
  );
}

const Messagedrawer = () => {

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: false,
        swipeEnabled: true,
        swipeEdgeWidth: 150,
        drawerPosition: "right",
      }}
      >
   
      <Stack.Screen name="MessageScreen" component={MessageScreen} /> 
   
    </Drawer.Navigator>
  );
}


const Booklistedrawer = () => {

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: false,
        swipeEnabled: true,
        swipeEdgeWidth: 150,
        drawerPosition: "right",
      }}
      >
   
      <Stack.Screen name="BooklistScreen" component={BooklistScreen} />
    
    </Drawer.Navigator>
  );
}



export const DrawerListComponent = () => <DrawerList />;

const Profile = () => <Icon name="person" size={20} />;
const About = () => <Icon name="information-circle" size={20} />;
const Coupons = () => <Icon name="receipt" size={20} />;
const RiderSafety = () => <Icon name="shield-checkmark" size={20} />;
const SignOut = () => <Icon name="exit" size={20} />;
const TellAfriend = () => <Icon name="share-social" size={20} />;
const HelpAndFeedback = () => <Icon name="md-help-circle" size={20} />;

const DrawerList = () => {

  const {setLoginaccess} = useContext(AuthenticationContext)

  return (
    <DrawerContentScrollView>
      <View>
        <View style={{flexDirection:'row',marginTop:'10%',paddingLeft:10}}>
          <Image
            source={require("./assets/fb_logo.png")}
            style={{ width: 50, height: 50 }}
          />
          <View >
            <Text style={{paddingLeft:10,fontSize:RFValue(14,680),top:'10%'}}>Peter Francis Robante</Text>
            <Text style={{paddingLeft:10,fontSize:RFValue(10,680),top:'10%',color:'#7A7A7A'}}>robantepeterfran@gmail.com</Text>
          </View>

          
        </View>

        <View style={{width:'100%',height:'2%',backgroundColor:'#25FFC4',marginTop:'5%'}}/>

        <DrawerItem label="Profile" icon={Profile} />
        <DrawerItem label="About" icon={About} />
        <DrawerItem label="Coupons" icon={Coupons} />
        <DrawerItem label="Rider Safety" icon={RiderSafety} />
        <DrawerItem label="Sign Out" icon={SignOut} onPress={()=>{setLoginaccess(false)}}/>
      </View>

      <View style={{marginTop:'75%'}}>
        <View style={{position:'absolute',width:'100%',height:'50%'}}/>
        <DrawerItem label="Tell a friend" icon={TellAfriend} />
        <DrawerItem label="Help and Feedback" icon={HelpAndFeedback} />

      </View>
    </DrawerContentScrollView>
  );


};