import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from './FirstScreen'
import LoginScreen from './LoginScreen';
import Screen1 from './ResetPassword/Screen1';
import Screen2 from './ResetPassword/Screen2';

const Stack = createNativeStackNavigator();

export default function App() {

  
return(

  <NavigationContainer>
    
    <Stack.Navigator>
        
        <Stack.Screen options={{headerShown:false}} name='FirstScreen' component={FirstScreen}/>
        <Stack.Screen options={{headerShown:false}} name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen options={{headerShown:false}} name='Screen1' component={Screen1}/>
        <Stack.Screen options={{headerShown:false}} name='Screen2' component={Screen2}/>

    </Stack.Navigator>
    
</NavigationContainer>



)}