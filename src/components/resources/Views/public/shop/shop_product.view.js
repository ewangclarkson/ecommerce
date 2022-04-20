import React from 'react';
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useFetch} from "../../../../Request/useFetch";
import $ from "jquery";
import {decode} from 'base-64';
import Pagination from "../../pagination.view";

const ShopProductView = () => {

    let param = useParams();
    let paramID = decode(param.id);
    let {t} = useTranslation();

    let URI =  {url: t('hostSubCategoryProductsUrl') + '/' + paramID};

    const [loading, products] = useFetch(URI);
    const [itemsPerPage, setItemsPerPage] = React.useState(12);

    const setPageItems = (e) => {
        e.preventDefault();
        let val = parseInt(e.target.value);
        setItemsPerPage(val);

    }
    const handleShuffle = (e) => {
        e.preventDefault();
        let val = e.target.value;
        switch (val) {
            case '1':
                products?.sort((a, b) => (a.product_name < b.product_name ? 1 : -1))
                break;
            case '2':
                products?.sort((a, b) => (a.product_name < b.product_name ? 1 : -1))
                break;
            case '3':
                products?.sort((a, b) => (a.product_name > b.product_name ? 1 : -1))
                break;
            case '4':
                products?.sort((a, b) => (a.price < b.price ? 1 : -1));
                break;
            case '5':
                products?.sort((a, b) => (a.price > b.price ? 1 : -1));
                break;
        }
        setItemsPerPage(val);
    }

    if (loading) {
        return (
            <React.Fragment>
                <div style={{position: "relative", top: '40%', left: '28%'}}>
                    <h5>{t('loading')}</h5>
                </div>
            </React.Fragment>

        );
    }
    if (products.length === 0) {
        return (
            <React.Fragment>
                <div className="alerts">
                    <div className="alert-icon">
                        <i className="fa fa-check-circle"></i>
                    </div>
                    <div className="alert-content">
                        <h4>{t('productNotFound')}</h4>
                        <p>{t('productNotFoundDesc')}</p>
                    </div>
                </div>
            </React.Fragment>

        );
    }

    $(document).ready(function () {

        $('#switch-list').on('click', function (event) {
            event.preventDefault();
            $(this).addClass('active');
            $(this).siblings().removeClass("active");
            $(".product-item").each(function () {
                $(this).addClass('product-list');
            });

        });

        $('#switch-grid').on('click', function (event) {
            event.preventDefault();
            $(this).addClass('active');
            $(this).siblings().removeClass("active");
            $(".product-item").each(function () {
                $(this).removeClass('product-list');
            });
        });

    });


    return (
        <React.Fragment>
            <div className="row">
                <div className="col-xs-12 col-sm-12  col-md-12">
                    <div className="shop-options">
                        <div className="product-options2 pull-left pull-none-xs">
                            <ul className="list-inline">
                                <li>
                                    <div className="product-sort mb-15-xs">
                                        <span>sort by:</span>
                                        <i className="fa fa-angle-down"></i>
                                        <select name='shuffle' onChange={handleShuffle}>
                                            <option value="1">{t('productName')}</option>
                                            <option value="2">{t('newestItems')}</option>
                                            <option value="3">{t('oldestItems')}</option>
                                            <option value="4">{t('highestPrice')}</option>
                                            <option value="5">{t('lowestPrice')}</option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <div className="product-sort">
                                        <span>Show:</span>
                                        <i className="fa fa-angle-down"></i>
                                        <select name='sort' onChange={setPageItems}>
                                            <option value="10">10 items / page</option>
                                            <option value="25">25 items / page</option>
                                            <option value="50">50 items / page</option>
                                            <option value="100">100 items / page</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="product-view-mode text-right pull-none-xs">
                            <span>view as:</span>
                            <a id="switch-grid" className="active" href="#"><i className="fa fa-th-large"></i></a>
                            <a id="switch-list" href="#"><i className="fa fa-th-list"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination
                data={products}
                pageLimit={12}
                dataLimit={itemsPerPage}/>

            {/* #shop end */}
        </React.Fragment>

    );
}

export default ShopProductView;