import React, {useEffect} from 'react';
import {useFetch} from "../../../../Request/useFetch";
import {useTranslation} from "react-i18next";
import "../../../lang/i18n";
import {useAuth} from "../../../../Providers/Auth/useAuth";
import axiosApi from "../../../../Request/axios.client";
import "../../../../public/css/main.css";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import "../../../../public/js/app";
import {getDangerAlert, getSuccessAlert} from "../../../../public/js/app";
import {encode} from 'base-64';

const ProductListView = () => {

    let {t} = useTranslation();
    let auth = useAuth();
    const user = auth.getUser();

    /**
     * set all categories to save sub categories under
     * @type {{url: *}}
     */
    let url = {url: t('hostProductUrl')};
    const [loading, products, setData] = useFetch(url);
    const [isLoading, setLoading] = React.useState(false);
    $(document).ready(function () {
        $('#nav-prod').css({color: 'red'});
    });

    const deleteProduct = (pId) => {
        setLoading(true);
        let URI = t('hostAProductUrl') + '/' + pId;
        axiosApi({
            'method': 'DELETE',
            'url': URI,
        }).then((response) => {
            if (response.status == 200) {
                $(document).ready(function () {
                    $('#msg').html(getSuccessAlert(t('productDeleteSuccessAlert')));
                });
                let newProducts = products.filter((pd) => pd._id != pId);
                setData(newProducts);
            } else {
                $(document).ready(function () {
                    $('#msg').html(getDangerAlert(t('productDeleteFailureAlert')));
                });
            }
        });
        setLoading(false);
    }


    $(document).ready(function () {
        $('#data-table').DataTable();
    });

    if (loading || isLoading) {
        return (
            <React.Fragment>
                <div style={{position: "relative", top: '40%', left: '28%'}}>
                    <h5>{t('loading')}</h5>
                </div>
            </React.Fragment>

        );
    }

    return (
        <React.Fragment>
            <div className="row clearfix">
                <div className="col-sm-12">
                    <div className="text--center">
                        <h2 className="heading--title">{t('productList')}</h2>
                        <br/>
                        <b id='msg'></b>
                        {user.isAdmin &&
                        <div className='row text--right pb-0 mb-0'>
                            <a href={t('protectedUrl') + t('clientAddProductUrl')}
                               className="btn btn--primary" style={{width: "18%"}}><i
                                className='fa fa-plus-circle '></i> {t('addNewProduct')}
                            </a>
                        </div>
                        }
                        <br/>
                        <div className="cart-table table-responsive bg-white" style={{padding: "35px"}}>
                            <table id="data-table" className="table table-bordered"
                                   style={{borderBottom: '1px solid white'}}>
                                <thead>
                                <tr className="cart-product">
                                    <th className="cart-product-item">{t('sn')}</th>
                                    <th className="cart-product-item">{t('image')}</th>
                                    <th className="cart-product-name">{t('variants')}</th>
                                    <th className="cart-product-name">{t('name')}</th>
                                    <th className="cart-product-item">{t('brand')}</th>
                                    <th className="cart-product-price">{t('cost')}</th>
                                    <th className="cart-product-price">{t('sizes')}</th>
                                    <th className="cart-product-name">{t('quantity')}</th>
                                    <th className="cart-product-name">{t('description')}</th>
                                    {user.isAdmin &&
                                    <th className="cart-product-action">{t('actions')}</th>
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    products.map((prod, index) => {
                                        return (
                                            <tr className="cart-product" key={index}>
                                                <td className="">
                                                    {++index}
                                                </td>
                                                <td className="cart-product-item">
                                                    <div className="cart-product-img">
                                                        <img src={prod.images[0].filename} alt="product" style={{
                                                            width: "80px",
                                                            height: "80px",
                                                            padding: '0px',
                                                            margin: '0px'
                                                        }}/>
                                                    </div>
                                                </td>
                                                <td className="cart-product-name">
                                                    <div className='row'>
                                                        {
                                                            prod.images.map((image, index) => {
                                                                if (index > 0) {
                                                                    return (
                                                                        <div className="col-xs-3"
                                                                             key={image._id}
                                                                             style={{padding: '2px', margin: '2px'}}>
                                                                            <div className="product--img">
                                                                                <img src={image.filename} alt="Product"
                                                                                     style={{
                                                                                         width: "100px",
                                                                                         height: "50px",
                                                                                     }}/>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    </div>
                                                </td>
                                                <td className="cart-product-name">{prod.product_name}</td>
                                                <td className="cart-product-item">{prod.brand}</td>
                                                <td className="cart-product-price">{prod.price}$</td>
                                                <td className="cart-product-name">
                                                    <ul>
                                                        {
                                                            prod.sizes.map((size, index) => {
                                                                return <li
                                                                    key={index}>{size}</li>;

                                                            })
                                                        }
                                                    </ul>
                                                </td>
                                                <td className="cart-product-name">{prod.quantity}</td>
                                                <td className="cart-product-name">{prod.description}</td>
                                                {user.isAdmin &&
                                                <td className='cart-product-action' style={{width: '18%'}}>
                                                    <a href={t('protectedUrl') + t('clientProductUrl') + '/' + encode(prod._id)}
                                                       className="btn btn-primary"><i
                                                        className='fa fa-edit'></i> {t('edit')}</a>
                                                    <button className="btn btn--secondary"
                                                            onClick={() => deleteProduct(prod._id)}><i
                                                        className='fa fa-trash'></i> {t('delete')}</button>
                                                </td>
                                                }
                                            </tr>
                                        );
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    );
}

export default ProductListView;