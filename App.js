import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Dashboard';
import FirstScreen from './FirstScreen'
import LoginScreen from './LoginScreen';
import Screen1 from './ResetPassword/Screen1';
import Screen2 from './ResetPassword/Screen2';
import Screen3 from './ResetPassword/Screen3';
import SUscreen1 from './SignupScreen/SUscreen1';
import SUscreen2 from './SignupScreen/SUscreen2';
import BookScreen1 from './BookingScreen/BookScreen1';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

return(
  
  <NavigationContainer>
    <Stack.Navigator screenOptions={() => {
      return {
        headerShown:false,
      }

    }}>
        
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
        <Stack.Screen  name='Dashboard' component={Dashboard}/>
        <Stack.Screen  options={{headerShown:true, title:'BOOK A RIDE',
                                 headerStyle:{
                                 backgroundColor:'#25FFC4', 
                        
                      }}} name='BookScreen1' component={BookScreen1}/>
    </Stack.Navigator>

</NavigationContainer>



)}