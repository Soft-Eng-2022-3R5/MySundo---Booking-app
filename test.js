import React from "react";
import { Appnav,Account } from "./App";
import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "./AuthContext";

export default function Loginchecker() {

    const {loginaccess} = useContext(AuthenticationContext)
    return(
       
        <NavigationContainer>  

            {loginaccess ? <Appnav/>: <Account/>}
        
        </NavigationContainer>
    )
}