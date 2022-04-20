import React from 'react';
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
import _ from 'lodash';


const AddUserView = () => {

    let {t} = useTranslation();
    let auth = useAuth();
    /**
     * set all categories to save sub categories under
     * @type {{url: *}}
     */
    const [isLoading, setLoading] = React.useState(false);
    const [user, setUser] = React.useState({
        "name": "",
        "username": "",
        "password": "",
        "confirmPassword": "",
        "isAdmin": false,
    });

    $(document).ready(function () {
        $('#nav-users').css({color: 'red'});
    });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'isAdmin') {
            if (value == 1) {
                value = true;
            } else {
                value = false;
            }
        }

        setUser({...user, [name]: value});
    }


    const addUser = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        if ((user.password != user.confirmPassword) || user.password.length < 5) {
            $('#msg').html(getDangerAlert(t('confirmPasswordFailure')));
            return;
        }
        setLoading(true);
        let URI = t('hostUsersUrl');
        axiosApi({
            'method': 'POST',
            'url': URI,
            'data': _.pick(user, ['name', 'username', 'password', 'isAdmin']),
        }).then((response) => {
            if (response.status == 201) {
                $(document).ready(function () {
                    $('#msg').html(getSuccessAlert(t('userAddSuccessAlert')));
                });
            } else {
                $(document).ready(function () {
                    $('#msg').html(getDangerAlert(t('userAddFailureAlert')));
                });
            }
            setLoading(false);
        });

    };


    if (isLoading) {
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
            <div className="row clearfix bg-white">
                <div className="col-sm-10"><br/>
                    <a href={t('protectedUrl') + t('clientUserUrl')} className=' btn-success btn-xs text--left ml-30'
                       style={{padding: "13px"}}>
                        <i className='fa fa-arrow-circle-left ' style={{fontSize: '20px'}}></i>
                    </a>
                    <div className="text--center"><br/><br/>
                        <h2 className="heading--title">{t('addNewUser')}</h2>
                        <br/>
                        <b id='msg'></b>
                        <br/>
                        <div className="cart-table table-responsive"
                             style={{padding: "20px", marginLeft: '150px', marginRight: '150px'}}>
                            <form onSubmit={addUser}>
                                <div className="row">
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                                <label>{t('name')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <input type="text"
                                                       className="form-control"
                                                       name="name" id="name" onChange={handleChange}
                                                       required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                                <label>{t('email')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <input type="email"
                                                       className="form-control"
                                                       name="username" onChange={handleChange}
                                                       required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                                <label>{t('password')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <input type="password"
                                                       className="form-control"
                                                       name="password" onChange={handleChange}
                                                       required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                                <label>{t('confirmPassword')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <input type="password"
                                                       className="form-control"
                                                       name="confirmPassword" onChange={handleChange}
                                                       required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                                <label>{t('role')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <select className="form-control" name='isAdmin'
                                                        onChange={handleChange} required>
                                                    <option value='0' key='0'>{t('selectRole')}</option>
                                                    <option value='1' key='1'>{t('admin')}</option>
                                                    <option value='2' key='2'>{t('nUser')}</option>
                                                </select>
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

export default AddUserView;