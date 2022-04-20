import React, {useCallback, useEffect} from 'react';
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
import {getDangerAlert, getSuccessAlert} from "../../../../public/js/app";


const Category_listView = () => {

    $(document).ready(function () {
        $('#nav-cat').css({color: 'red'});
    });
    let {t} = useTranslation();
    let auth = useAuth();
    const user = auth.getUser();

    let url = {url: t('hostCategoryUrl')};
    const [loading, categories, setData] = useFetch(url);
    const [category, setCategory] = React.useState({category_name: ''});
    const [isloading, setLoading] = React.useState(false);


    const deleteCategory = (catId) => {
        setLoading(true);
        axiosApi({
            'method': 'DELETE',
            'url': t('hostACategoryUrl') + '/' + catId,
        }).then((response) => {
            if (response.status == 200) {
                $(document).ready(function () {
                    $('#msg').html(getSuccessAlert(t('categoryDeleteSuccessAlert')));
                });
                let newCategories = categories.filter((cate) => cate._id != catId);
                setData(newCategories);
                setLoading(false)
            } else {
                $(document).ready(function () {
                    $('#msg').html(getDangerAlert(t('categoryDeleteFailureAlert')));
                });
            }
        });

    }

    const editCategory = (event, categoryId) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        let catName = $('#categoryName' + categoryId).val();
        let newCategory = {category_name: catName};
        setLoading(true);
        axiosApi({
            'method': 'PUT',
            'url': t('hostACategoryUrl') + '/' + categoryId,
            'data': newCategory,
        }).then((response) => {
            let newCategories = categories.map((cate) => {
                if (cate._id == categoryId) {
                    return {...cate, category_name: catName}
                }
                return cate;
            });
            if (response.status == 200) {
                $(document).ready(function () {
                    $('#msg').html(getSuccessAlert(t('categoryEditSuccessAlert')));
                });
            } else {
                $(document).ready(function () {
                    $('#msg').html(getDangerAlert(t('categoryEditFailureAlert')));
                });
            }
            setLoading(false)
            setData(newCategories);
        });

    };

    const addCategory = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        axiosApi({
            'method': 'POST',
            'url': t('hostACategoryUrl'),
            'data': category,
        }).then((response) => {
            if (response.status == 201) {
                $(document).ready(function () {
                    $('#msg').html(getSuccessAlert(t('categoryAddSuccessAlert')));
                });
                fetchData(url.url);
            } else {
                $(document).ready(function () {
                    $('#msg').html(getDangerAlert(t('categoryAddFailureAlert')));
                });
            }

        });

    };

    const fetchData = (URI) => {
        //  setLoading(true)
        axiosApi({
            'method': 'GET',
            'url': URI,
        }).then((response) => {
            let data = response.data;
            data.sort((a, b) => {
                return (a._id - b._id);
            });
            setData(data);
        });
    };


    const handleAddChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setCategory({...category, [name]: value});
    }

    $(document).ready(function () {
        $('#data-table').DataTable();
    });

    if (loading || isloading) {
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
                        <h2 className="heading--title">{t('categoryList')}</h2>
                        <br/>
                        <b id='msg'></b>
                        {user.isAdmin &&
                        <div className='row text--right pb-0 mb-0'>
                            <form className="form-inline"
                                  onSubmit={addCategory}>
                                <input type="text"
                                       className="form-control mr-30 mt-30"
                                       id="coupon"
                                       placeholder={t('addCategoryPlaceHolder')}
                                       name='category_name'
                                       onChange={handleAddChange} required/>
                                <button type="submit" style={{width: "14%"}}
                                        className="btn btn--primary"><i
                                    className='fa fa-plus-circle'></i>{t('addCategory')}
                                </button>
                            </form>
                        </div>
                        }
                        <div className="cart-table table-responsive bg-white" style={{padding: "35px"}}>
                            <table id="data-table" className="table table-bordered"
                                   style={{borderBottom: '1px solid white'}}>
                                <thead>
                                <tr className="cart-product">
                                    <th className="cart-product-item">{t('sn')}</th>
                                    <th className="cart-product-price">{t('categoryName')}</th>
                                    {user.isAdmin &&
                                    <th className="cart-product-quantity">{t('actions')}</th>
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    categories.map((cat, index) => {
                                        return (
                                            <tr className="cart-product" key={cat._id}>
                                                <td className="" style={{width:'2%'}}>
                                                    {++index}
                                                </td>
                                                <td className="cart-product-name" style={{
                                                    width: "400px",
                                                    maxWidth: "400px",
                                                    overflow: "hidden"
                                                }}>{cat.category_name}</td>
                                                {user.isAdmin &&
                                                <td className="cart-product-action">
                                                    <form className="form-inline pr-0 pl-0 mr-30 ml-0"
                                                          onSubmit={(e) => editCategory(e, cat._id)}>
                                                        <input type="text"
                                                               className="form-control pr-0 pl-0 mr-30 ml-0"
                                                               id={'categoryName' + cat._id}
                                                               placeholder={t('editCategoryPlaceHolder')}
                                                               name={'categoryName' + cat._id} required/>
                                                        <button type="submit"
                                                                className="btn btn-primary pr-0 pl-0 mr-30 ml-0"><i
                                                            className='fa fa-edit'></i> {t('applyEdit')}
                                                        </button>
                                                        <button className="btn btn--secondary pr-0 pl-0 mr-30 ml-0"
                                                                onClick={() => deleteCategory(cat._id)}><i
                                                            className='fa fa-trash'></i> {t('delete')}
                                                        </button>
                                                    </form>
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

export default Category_listView;