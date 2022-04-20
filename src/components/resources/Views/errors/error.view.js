import React from 'react';
import {useAuth} from "../../../Providers/Auth/useAuth";
import FooterView from "../public/layouts/footer.view";
import {useTranslation} from "react-i18next";
import '../../lang/i18n';


const ErrorView = () => {
    let auth = useAuth();
    let {t} = useTranslation();
    return (
        <React.Fragment>
            <div id="wrapper" className="wrapper clearfix">
                <section className="page-404 text-center bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                                <h3>404</h3>
                                <div className="divider--line">
                                    <i className="divider divider--1"></i>
                                    <i className="divider divider--2"></i>
                                    <i className="divider divider--3"></i>
                                    <i className="divider divider--4"></i>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                                <p>{t('errorMessage')}</p>
                                {
                                    auth.auth() ? (
                                        <a className="btn btn--primary" href={t('protectedUrl') + t('homeUrl')}>Back To
                                            Home</a>) : (
                                        <a className="btn btn--primary" href={t('homeUrl')}>Back To Home</a>)
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <footer id="footer" className="footer footer-1">
                    {auth.auth() &&
                    <FooterView/>
                    }
                </footer>
            </div>
        </React.Fragment>
    );
};

export default ErrorView;
