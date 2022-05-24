import React from 'react';
import {useTranslation} from "react-i18next";
import '../../../lang/i18n';
import {useCart} from "../../../../Providers/CartProvider";
import $ from "jquery";

const NavBarView = () => {
    let {t} = useTranslation();
    let cartProvider = useCart();
    document.body.classList.remove('side-header');

    const removeProduct = (e,id) => {
        // let ID = '#cart-' + id;
        // $(ID).remove();
        e.preventDefault();
        let item = {prodId: id};
        cartProvider.removeFromCart(item);
    }
    return (
        <React.Fragment>
            <nav id="primary-menu" className="navbar navbar-fixed-top">
                <div className="container">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="logo" href="/">
                            <img className="logo-light" src="/assets/images/logo/logo-light.png" alt="Whole logo"/>
                            <img className="logo-dark" src="/assets/images/logo/logo-dark.png" alt="Whole logo"/>
                        </a>
                    </div>

                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse pull-right" id="navbar-collapse-1">
                        <ul className="nav navbar-nav nav-pos-right navbar-left">
                            {/* Home Menu */}
                            <li id="home"><a href={t('homeUrl')} className="menu-item">{t('home')}</a></li>
                            <li id="shop"><a href={t('shopUrl')} className="menu-item">{t('shop')}</a></li>
                            <li id="aboutUs"><a href={t('aboutUsUrl')} className="menu-item">{t('aboutUs')}</a></li>
                            <li id="ourTeam"><a href={t('ourTeamUrl')} className="menu-item">{t('ourTeam')}</a></li>
                            <li id="ourService"><a href={t('ourServicesUrl')} className="menu-item">{t('ourServices')}</a></li>
                            <li id="faqs"><a href={t('faqsUrl')} className="menu-item">{t('faqs')}</a></li>
                            <li id="contactUs"><a href={t('contactUsUrl')} className="menu-item">{t('contactUs')}</a></li>
                            <li id="login"><a href={t('loginUrl')} className="menu-item">{t('login')}</a></li>
                        </ul>
                        <div className="module module-cart pull-left">
                            <div className="module-icon cart-icon">
                                <i className="fa fa-shopping-cart"></i>
                                <span className="title">{t('shopCart')}</span>
                                <label className="module-label">{cartProvider.cart.length}</label>
                            </div>
                            <div className="module-content module-box cart-box">
                                <div className="cart-overview">
                                    <ul className="list-unstyled">
                                        {
                                            cartProvider.cart.map((crt) => {
                                                return (
                                                    <li key={crt.p_id} id={'cart-' + crt.p_id}>
                                                        <img className="img-responsive"
                                                             src={crt.image}
                                                             alt="product" style={{width:"40px",height:"50px"}}/>
                                                        <div className="product-meta">
                                                            <h5 className="product-title">{crt.productName}</h5>
                                                            <p className="product-price">{crt.quantity + ' x  ' + t('currency') + crt.price}</p>
                                                        </div>
                                                        <a href="#" className="cart-cancel" onClick={(e) =>removeProduct(e,crt.p_id)}>{t('cancel')}</a>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="cart-total">
                                    <div className="total-desc">
                                        {t('subTotal')}:
                                    </div>
                                    <div className="total-price">
                                        ${cartProvider.cartTotal()}
                                    </div>
                                </div>
                                <div className="clearfix">
                                </div>
                                <div className="cart--control">
                                    <a className="btn btn--primary btn--block mb-10"
                                       href={t('shopCartUrl')}>{t('viewCart')}</a>
                                    {
                                        cartProvider.cart.length > 0 &&
                                            <a className="btn btn--secondary btn--bordered btn--block"
                                               href={t('clientCheckoutUrl')}>{t('checkout')}</a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </React.Fragment>
    );
}

export default NavBarView;