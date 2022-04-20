import React, {useState} from "react";
import {useAuth} from "./Auth/useAuth";
import {useNavigate, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

const LoginContext = React.createContext();

export const LoginProvider = (props) => {


    let auth = useAuth();
    let person = {
        email: '',
        password: '',
    };

    const [guest, setGuest] = useState(person);
    const [show, showAlert] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const {t} = useTranslation();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        let from = location.state?.from?.pathname || t('protectedUrl');
        auth.login(guest).then((response) => {
            if (response.status === 200) {
                let auth = response.data;
                /**
                 * store access token and user in the local session storage
                 */
                sessionStorage.setItem('token', response.headers['x-auth-token']);
                sessionStorage.setItem('user', JSON.stringify(auth));
                navigate(from, {replace: true});
            }else {

                showAlert(true);
            }
        }).catch(error => {
            showAlert(true);
            console.log(error.getMessage);
        });
        ;

    };


    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setGuest({...guest, [name]: value});
    }

    const methods = {handleChange, handleSubmit, show, guest}
    return (
        <LoginContext.Provider value={methods}>
            {props.children}
        </LoginContext.Provider>
    );
}

export const useLogin = () => {
    return React.useContext(LoginContext);
}

