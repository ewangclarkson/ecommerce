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
import {useParams} from "react-router-dom";
import darkLogo from "../../../../public/img/logo/logo-dark.png";
import {decode} from 'base-64';

const EditProductView = () => {

    let {t} = useTranslation();
    let params = useParams();
    let paramID = decode(params.pId);


    /**
     * set all categories to save sub categories under
     * @type {{url: *}}
     */
    const [loader, subcategories] = useFetch({url: t('hostSubCategoryUrl')});
    const [isLoading, setLoading] = React.useState(false);
    const [pLoader, product, setProduct] = useFetch({url: t('hostAProductUrl') + '/' + paramID});
    const [images, setImages] = React.useState([]);

    $(document).ready(function () {
        $('#nav-prod').css({color: 'red'});
    });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name == 'images') {
            setImages(e.target.files);
            return;
        }

        setProduct({...product, [name]: value});
    }
    const handleMultiChange = (sizes) => {

        let sizesf = sizes.map((fd) => {
            return fd.value;
        });
        setProduct({...product, ["sizes"]: sizesf});
    }

    const editProduct = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        let formData = new FormData();
        formData.append('product_name', product.product_name);
        formData.append('brand', product.brand);
        formData.append('price', product.price);
        formData.append('quantity', product.quantity);
        formData.append('description', product.description);
        formData.append('SubCategories_id', product.SubCategories_id);
        for (const key of Object.keys(images)) {
            formData.append('images', images[key])
        }

        product.sizes.map((size) => {
            formData.append('sizes', size);
        });

        setLoading(true);
        let URI = t('hostAProductUrl') + '/' + paramID;
        axiosApi({
            'method': 'PUT',
            'url': URI,
            'data': formData,
        }).then((response) => {
            if (response.status == 200) {
                $(document).ready(function () {
                    $('#msg').html(getSuccessAlert(t('productEditSuccessAlert')));
                });
                setProduct(response.data);
            } else {
                $(document).ready(function () {
                    $('#msg').html(getDangerAlert(t('productEditFailureAlert')));
                });
            }
        });
        setLoading(false);

    };


    if (loader || isLoading || pLoader) {
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
                        <h2 className="heading--title">{t('editProduct')}</h2>
                        <br/>
                        <b id='msg'></b>
                        <br/>
                        <div className="cart-table table-responsive"
                             style={{padding: "20px", marginLeft: '150px', marginRight: '150px'}}>
                            <form onSubmit={editProduct}>
                                <div className="row">
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                                <label>{t('name')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <input type="text"
                                                       className="form-control"
                                                       name="product_name" id="product_name"
                                                       value={product.product_name}
                                                       onChange={handleChange}
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
                                                       name="brand" id="brandOfProduct"
                                                       value={product.brand} onChange={handleChange}
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
                                                       name="price" id="productFee" value={product.price}
                                                       onChange={handleChange}
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
                                                       required value={product.quantity}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                            </div>

                                            <div className='col-xs-9 pl-0 ml-0'>
                                                {
                                                    product.images.map((image) => {
                                                        return (
                                                            <div className="cart-product-img" key={image._id}>
                                                                <img src={image.filename} alt="product"
                                                                     style={{
                                                                         width: "80px",
                                                                         height: "80px",
                                                                         padding: '0px',
                                                                         margin: '0px'
                                                                     }}/>
                                                            </div>
                                                        )
                                                    })
                                                }
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
                                    {/*<div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                                <label>{t('category')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <select className="form-control"
                                                        name='productCategory' id="productCategory"
                                                        onChange={handleChange} required>
                                                    <option value='0' key='0'>{t('selectCategory')}</option>
                                                    {
                                                        categories.map((cate) => {
                                                            if (cate.pc_id == product.productCategory.pc_id) {
                                                                return <option value={cate.pc_id}
                                                                               key={cate.pc_id}
                                                                               selected>{cate.categoryName}</option>;
                                                            } else {
                                                                return <option value={cate.pc_id}
                                                                               key={cate.pc_id}>{cate.categoryName}</option>;
                                                            }
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>*/}
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                                <label>{t('subCategory')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <select className="form-control" name='SubCategories_id'
                                                        id='subCategory'
                                                        onChange={handleChange} value={product.SubCategories_id} required>
                                                    <option value='0' key='0'>{t('selectSubCategory')}</option>
                                                    {
                                                        subcategories.map((subcate) => {
                                                                return <option value={subcate._id}
                                                                               key={subcate._id}
                                                                               >{subcate.subcategory_name}</option>;
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
                                                    required value={product.description}></textarea>
                                            </div>
                                        </div>
                                    </div>
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

export default EditProductView;