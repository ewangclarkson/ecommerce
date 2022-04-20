import {useAuth} from "../../Providers/Auth/useAuth";
import React, {useEffect} from "react";
import {Navigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import "../../resources/lang/i18n"

const LogoutComponent = () => {

    let auth = useAuth();
    let {t} = useTranslation();
   useEffect(() => {
        auth.logout();
    });


    return <Navigate to={t('loginUrl')}/>;
}

export default LogoutComponent;