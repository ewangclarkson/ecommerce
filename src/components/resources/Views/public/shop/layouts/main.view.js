import React from 'react';
import {Outlet} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import '../../../../lang/i18n';
import {useFetch} from "../../../../../Request/useFetch";
import {encode} from 'base-64';
import _ from 'lodash';
import $ from 'jquery';

const ShopLayoutView = () => {

    let {t} = useTranslation();
    let url = {url: t('hostCategoryUrl') + '?populate=' + 1};
    const [loading, categories] = useFetch(url);

    let URI = {url: t('hostProductUrl')};
    const [loader, productsE] = useFetch(URI);

    $(document).ready(function () {
            $('.nav li.active').removeAttr("class");
            $('#shop').addClass("active");
        });

    const searcher = (e) =>  {
        let searched =  e.target.value.trim();
        if (searched !== "") {

        }
    }
    $(document).ready(function () {$('#navbar-spy').removeClass("header-transparent").addClass("header-light");});
    return (
        <React.Fragment>
            <section id="page-title" className="page-title">
                <div className="container-fluid bg-overlay bg-overlay-dark">
                    <div className="bg-section">
                        <img src="/assets/images/page-title/title-20.jpg" alt="Background"/>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="title title-1 text--center">
                                <div className="title--content">
                                    <div className="title--heading">
                                        <h1>{t('ourProductsTitle')}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section id="shop" className="shop shop-3 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12  col-md-3">
                            <div className="widget widget-search">
                                <div className="widget--content">
                                    <form className="form-search">
                                        <div className="input-group">
                                            <input type="text" className="form-control"
                                                   placeholder="Type Your Search Words" onChange={searcher}/>
                                            <span className="input-group-btn"><button className="btn" type="button"><i
                                                className="fa fa-search"></i></button></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="widget widget-categories">
                                <div className="widget--title">
                                    <h5>{t('categories')}</h5>
                                </div>
                                <div className="divider--line">
                                    <i className="divider divider--1"></i>
                                    <i className="divider divider--2"></i>
                                    <i className="divider divider--3"></i>
                                    <i className="divider divider--4"></i>
                                </div>
                                <div className="widget--content">
                                   {/* <div className="collapse navbar-collapse pull-left" id="navbar-collapse-1">*/}
                                  {/*  <ul className="nav navbar-nav nav-pos-left navbar-left">*/}
                                        <ul className="list-unstyled">
                                            {
                                                categories.map((category) => {
                                                        return (
                                                            (category.subCategories.length !== 0) && (
                                                                <li className="has-dropdown" key={"cat-" + category._id}>
                                                                    <a href="#" data-toggle="dropdown"
                                                                       className="dropdown-toggle menu-item"
                                                                       style={{textTransform: 'capitalize'}}>{category.category_name}<span> ({category.subCategories.length})</span></a>
                                                                    <ul className="dropdown-menu">
                                                                        {
                                                                            category.subCategories.map((subCategory) => {
                                                                                return (<li key={subCategory._id}>
                                                                                        <a href={t('shopUrl') + '/' + encode(subCategory._id)}
                                                                                           style={{textTransform: 'capitalize'}}>{subCategory.subcategory_name.toLowerCase()}
                                                                                        </a>
                                                                                    </li>
                                                                                );
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </li>)
                                                        )
                                                    }
                                                )
                                            }
                                        </ul>
                                  {/*  </div>*/}
                                    {/*   <ul className="list-unstyled" style={{marginLeft:'17px'}} >
                                        {
                                            categories.map((category) => {
                                                    return (
                                                        (category.subCategories.length === 0) ? (
                                                            <li key={'cat-' + category._id}>
                                                                <a href={t('shopUrl') + '/' + encode('c' + category._id)}
                                                                   style={{textTransform: 'capitalize'}}>{category.category_name}
                                                                </a>
                                                            </li>
                                                        ) : ('')
                                                    )
                                                }
                                            )
                                        }
                                    </ul>*/}
                                </div>
                            </div>

                            <div className="widget widget-recent-products">
                                <div className="widget--title">
                                    <h5>{t('recentItems')}</h5>
                                </div>
                                <div className="divider--line">
                                    <i className="divider divider--1"></i>
                                    <i className="divider divider--2"></i>
                                    <i className="divider divider--3"></i>
                                    <i className="divider divider--4"></i>
                                </div>
                                <div className="widget--content">
                                    {
                                        _.uniq( _.slice(productsE,0,3)).map((prod, index) => {
                                            return (
                                                <div className="product clearfix" key={prod._id + index}>
                                                    <img src={prod.images[0].filename} alt="product" style={{width: "80px", height: "80px"}}/>
                                                    <div className="product-desc">
                                                        <div className="product-title">
                                                            <a href={t('shopUrl') + t('shopSingleUrl') + '/' + encode(prod._id)}>{prod.product_name}</a>
                                                        </div>
                                                        <div className="product-meta">
                                                            <span>{t('currency') + prod.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>

                            </div>
                            <div className="widget widget-tags">
                                <div className="widget--title">
                                    <h5>tag clouds</h5>
                                </div>
                                <div className="divider--line">
                                    <i className="divider divider--1"></i>
                                    <i className="divider divider--2"></i>
                                    <i className="divider divider--3"></i>
                                    <i className="divider divider--4"></i>
                                </div>
                                <div className="widget--content">
                                    <a href="#">Reliable</a>
                                    <a href="#">Trust Worthy</a>
                                    <a href="#">Quality</a>
                                    <a href="#">Fast Delivery</a>
                                    <a href="#">Easy Payments</a>
                                    <a href="#">Comfortable</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12  col-md-9">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}


export default ShopLayoutView;