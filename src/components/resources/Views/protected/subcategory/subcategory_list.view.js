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
import "../../../../public/js/app";
import {getDangerAlert, getSuccessAlert} from "../../../../public/js/app";

const SubCategoryListView = () => {

    let {t} = useTranslation();
    let auth = useAuth();
    const user = auth.getUser();

    /**
     * set all categories to save sub categories under
     * @type {{url: *}}
     */
    const [load, categories] = useFetch({url: t('hostCategoryUrl')});
    let url = {url: t('hostSubCategoryUrl')};
    const [loading, subcategories, setData] = useFetch(url);
    const [isLoading, setLoading] = React.useState(false);


    $(document).ready(function () {
        $('#nav-subcat').css({color: 'red'});
    });

    const deleteSubCategory = (catId) => {
        setLoading(true);
        let URI = t('hostASubCategoryUrl') + '/' + catId;
        axiosApi({
            'method': 'DELETE',
            'url': URI,
        }).then((response) => {
            if (response.status == 200) {
                $(document).ready(function () {
                    $('#msg').html(getSuccessAlert(t('subCategoryDeleteSuccessAlert')));
                });
                let newCategories = subcategories.filter((cate) => cate._id != catId);
                setData(newCategories);
            } else {
                $(document).ready(function () {
                    $('#msg').html(getDangerAlert(t('subCategoryDeleteFailureAlert')));
                });
            }
        });
        setLoading(false);

    }

    const editSubCategory = (event, subCategoryId) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        let catName = $('#subCategoryName' + subCategoryId).val();
        let Categories_id = $('#pc_s' + subCategoryId).val();
        let newCategory = {subcategory_name: catName, Categories_id: Categories_id};

        setLoading(true);
        let URI = t('hostASubCategoryUrl') + '/' + subCategoryId;
        axiosApi({
            'method': 'PUT',
            'url': URI,
            'data': newCategory
        }).then((response) => {
            if (response.status == 200) {
                fetchData(url.url);
                $(document).ready(function () {
                    $('#msg').html(getSuccessAlert(t('subCategoryEditSuccessAlert')));
                });
            } else {
                $(document).ready(function () {
                    $('#msg').html(getDangerAlert(t('subCategoryEditFailureAlert')));
                });
            }
            setLoading(false);
        });

    };

    const addSubCategory = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        let subcateoryName = $('#subCategoryName').val();
        let pc_id = $('#pc_s').val();
        if (!subcateoryName || !pc_id) {
            return;
        }

        setLoading(true);
        let URI = t('hostASubCategoryUrl').trim();
        axiosApi({
            'method': 'POST',
            'url': URI,
            'data': {
                subcategory_name: subcateoryName,
                Categories_id: pc_id
            }
        }).then((response) => {
            if (response.status == 201) {
                $(document).ready(function () {
                    $('#msg').html(getSuccessAlert(t('subCategoryAddSuccessAlert')));
                });
                fetchData(url.url);
            } else {
                $(document).ready(function () {
                    $('#msg').html(getDangerAlert(t('subCategoryEditFailureAlert')));
                });
            }

        });
        setLoading(false);
    };


    const fetchData = (URI) => {

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


    // const handleAddChange = (event) => {
    //     let name = event.target.name;
    //     let value = event.target.value;
    //     alert(value);
    //     setSubCategory({...subCategory, [name]: value});
    // }

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
                        <h2 className="heading--title">{t('subCategoryList')}</h2>
                        <br/>
                        <b id='msg'></b>
                        {user.isAdmin &&
                        <div className='row text--right pb-0 mb-0'>
                            <form className="form-inline"
                                  onSubmit={addSubCategory}>
                                <input type="text"
                                       className="form-control mr-30 mt-30"
                                       id="subCategoryName"
                                       placeholder={t('addSubCategoryPlaceHolder')}
                                       name='subCategoryName' required/>
                                <select className="form-control  mr-0 mt-30 mr-30"
                                        id="pc_s"
                                        name='pc_s' required>
                                    <option value='0' key='0'>{t('selectCategory')}</option>
                                    {
                                        categories.map((cate) => {
                                            return <option value={cate._id}
                                                           key={cate._id}>{cate.category_name}</option>;
                                        })
                                    }
                                </select>
                                <button type="submit"
                                        className="btn btn--primary pr-15" style={{width: "18%"}}><i
                                    className='fa fa-plus-circle'></i> {t('addSubCategory')}
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
                                    <th className="cart-product-price">{t('subCategoryName')}</th>
                                    {user.isAdmin &&
                                    <th className="cart-product-quantity">{t('actions')}</th>
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    subcategories.map((cat, index) => {
                                        return (
                                            <tr className="cart-product" key={cat._id}>
                                                <td className="" style={{width: '2%'}}>
                                                    {++index}
                                                </td>
                                                <td className="cart-product-name" style={{
                                                    width: "350px",
                                                    maxWidth: "350px",
                                                    overflow: "hidden"
                                                }}>{cat.subcategory_name}</td>
                                                {user.isAdmin &&
                                                <td className="cart-product-action pr-0 pl-0 mr-0 ml-0">
                                                    <form className="form-inline pr-0 pl-0 mr-0 ml-0"
                                                          onSubmit={(e) => editSubCategory(e, cat._id)}>
                                                        <input type="text"
                                                               className="form-control pr-0 pl-0 mr-30 ml-0"
                                                               id={'subCategoryName' + cat._id}
                                                               placeholder={t('editSubCategoryPlaceHolder')}
                                                               name={'subCategoryName' + cat._id} required/>
                                                        <select className="form-control pr-0 pl-0 mr-0 ml-0"
                                                                id={"pc_s" + cat._id}
                                                                name='pc_s' value={cat.Categories_id} required>
                                                            <option value='0' key='0'>{t('selectCategory')}</option>
                                                            {
                                                                categories.map((cate) => {
                                                                    return <option value={cate._id}
                                                                                   key={cate._id}>{cate.category_name}</option>;
                                                                })
                                                            }
                                                        </select>
                                                        <button type="submit"
                                                                className="btn btn-primary pr-0 pl-0 mr-0 ml-0"><i
                                                            className='fa fa-edit'></i>{t('applyEdit')}</button>

                                                        <button className="btn btn--secondary pr-0 pl-0 mr-0 ml-0"
                                                                onClick={() => deleteSubCategory(cat._id)}><i
                                                            className='fa fa-trash'></i> {t('delete')}</button>
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

export default SubCategoryListView;