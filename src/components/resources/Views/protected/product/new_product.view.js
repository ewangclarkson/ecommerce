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
import "../../../../public/css/product.css";
import Select from 'react-select';
import axios from "axios";
import _ from 'lodash';


const AddProductView = () => {

    let {t} = useTranslation();
    let auth = useAuth();
    /**
     * set all categories to save sub categories under
     * @type {{url: *}}
     */
    const [loader, subcategories] = useFetch({url: t('hostSubCategoryUrl')});
    const [isLoading, setLoading] = React.useState(false);
    const [product, setProduct] = React.useState({
        "product_name": "",
        "brand": "",
        "price": 0,
        "quantity": "",
        "sizes": [],
        "images": [],
        "description": "",
        "SubCategories_id": "",
    });

    $(document).ready(function () {
        $('#nav-prod').css({color: 'red'});
    });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name == 'images') {
            value = e.target.files;
        }

        setProduct({...product, [name]: value});
    }
    const handleMultiChange = (sizes) => {
        setProduct({...product, ["sizes"]: [...product.sizes, sizes[0].value]});
    }

    const addProduct = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        let formData = new FormData();
        formData.append('product_name', product.product_name);
        formData.append('brand', product.brand);
        formData.append('price', product.price);
        formData.append('quantity', product.quantity);
        formData.append('description', product.description);
        formData.append('SubCategories_id', product.SubCategories_id);
        for (const key of Object.keys(product.images)) {
            formData.append('images', product.images[key])
        }

        product.sizes.map((size) => {
            formData.append('sizes', size);
        });
        setLoading(true);
        let URI = t('hostAProductUrl');
        axiosApi({
            'method': 'POST',
            'url': URI,
            'data': formData,
        }).then((response) => {
            if (response.status == 201) {
                $(document).ready(function () {
                    $('#msg').html(getSuccessAlert(t('productAddSuccessAlert')));
                });
            } else {
                $(document).ready(function () {
                    $('#msg').html(getDangerAlert(t('productAddFailureAlert')));
                });
            }
            setLoading(false);
        });
        setLoading(false);

    };


    if (loader || isLoading) {
        return (
            <React.Fragment>
                <div style={{position: "relative", top: '40%', left: '28%'}}>
                    <h5>{t('loading')}</h5>
                </div>
            </React.Fragment>

        );
    }
    const options = [{
        label: '25 x 25',
        value: '25 x 25',
    },
        {
            label: '35 x 35',
            value: '35 x 35',
        },
        {
            label: '45 x 45',
            value: '45 x 45',
        }
    ];

    /* categories.map((ctg) => {
         return {value: ctg.pc_id, label: ctg.categoryName}
     })*/


    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            boxShadow: `0 0 0 1px 'orange'`,
        }),
        control: (provided) => ({
            ...provided,
            marginBottom: "7px",
        })
    }

    return (
        <React.Fragment>
            <div className="row clearfix bg-white">
                <div className="col-sm-10"><br/>
                    <a href={t('protectedUrl') + t('clientProductUrl')} className=' btn-success btn-xs text--left ml-30'
                       style={{padding: "13px"}}>
                        <i className='fa fa-arrow-circle-left ' style={{fontSize: '20px'}}></i>
                    </a>
                    <div className="text--center"><br/><br/>
                        <h2 className="heading--title">{t('addNewProduct')}</h2>
                        <br/>
                        <b id='msg'></b>
                        <br/>
                        <div className="cart-table table-responsive"
                             style={{padding: "20px", marginLeft: '150px', marginRight: '150px'}}>
                            <form onSubmit={addProduct}>
                                <div className="row">
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                                <label>{t('name')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <input type="text"
                                                       className="form-control"
                                                       name="product_name" id="productName" onChange={handleChange}
                                                       required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                                <label>{t('brand')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <input type="text"
                                                       className="form-control"
                                                       name="brand" id="brandOfProduct" onChange={handleChange}
                                                       required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                                <label>{t('cost')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <input type="number"
                                                       className="form-control"
                                                       name="price" id="productFee" onChange={handleChange}
                                                       required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                                <label>{t('Quantity')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <input type="number"
                                                       className="form-control"
                                                       name="quantity" id="quantity" onChange={handleChange}
                                                       required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                                <label>{t('image')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <input type="file"
                                                       className="form-control"
                                                       name="images" id="image" onChange={handleChange} multiple
                                                       required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0'>
                                                <label>{t('sizes')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <Select
                                                    isMulti
                                                    name="sizes"
                                                    className="text--left"
                                                    options={options}
                                                    styles={customStyles}
                                                    onChange={handleMultiChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                                <label>{t('subCategory')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <select className="form-control" name='SubCategories_id'
                                                        id='subCategory'
                                                        onChange={handleChange} required>
                                                    <option value='0' key='0'>{t('selectSubCategory')}</option>
                                                    {
                                                        subcategories.map((subcate) => {
                                                            return <option value={subcate._id}
                                                                           key={subcate._id}>{subcate.subcategory_name}</option>;
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                                <label>{t('description')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <textarea
                                                    className="form-control"
                                                    name="description" id="description" onChange={handleChange}
                                                    placeholder={t('description')}
                                                    required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0'>
                                                <label>{t('feature')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <Select
                                                    isMulti
                                                    name="featureDetail"
                                                    className="text--left"
                                                    options={options}
                                                    styles={customStyles}
                                                    onChange={handleMultiChange}
                                                />
                                            </div>
                                        </div>
                                    </div>*/}
                                    {/*  <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                                <label>{t('category')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <select className="form-control"
                                                        name='productCategory' id="productCategory" onChange={handleChange} required>
                                                    <option value='0' key='0'>{t('selectCategory')}</option>
                                                    {
                                                        categories.map((cate) => {
                                                            return <option value={cate._id}
                                                                           key={cate._id}>{cate.category_name}</option>;
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>*/}
                                </div>
                                <input type="submit"
                                       className="btn btn--primary" style={{width: '100%'}} value={t('submit')}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    );
}

export default AddProductView;