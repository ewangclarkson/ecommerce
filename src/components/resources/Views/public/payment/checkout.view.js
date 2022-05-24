import React from "react";
import {useTranslation} from "react-i18next";
import {useCart} from "../../../../Providers/CartProvider";
import $ from "jquery";
import {init, send} from "@emailjs/browser";
import axiosApi from "../../../../Request/axios.client";
import _ from 'lodash';


const CheckoutView = () => {

    const cartProvider = useCart();
    const total = cartProvider.cartTotal();
    const preCart = cartProvider.cart;
    const [email, setEmail] = React.useState({name: '', email: '', location: '', tel: ''});
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

        //mono payment success
        const inventory = preCart.map((item) => {
            return {
                product_name: item.productName,
                quantity: item.quantity,
                price: item.price,
                image: item.image,
                Products_id: item.p_id,
                description: item.description
            }
        });

        if (_.isEmpty(inventory)) return;
        const paymentDetails = {
            name: email.name,
            email: email.email,
            location: email.location,
            amount: total,
            phone: email.tel,
            inventory: inventory,
        }

        const URL = t('hostPaymentUrl');
        axiosApi({
            'method': 'POST',
            'url': URL,
            'data': paymentDetails
        }).then((response) => {
            if (response.status === 201) {
                let payment = response.data;
                //after DB save,send email with code
                var templateParams = {
                    name: email.name,
                    from_name:process.env.REACT_APP_MY_EMAIL ,
                    to_name:email.email,
                    message: t('paymentResponseMsg') + payment.code
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

                cartProvider.resetCart([]);
                setSent(true);
                setError(false);
            } else {
                setError(true);
                setSent(false);
            }
        });
    }

    $(document).ready(function () {
        $('#navbar-spy').removeClass("header-transparent").addClass("header-light");
    });

    return (
        <React.Fragment>
            <section id="pricing1" className="pricing pricing-1 pt-0 pb-sm-1"><br/>
                <div className="container pt-0">
                    <div className="row clearfix pt-0">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                            <div className="heading heading-2 text--center mb-50">
                                <h2 className="heading--title">{t('momoPaymentTitle')}</h2>
                                <div className="divider--line">
                                    <i className="divider divider--1"></i>
                                    <i className="divider divider--2"></i>
                                    <i className="divider divider--3"></i>
                                    <i className="divider divider--4"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            preCart.map((cart) => {
                                return (
                                    <div className=" col-xs-12 col-sm-4 col-md-4 price-table" key={cart.p_id}>
                                        <div className="pricing-panel">
                                            <div className="pricing--heading text--center">
                                                <h4>{cart.productName}</h4>
                                                <p><span
                                                    className="currency">{t('currency')}</span>{cart.price}<span
                                                    className="time"> / {cart.quantity}</span>
                                                </p>
                                                <div className="pricing--desc">
                                                    {cart.description}
                                                </div>
                                            </div>

                                            <div className="pricing--body text--center">
                                                <ul className="pricing--list list-unstyled">
                                                    <li>{t('quantity')}: {cart.quantity}</li>
                                                    <li>{t('unitPrice')}: {cart.price}</li>
                                                    <li>{t('subTotal')} : {cart.price * cart.quantity} {t('currency')}</li>
                                                </ul>
                                                <a className="btn btn--secondary btn--block"
                                                   href="#">{cart.price * cart.quantity} {t('currency')}</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section id="banner4" className="skills skills-2 pt-0 pb-0 bg-white">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 pr-0 pl-0">
                            <div className="col-img  bg-overlay">
                                <div className="">
                                    <img src="/assets/images/background/momo1.jpeg" alt="Background"
                                         style={{height: '100%', width: '100%'}}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-content pl-100">
                            <div className="alerts">
                                <div className="alert-icon">
                                    <i className="fa fa-paypal"></i>
                                </div>
                                <div className="alert-content">
                                    <h4>{t('paymentInfo')}</h4>
                                    <p>  {t('paymentMessage')}</p>
                                </div>
                            </div>
                            <div className="contact-form">
                                {sent && (<div className="alert alert-success"> {t('paymentSuccess')}</div>)}
                                {error && (<div className="alert alert-danger">{t('paymentFailure')}</div>)}
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
                                            <input type="number" className="form-control" name="tel" id="tel"
                                                   placeholder="Tel: e.g 237673676301" onChange={handleChange}
                                                   required/>
                                        </div>
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" name="amount" id="amount"
                                                   placeholder="Amount"
                                                   value={total + ' ' + t('currency')}
                                                   disabled/>
                                        </div>
                                        <div className="col-md-12">
                                            <textarea className="form-control" name="location" id="location"
                                                      rows="2" placeholder="City" onChange={handleChange}
                                                      required></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <input type="submit" value="Make Momo Payment" name="submit"
                                                   className="btn btn--secondary btn--block"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cta1" className="cta cta-1 bg-overlay bg-overlay-theme">
                <div className="bg-section">
                    <img src="assets/images/cta/cta-1.jpg" alt="Background"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <h3>{t('promoMsg')}</h3>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 text-right">
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );


};


export default CheckoutView;