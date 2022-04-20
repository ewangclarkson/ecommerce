import React from "react";
import {useAuth} from "../../../Providers/Auth/useAuth";
import $ from "jquery";
import {useTranslation} from "react-i18next";
import axiosApi from "../../../Request/axios.client";


const SettingsView = () => {
    let password = {
        oldPassword: '',
        password: ''
    };
    const [setting, setSetting] = React.useState(password);
    const [error, setError] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const auth = useAuth();
    const user = auth.getUser();
    const {t} = useTranslation();


    const handleChange = async (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setSetting({...setting, [name]: value});
        setSuccess(false);
        setError(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        if (setting.password.length < 5 || setting.oldPassword.length < 5) {
            setError(true);
            setSetting(password);
            return;
        }
        alert(JSON.stringify(setting));
        const URI = t('hostChangeUserPasswordUrl') + '/' + user._id;
        axiosApi({
            'method': 'PUT',
            'url': URI,
            'data': {
                password: setting.password,
                oldPassword: setting.oldPassword
            },
        }).then((response) => {
            if (response.status == 200) {
                setSuccess(true);
                setError(false);
            } else {
                setError(true);
                setSuccess(false);
            }
        });

        setSetting(password);
    }

    $(document).ready(function () {
        $('#nav-settings').css({color: 'red'});
    });

    return (
        <React.Fragment>
            <div className="text--center">
                <h2 className="heading--title">{t('accountSetting')}</h2>
                <br/>
            </div>
            <br/>
            <section id="contact1" className="contact-2 bg-white pb-90">
                <div className="container p-0 m-0">
                    <div className="row p-0 m-0">
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="row mb-50">
                                <div className="col-xs-2 col-sm-2 col-md-2">
                                    <div className="contact--info">
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <div className="contact--info">
                                        <h3>{t('basicInfo')}</h3>
                                        <p>{t('name')}:{user.name}</p>
                                        <p>{t('email')}: {user.username}</p>
                                        <a className="link--styled" href="#">BI</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-2 col-sm-2 col-md-2">
                                    <div className="contact--info">
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <div className="contact--info">
                                        <h3>{t('role')}</h3>
                                        <p>{user.isAdmin ? t('admin') : t('user')}</p>
                                        <a className="link--styled" href="#">RE</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="contact-form p-0">
                                {success && (<div className="alert alert-success"> {t('passwordChangeSuccess')}</div>)}
                                {error && (<div className="alert alert-danger">{t('passwordChangeFailure')}</div>)}
                                <h3 className="heading--title p-0 m-0 ">{t('changePassword')}</h3><br/>
                                <form className="mb-0" onSubmit={handleSubmit} id="contact-form">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="password" className="form-control" name="password" id="name"
                                                   placeholder="Enter a new password" onChange={handleChange} required/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="password" className="form-control" name="oldPassword"
                                                   placeholder="Enter old password" onChange={handleChange} required/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="submit" value="Change password" name="submit"
                                                   className="btn btn--secondary btn--block"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default SettingsView;