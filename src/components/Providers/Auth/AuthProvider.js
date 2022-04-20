import React from "react";
import axiosApi from "../../Request/axios.client";
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import '../../resources/lang/i18n'


export const AuthContext = React.createContext();

export const AuthProvider = (props) => {

    let guest = {
        id: '',
        username: '',
        password: '',
        email: '',
        roles: [],
        refreshToken: '',
        accessToken: '',
        bearerType: '',
    };
    let {t} = useTranslation();

    const [user, setUser] = React.useState(guest);
/*
   React.useEffect(() => {
        let url = t('hostUserUrl');
        axiosApi({
            'method': 'GET',
            'url': url,
        }).then((response) => {
            if (response.status === 200) {
                let auth = response.data;
                sessionStorage.setItem('user', JSON.stringify(auth));
            }
        }).catch(error => {
            console.log(error.getMessage);
        });
    }, []);*/

    const login = (props) => {
        let credentials = {username: props.email, password: props.password};
        let url = t('hostLoginUrl');
        return axiosApi({
            'method': 'POST',
            'url': url,
            data: credentials
        });
    };

    const logout = () => {
        /**
         * remove access token and user in the local session storage
         */
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
       /* setUser(guest);
        alert('ca');*/
        window.location.href = t('loginUrl');
    };


    const auth = () => {
        let accessToken = sessionStorage.getItem('token');

        if (accessToken) {
            return true;
        }
        return false;
    };

    const setAuth = (user) => {
        setUser(user);
    }

    const getUser = () => {
        return JSON.parse(sessionStorage.getItem('user'));
    }


    const authDetails = {auth, login, logout, setAuth, getUser, user};

    return (
        <AuthContext.Provider value={authDetails}>
            {props.children}
        </AuthContext.Provider>
    );
}