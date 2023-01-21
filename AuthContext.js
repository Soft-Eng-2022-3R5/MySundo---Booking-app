
import { useState } from "react";
import { createContext } from "react";
import axios from './plugin/axios'

export const AuthenticationContext = createContext ();

export const AuthenticationProvider = ({children}) => {

    const [user,setuser] = useState('');
    const [loginaccess,setLoginaccess] = useState(false)


    const loginRequest = (email,password) => {

        axios.post('/api/auth.php', {

            email: email,
            password: password,


          })
          .then(function (response) {
   
            if(response.data[0].Message === "wrong password"){
                Alert.alert('Login Failed','Your email or password is incorrect Please try again.',[
                    {text:'close', onPress: () => console.log('alert closed')},
                
                ]);
           }
           else if(response.data[0].Message === "No account yet"){
            Alert.alert('No Account Registered','The credential you entered is not found in our system!',[
                {text:'close', onPress: () => console.log('alert closed')},
            
            ]);
           }
           else if(response.data[0].Message === "Success"){

            setLoginaccess(true)
            
           }
            
          })
          .catch(function (error) {
            console.log(error)
          });

        
    }
    return(

  
        <AuthenticationContext.Provider value={{loginRequest,user,loginaccess}}>
            
            {children }

        </AuthenticationContext.Provider>

    )

}
