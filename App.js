import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from './FirstScreen'
import LoginScreen from './LoginScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  
return(

  <NavigationContainer>
    
    <Stack.Navigator>
        
        <Stack.Screen options={{headerShown:false}} name='FirstScreen' component={FirstScreen}/>
        <Stack.Screen options={{headerShown:false}} name='LoginScreen' component={LoginScreen}/>

    </Stack.Navigator>
    
</NavigationContainer>



)}