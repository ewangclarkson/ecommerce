import React from "react";
import {useTranslation} from "react-i18next";
import {useAuth} from "../../../../Providers/Auth/useAuth";
import {useFetch} from "../../../../Request/useFetch";
import {Navigate, useLocation} from "react-router-dom";
import "../../../lang/i18n";
import axiosApi from "../../../../Request/axios.client";
import "../../../../public/css/main.css";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import "../../../../public/js/app";
import {getDangerAlert, getSuccessAlert} from "../../../../public/js/app";
import {encode} from 'base-64';
import {init, send} from "@emailjs/browser";

const ProductDeliveryView = () => {


    let {t} = useTranslation();
    let location = useLocation();
    let auth = useAuth();
    const user = auth.getUser();

    /**
     * set all categories to save sub categories under
     * @type {{url: *}}
     */
    let url = {url: t('hostStatefulPaymentUrl') + '/1'};
    const [loading, payments, setPayments] = useFetch(url);
    const [isLoading, setLoading] = React.useState(false);
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

    const approveProductDelivery = async (paymentId) => {

        setLoading(true);
        const URL = t('hostPaymentUrl') + '/' + paymentId;
        let response = await axiosApi({
            'method': 'PUT',
            'url': URL,
            'data': {
                status: 2
            }
        });
        if (response.status === 200) {
            let payment = await response.data;
            //after DB save,send email with code
            var templateParams = {
                name: payment.name,
                from_name: process.env.REACT_APP_MY_EMAIL,
                to_name:payment.email,
                message: t('collectedMsg'),
            };

            send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams
            ).then(function (response) {

                },
                function (error) {
                    // setError(true);
                });

            let nPayments = payments.filter((pay) => {
                if (pay._id != paymentId) {
                    return pay;
                }
            });
            setPayments(nPayments);
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

            {sent && (<div className="alert alert-success"> {t('paymentCollectedSuccess')}</div>)}
            {error && (<div className="alert alert-danger">{t('paymentCollectedFailure')}</div>)}
            <div className="row clearfix">
                <div className="col-sm-12">
                    <div className="text--center">
                        <h2 className="heading--title">{t('productDeliveryTitle')}</h2>
                        <br/>
                        <b id='msg'></b>
                        <header id="navbar-spy" className="header header-light">
                            <nav id="primary-menu" className="navbar">
                                <div className="container">
                                    <div className="collapse navbar-collapse pull-right" id="navbar-collapse-1">
                                        <ul className="nav navbar-nav nav-pos-right navbar-left">
                                            <li><a
                                                href={t('protectedUrl') + t('clientPaymentRequestUrl')}
                                                className="menu-item"><i
                                                className="fa fa-android"></i> {t('paymentRequest')}</a>
                                            </li>
                                            <li className="active"><a
                                                href={t('protectedUrl') + t('clientProductDeliveryUrl')}
                                                className="menu-item" style={{color: 'red'}}><i
                                                className="fa fa-paypal"></i> {t('productDelivery')}</a>
                                            </li>
                                            <li><a href={t('protectedUrl') + t('clientProductCollectionUrl')}
                                                   className="menu-item"><i
                                                className="fa fa-cc-paypal"></i> {t('productCollected')}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </header>
                        <div className="cart-table table-responsive bg-white" style={{padding: "35px"}}>
                            <table id="data-table" className="table table-bordered"
                                   style={{borderBottom: '1px solid white'}}>
                                <thead>
                                <tr className="cart-product">
                                    <th className="cart-product-item">{t('sn')}</th>
                                    <th className="cart-product-item">{t('inventory')}</th>
                                    <th className="cart-product-name">{t('name')}</th>
                                    <th className="cart-product-item">{t('email')}</th>
                                    <th className="cart-product-item">{t('coupon')}</th>
                                    <th className="cart-product-price">{t('amount')}</th>
                                    <th className="cart-product-price">{t('phone')}</th>
                                    <th className="cart-product-name">{t('location')}</th>
                                    <th className="cart-product-name">{t('action')}</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    payments.map((payment, index) => {
                                        return (
                                            <tr className="cart-product" key={payment._id} id={payment._id}>
                                                <td>{++index}</td>
                                                <td className="cart-product-name">
                                                    <div className='row'>
                                                        {
                                                            payment.inventory.map((item) => {
                                                                return (
                                                                    <div className="col-xs-3"
                                                                         key={item._id}
                                                                         style={{padding: '2px', margin: '2px'}}>
                                                                        <div className="product--img">
                                                                            <img src={item.image}
                                                                                 alt={item.product_name}
                                                                                 style={{
                                                                                     width: "100px",
                                                                                     height: "50px",
                                                                                 }}/>
                                                                        </div>
                                                                        {t('qty')} : {item.quantity}
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </td>
                                                <td>{payment.name}</td>
                                                <td>{payment.email}</td>
                                                <td style={{color: "red"}}>{payment.code}</td>
                                                <td>{payment.amount}</td>
                                                <td>{payment.phone}</td>
                                                <td>{payment.location}</td>
                                                <td>
                                                    <button className="btn btn--primary btn-outline-primary"
                                                            style={{color: "white", background: "green"}}
                                                            onClick={ async () => await approveProductDelivery(payment._id)}><i
                                                        className='fa fa-share'></i> {t('deliverP')}</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default ProductDeliveryView;