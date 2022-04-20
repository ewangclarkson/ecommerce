import React from 'react';
import {useLogin} from "../../../Providers/LoginProvider";
import {useTranslation} from "react-i18next";
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import "../../lang/i18n";



const LoginView = () => {

    let guest = useLogin();
    const {t} = useTranslation();


    $(document).ready(function () {$('#navbar-spy').removeClass("header-transparent").addClass("header-light");});
    return (
        <React.Fragment>
            <section id="contact1" className="contact-2 bg-white pb-100"><br/><br/>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div style={{position: "relative", textAlign: "right", height: "350px", width: "1047"}}>
                                <div style={{
                                    overflow: "hidden",
                                    background: "none!important",
                                    height: "350px",
                                    width: "1047"
                                }}>
                                    <iframe width="1047" height="350" id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=douala,Cameroon&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            frameBorder="0" scrolling="no" marginHeight="0"
                                            marginWidth="0"></iframe>
                                    <a href="https://123movies-a.com"></a><br/>
                                    <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="contact-form">
                                <div className="title title-1 text--center">
                                    <div className="title--content">
                                        <div className="title--heading">
                                            <h1>{t('loginTitle')}</h1>
                                        </div>
                                    </div>
                                </div>
                                {guest.show && <div className='alert alert-danger'> {t('loginAlert')} </div>}
                                <form className="mb-0" onSubmit={guest.handleSubmit}>
                                    <div className="row">
                                            <div className="col-md-12">
                                                <input type="text" className="form-control" name="email" id="email"
                                                       placeholder={t('email')} required onChange={guest.handleChange}/>
                                            </div>
                                            <div className="col-md-12">
                                                <input type="password" className="form-control" name="password"
                                                       id="password"
                                                       placeholder={t('password')} required onChange={guest.handleChange}/>
                                            </div>
                                            <div className="col-md-12">
                                                <input type="submit" value={t('signIn')} name="submit"
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

export default LoginView;