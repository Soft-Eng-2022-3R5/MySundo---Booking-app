
import { useState } from "react";
import { createContext } from "react";
import axios from './plugin/axios'
import { Alert } from "react-native";

export const AuthenticationContext = createContext ();

export const AuthenticationProvider = ({children}) => {

  
    const [loginaccess,setLoginaccess] = useState(false)
    const [userid, setUserid] = useState ('');
    const [user_fname, setUser_fname] = useState ('');
    const [user_lname, setUser_lname] = useState ('');
    const [user_email, setUser_email] = useState ('');
    const [paymentmethod,setPaymentmethod] = useState('cash')


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
            
            axios.post('/api/fetch.php', {

                email: email,
            
              })
              .then(function (response) {
              
               setUserid(response.data[0].user_id)
               setUser_fname(response.data[0].first_name)
               setUser_lname(response.data[0].last_name)
               setUser_email(response.data[0].email)

              })
              .catch(function (error) {
                console.log(error)
              });

            setLoginaccess(true)
            
           }
            
          })
          .catch(function (error) {
            console.log(error)
          });

        
    }
    return(

  
        <AuthenticationContext.Provider value={{loginRequest,loginaccess,setLoginaccess,
        user_fname,user_lname,user_email,paymentmethod,setPaymentmethod,userid}}>
            
            {children }

        </AuthenticationContext.Provider>

    )

}
