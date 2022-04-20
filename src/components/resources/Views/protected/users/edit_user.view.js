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
import {useParams} from "react-router-dom";
import {decode} from 'base-64';
import _ from 'lodash';

const EditUserView = () => {

    let {t} = useTranslation();
    let params = useParams();
    let paramID = decode(params.uId);


    /**
     * set all categories to save sub categories under
     * @type {{url: *}}
     */
    const [loading, user, setUser] = useFetch({url: t('hostUsersUrl') + '/' + paramID});
    const [isLoading, setLoading] = React.useState(false);


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


    const editUser = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setLoading(true);
        let URI = t('hostUsersUrl') + '/' + paramID;
        axiosApi({
            'method': 'PUT',
            'url': URI,
            'data': _.pick(user, ['name', 'isAdmin']),
        }).then((response) => {
            if (response.status == 200) {
                $(document).ready(function () {
                    $('#msg').html(getSuccessAlert(t('userEditSuccessAlert')));
                });
            } else {
                $(document).ready(function () {
                    $('#msg').html(getDangerAlert(t('userEditFailureAlert')));
                });
            }
            setLoading(false);
        });

    };


    if (isLoading || loading) {
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
                        <h2 className="heading--title">{t('editUser')}</h2>
                        <br/>
                        <b id='msg'></b>
                        <br/>
                        <div className="cart-table table-responsive"
                             style={{padding: "20px", marginLeft: '150px', marginRight: '150px'}}>
                            <form onSubmit={editUser}>
                                <div className="row">
                                    <div className='col-sm-12'>
                                        <div className='row'>
                                            <div className='col-xs-3 pr-0 mr-0 mt-20'>
                                                <label>{t('name')}</label>
                                            </div>
                                            <div className='col-xs-9 pl-0 ml-0'>
                                                <input type="text"
                                                       className="form-control"
                                                       name="name" id="name" value={user.name} onChange={handleChange}
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
                                                       name="username" value={user.username}
                                                       disabled/>
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
                                                    <option value='1' key='1' selected={user.isAdmin}>{t('admin')}</option>
                                                    <option value='2' key='2' selected={!user.isAdmin}>{t('nUser')}</option>
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
export default EditUserView;