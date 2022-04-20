import React from "react";
import {useAuth} from "./useAuth";
import {useLocation, Navigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import "../../resources/lang/i18n"

export const AuthCheck = (props) => {
    let auth = useAuth();
    let location = useLocation();
    let {t} = useTranslation();


    if (!auth.auth()) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to={t('loginUrl')} state={{from: location}} replace/>;
    }

    return props.children;
}

