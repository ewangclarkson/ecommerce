import React from "react";
import {useTranslation} from "react-i18next";
import {useAuth} from "../../../../Providers/Auth/useAuth";
import {useFetch} from "../../../../Request/useFetch";
import {Navigate, useLocation, useParams} from "react-router-dom";
import "../../../lang/i18n";
import axiosApi from "../../../../Request/axios.client";
import "../../../../public/css/main.css";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import "../../../../public/js/app";
import {decode} from 'base-64';
import {init, send} from "@emailjs/browser";


const ValidatePaymentRequestView = () => {


    let {t} = useTranslation();
    let location = useLocation();
    let auth = useAuth();
    const user = auth.getUser();
    let params = useParams();
    let paramID = decode(params.pId);


    /**
     * set all categories to save sub categories under
     * @type {{url: *}}
     */
    let url = {url: t('hostPaymentUrl') + '/' + paramID};
    const [loading, payment, setPayment] = useFetch(url);
    const [isLoading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState({message: ''});
    const [sent, setSent] = React.useState(false);
    const [error, setError] = React.useState(false);

    if (!user.isAdmin) {
        return <Navigate to={t('homeUrl')} state={{from: location}} replace/>;
    }

    $(document).ready(function () {
        $('#nav-payment').css({color: 'red'});
    });


    if (isLoading || loading) {
        return (
            <React.Fragment>
                <div style={{position: "relative", top: '40%', left: '28%'}}>
                    <h5>{t('loading')}</h5>
                </div>
            </React.Fragment>

        );
    }

    init(process.env.REACT_APP_USER_ID);

    const handleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        setMessage({...message, [name]: value});

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        setLoading(true);
        const URL = t('hostPaymentUrl') + '/' + paramID;
        let response = await axiosApi({
            'method': 'PuT',
            'url': URL,
            'data': {
                status: 1
            }
        });
        if (response.status === 200) {
            let payment = await response.data;
            //after DB save,send email with code
            var templateParams = {
                name: payment.name,
                from_name: process.env.REACT_APP_MY_EMAIL,
                to_name: payment.email,
                message: message.message
            };
            send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams
            ).then(function (response) {
                    $('#contact-form')[0].reset();
                    // setSent(true)
                },
                function (error) {
                    // setError(true);
                });

            setSent(true);
            setError(false);
        } else {
            setError(true);
            setSent(false);
        }
        setLoading(false);
    }

    $(document).ready(function () {
        $('#data-table').DataTable();
    });
    return (
        <React.Fragment>
            <section id="banner4" className="skills skills-2 pt-0 pb-0 bg-white">
                <div className="container-fluid">
                    <br/><br/>
                    <h2 className="heading--title text-center">{t('paymentRequest')}</h2>
                    <a href={t('protectedUrl') + t('clientPaymentRequestUrl')} className=' btn-success btn-xs text--left ml-30'
                       style={{padding: "13px"}}>
                        <i className='fa fa-arrow-circle-left ' style={{fontSize: '20px'}}></i>
                    </a>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 pr-0 pl-0">
                            <div className="col-img  bg-overlay">
                                <div className="bg-section">
                                    <img src="/assets/images/background/momo.jpeg" alt="Background"
                                         style={{height: '80%', width: '100%'}}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-content pl-0 pr-0">
                            <div className="alerts">
                                <div className="alert-icon">
                                    <i className="fa fa-paypal"></i>
                                </div>
                                <div className="alert-content">
                                    <h4>{t('paymentInfoValid')}</h4>
                                    <p>  {t('paymentMessageVims')}</p>
                                </div>
                            </div>
                            <div className="contact-form">
                                {sent && (<div className="alert alert-success"> {t('paymentValidationSuccess')}</div>)}
                                {error && (<div className="alert alert-danger">{t('paymentValidationFailure')}</div>)}
                                <form className="mb-0" onSubmit={ handleSubmit} id="contact-form">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="email" className="form-control" name="email" id="email"
                                                   placeholder="Email" onChange={handleChange} value={payment.email}
                                                   disabled/>
                                        </div>
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" name="amount" id="amount"
                                                   placeholder="Amount"
                                                   value={payment.amount + ' ' + t('currency')}
                                                   disabled/>
                                        </div>
                                        <div className="col-md-12">
                                            <textarea className="form-control" name="message" id="location"
                                                      rows="2" placeholder="Delivery zone within the user's location"
                                                      onChange={handleChange}
                                                      required></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <input type="submit" value="Validate Payment" name="submit"
                                                   className="btn btn--primary btn--block"/>
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

export default ValidatePaymentRequestView;