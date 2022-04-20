import React from 'react';
import {init} from '@emailjs/browser';
import {send} from '@emailjs/browser';
import {useTranslation} from "react-i18next";
import "../../lang/i18n";
import $ from 'jquery';


const ContactUsView = () => {

    const [email, setEmail] = React.useState({name: '', email: '', myID: process.env.REACT_APP_MY_EMAIL, message: ''});
    const [sent, setSent] = React.useState(false);
    const [error, setError] = React.useState(false);

    let {t} = useTranslation();

    init(process.env.REACT_APP_USER_ID);

    const handleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        setEmail({...email, [name]: value});

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        var templateParams = {
            name: email.name,
            from_name: email.email,
            to_name: email.myID,
            message: email.message
        };

        send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams
        ).then(function (response) {
                $('#contact-form')[0].reset();
                setSent(true)
            },
            function (error) {
                setError(true);
            });
    };

    $(document).ready(function () {
        $('.nav li.active').removeAttr("class");
        $('#contactUs').addClass("active");
    });

    return (
        <React.Fragment>
            <section id="page-title" className="page-title">
                <div className="container-fluid bg-overlay bg-overlay-dark">
                    <div className="bg-section">
                        <img src="assets/images/page-title/title-18.jpg" alt="Background"/>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                            <div className="title title-1 text--center">
                                <div className="title--content">
                                    <div className="title--heading">
                                        <h1>Contact Us</h1>
                                    </div>
                                    <div className="title--desc">
                                        <p>We love what we do and we do it with passion. We value you and we are concern about your experience while using our products.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
            <section id="contact1" className="contact-2 bg-white pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="row mb-50">
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <div className="contact--info">
                                        <h3>Our Address</h3>
                                        <p>Bonamousadi,Akwa</p>
                                        <p>Littoral,Douala</p>
                                        <a className="link--styled" href="#">Get Directions</a>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <div className="contact--info">
                                        <h3>Our Phone</h3>
                                        <p>Office Telephone : +237675669236</p>
                                        <p>Mobile : +237673676301</p>
                                        <a className="link--styled" href="#">Call Us</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <div className="contact--info">
                                        <h3>Our Email</h3>
                                        <p>Main Email : vims.powerschool@gmail.com</p>
                                        <p>Inquiries : vimsinfo@gmail.com</p>
                                        <a className="link--styled" href="#">Send a Message</a>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <div className="contact--info">
                                        <h3>Our Support</h3>
                                        <p>Main Support : vimsinfo@gmail.com</p>
                                        <p>Sales : +237675669236</p>
                                        <a className="link--styled" href="#">Contact Us</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="contact-form">
                                {sent && (<div className="alert alert-success"> {t('emailSent')}</div>)}
                                {error && (<div className="alert alert-danger">{t('emailNotSent')}</div>)}
                                <form className="mb-0" onSubmit={handleSubmit} id="contact-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" name="name" id="name"
                                                   placeholder="Name" onChange={handleChange} required/>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control" name="email" id="email"
                                                   placeholder="Email" onChange={handleChange} required/>
                                        </div>
                                        <div className="col-md-12">
                                            <textarea className="form-control" name="message" id="message"
                                                      rows="2" placeholder="Message" onChange={handleChange}
                                                      required></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <input type="submit" value="Send Message" name="submit"
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
    )
}

export default ContactUsView;