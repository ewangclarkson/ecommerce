import React from 'react';
import {useTranslation} from "react-i18next";
import "../../../lang/i18n";
import "../../../../public/css/sidebar.css";
import darkLogo from '../../../../public/img/logo/logo-dark.png';
import {useAuth} from "../../../../Providers/Auth/useAuth";


const SideBarView = () => {
    let {t} = useTranslation();

    let auth = useAuth();
    const user = auth.getUser();
    document.body.classList.add('side-header');
    return (
        <React.Fragment>
            <div className="header--panel">
                <nav id="primary-menu" className="navbar">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="header--panel-logo">
                                <a className="logo" href={t('protectedUrl') + t('homeUrl')}>
                                    <img className="logo-dark" src={darkLogo} alt="Whole logo"/>
                                </a>
                            </div>
                        </div>
                        <hr/>
                        <ul className="nav navbar">
                            <li className='nav--list active'><a className="active"
                                                                href={t('protectedUrl') + t('homeUrl')}
                                                                style={{color: 'black'}} id="nav-home"><i
                                className="fa fa-home"></i>{t('home')}</a></li>

                            <li className='nav--list'><a href={t('protectedUrl') + t('clientCategoryUrl')}
                                                         style={{color: 'black'}} id="nav-cat"><i
                                className="fa fa-camera"></i>{t('categories')}</a></li>
                            <li className='nav--list'><a href={t('protectedUrl') + t('clientSubCategoryUrl')}
                                                         style={{color: 'black'}} id="nav-subcat"><i
                                className="fa fa-amazon"></i>{t('subCategories')}</a></li>
                            <li className='nav--list'><a href={t('protectedUrl') + t('clientProductUrl')}
                                                         style={{color: 'black'}} id="nav-prod"><i
                                className="fa fa-bar-chart"></i>{t('products')}</a></li>
                            {
                                user.isAdmin && (
                                    <li className='nav--list'><a href={t('protectedUrl') + t('clientUserUrl')}
                                                                 style={{color: 'black'}} id="nav-users"><i
                                        className="fa fa-male"></i> {t('users')}</a></li>)
                            }
                            {
                                user.isAdmin && (
                                    <li className='nav--list'><a
                                        href={t('protectedUrl') + t('clientPaymentRequestUrl')}
                                        style={{color: 'black'}} id="nav-payment"><i
                                        className="fa fa-android"></i>{t('paymentDetails')}</a></li>
                                )
                            }
                            <hr/>
                            <li className='nav--list'><a href={t('protectedUrl') + t('clientSettingsUrl')}
                                                         style={{color: 'black'}} id="nav-settings"><i
                                className="fa fa-wrench"></i> {t('settings')}</a></li>
                        </ul>
                    </div>

                </nav>
                <div className="clearfix"></div>
                <div className="header--panel-footer">
                    <div className="header--panel-social">
                        <a href='#' style={{color: "red", marginLeft: '70px', fontSize: '16px'}}
                           onClick={() => auth.logout()}><i
                            className="fa fa-eject">{t('logout')}</i></a>
                    </div>
                    <div className="header--panel-copyright">@vims &copy; 2017</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SideBarView;


