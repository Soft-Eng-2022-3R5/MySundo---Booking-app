import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './FirstScreen'
import LoginScreen from './LoginScreen';
import Screen1 from './ResetPassword/Screen1';
import Screen2 from './ResetPassword/Screen2';
import Screen3 from './ResetPassword/Screen3';
import SUscreen1 from './SignupScreen/SUscreen1';
import SUscreen2 from './SignupScreen/SUscreen2';

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

    </Stack.Navigator>
</NavigationContainer>

)}