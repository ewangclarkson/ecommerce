import React from 'react';
import {useAuth} from "../../../Providers/Auth/useAuth";
import {useTranslation} from "react-i18next";
import "../../lang/i18n";
import $ from 'jquery';

const ProtectedHomeView = () => {
    let auth = useAuth();
    let user = auth.getUser();
    let {t} = useTranslation();
    $(document).ready(function () {$('#nav-home').css({color:'red'});});

    return (
        <React.Fragment>
            <section id="contact1" className="contact-2 bg-white pb-100">
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
                                <div><br/><br/><br/><br/>
                                    <h6>{ t('welcome') + ', ' + user.name}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}


export default ProtectedHomeView;
