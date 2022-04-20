
/**
 * CSS AND IMAGE IMPORTS
 */
import LoginView from "../../resources/Views/auth/login.view";
import {LoginProvider} from "../../Providers/LoginProvider";
import React from "react";

const LoginComponent = () => {

    return (
        <LoginProvider>
            <LoginView/>
        </LoginProvider>
    );
}

export default LoginComponent;
