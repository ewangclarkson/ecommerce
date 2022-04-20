import React from 'react';
import {useTranslation} from "react-i18next";
import {init} from '@emailjs/browser';
import {send} from '@emailjs/browser';
import $ from "jquery";


const FooterView = () => {

    const [email, setEmail] = React.useState({email: ''});
    const [sent, setSent] = React.useState(false);
    const [error, setError] = React.useState(false);
    const {t} = useTranslation();

    init(process.env.REACT_APP_USER_ID);

    const handleChange = async (e) => {
        e.preventDefault();
        let value = e.target.value;
        let name = e.target.name;

        setEmail({...email, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        var templateParams = {
            name: email.email,
            from_name: email.email,
            to_name: process.env.REACT_APP_MY_EMAI,
            message: "I apply for vims daily subscriptions"
        };

        send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams
        ).then(function (response) {
                $('#newsletter-form')[0].reset();
                setSent(true);
                setError(false);
            },
            function (error) {
                setError(true);
                setSent(false);
            });
    };

    return (
        <React.Fragment>
            <div className="footer-widget">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3 footer--widget-about">
                            <div className="footer--widget-title">
                                <h5>About Us</h5>
                            </div>
                            <div className="footer--widget-content">
                                <p>We are Vims, we provide you with services and products at the comfort of your house.Try it and watch it happen within cameroon</p>
                                <ul className="list-unstyled mb-0">
                                    <li><span>Call:</span> +237675669236</li>
                                    <li><span>Email:</span>vims.powerschool@gmail.com</li>
                                    <li><span>Visit:</span> Bonamousadi, Littoral, Douala</li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-xs-12 col-sm-6 col-md-3 footer--widget-recent">
                            <div className="footer--widget-title">
                                <h5>Recent Posts</h5>
                            </div>
                            <div className="footer--widget-content">
                                <div className="entry">
                                    <div className="entry--meta">Oct 15, 2016</div>
                                    <div className="entry--title">
                                        <a href="#">Four ways to cheer yourself up on the Blue Monday!</a>
                                    </div>
                                </div>
                                <div className="entry">
                                    <div className="entry--meta">Oct 10, 2016</div>
                                    <div className="entry--title">
                                        <a href="#">Old cameras can capture images better than nowdays camera!</a>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                        <div className="col-xs-12 col-sm-6 col-md-3 footer--widget-newsletter">
                            <div className="footer--widget-title">
                                <h5>Stay Updated</h5>
                            </div>
                            <div className="footer--widget-content">
                                <p>Don’t miss to follow us & subscribe to our new feeds, kindly fill the form
                                    below.</p>
                                {sent && <div className='alert alert-success'>Your subscription was successful</div>}
                                {error &&
                                <div className='alert alert-danger'>Failed to subscribe,please try again later</div>}
                                <form className="form-newsletter" onSubmit={handleSubmit} id="newsletter-form">
                                    <input type="email" name="email" className="form-control"
                                           placeholder="Subscribe Our Newsletter" onChange={handleChange}/>
                                    <button type="submit"><i className="fa fa-long-arrow-right"></i></button>
                                </form>
                                <div className="clearfix"></div>
                                <div className="social">
                                    <a className="share-facebook" href="#"><i className="fa fa-facebook"></i></a>
                                    <a className="share-twitter" href="#"><i className="fa fa-twitter"></i></a>
                                    <a className="share-instagram" href="#"><i className="fa fa-instagram"></i></a>
                                    <a className="share-linkedin" href="#"><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 widget-instagram">
                            <div className="footer--widget-title">
                                <h5>Instagram</h5>
                            </div>
                            <div className="footer--widget-content">
                                <div id="instafeed" className="instafeed"></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Copyrights
                ============================================= */}
            <div className="footer--bar">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-5 col-md-6">
                            <div className="footer--copyright">
                                <span>&copy; 2017 VIMS</span> {/*<a
                                href="http://themeforest.net/user/7oroof/portfolio?ref=zytheme">7oroof.com</a>*/}
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-7 col-md-6">
                            <div className="footer--links pull-right pull-none-xs">
                                <ul className="list-inline mb-0">
                                    <li><a href={t('homeUrl')} className="menu-item">{t('home')}</a></li>
                                    <li><a href={t('shopUrl')} className="menu-item">{t('shop')}</a></li>
                                    <li><a href={t('aboutUsUrl')} className="menu-item">{t('aboutUs')}</a></li>
                                    <li><a href={t('ourTeamUrl')} className="menu-item">{t('ourTeam')}</a></li>
                                    <li><a href={t('ourServicesUrl')} className="menu-item">{t('ourServices')}</a></li>
                                    <li><a href={t('faqsUrl')} className="menu-item">{t('faqs')}</a></li>
                                    <li><a href={t('contactUsUrl')} className="menu-item">{t('contactUs')}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FooterView;