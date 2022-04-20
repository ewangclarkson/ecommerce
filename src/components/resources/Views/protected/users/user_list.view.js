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

const UserListView = () => {

    let {t} = useTranslation();
    let auth = useAuth();

    /**
     * set all categories to save sub categories under
     * @type {{url: *}}
     */
    let url = {url: t('hostUsersUrl')};
    const [loading, users, setData] = useFetch(url);
    const [isLoading, setLoading] = React.useState(false);

    $(document).ready(function () {
        $('#nav-users').css({color: 'red'});
    });

    const deleteUser = async (userId) => {
        setLoading(true);
        try {
            const URI = t('hostUsersUrl') + '/' + userId;
            const response = await axiosApi({
                'method': 'DELETE',
                'url': URI,
            });
            if (response.status === 200) {
                $(document).ready(function () {
                    $('#msg').html(getSuccessAlert(t('userDeleteSuccessAlert')));
                });
                let newUsers = users.filter((user) => user._id != userId);
                setData(newUsers);
            } else {
                $(document).ready(function () {
                    $('#msg').html(getDangerAlert(t('userDeleteFailureAlert')));
                });
            }
        } catch (e) {

        }
        setLoading(false);

    }

    const resetUser = (userId) => {
        setLoading(true);
        let URI = t('hostResetUserUrl') + '/' + userId;
        axiosApi({
            'method': 'PUT',
            'url': URI,
        }).then((resp) => {
            if (resp.status == 200) {
                $(document).ready(function () {
                    $('#msg').html(getSuccessAlert(t('userResetSuccessAlert') + ' ' + resp.data.password));
                });
            } else {
                $(document).ready(function () {
                    $('#msg').html(getDangerAlert(t('userResetFailureAlert')));
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
                        <h2 className="heading--title">{t('userList')}</h2>
                        <br/>
                        <b id='msg'></b>
                        <div className='row text--right pb-0 mb-0'>
                            <a href={t('protectedUrl') + t('clientAddUserUrl')}
                               className="btn btn--primary" style={{width: "18%"}}><i
                                className='fa fa-plus-circle '></i> {t('addNewUser')}
                            </a>
                        </div>
                        <br/>
                        <div className="cart-table table-responsive bg-white" style={{padding: "35px"}}>
                            <table id="data-table" className="table table-bordered"
                                   style={{borderBottom: '1px solid white'}}>
                                <thead>
                                <tr className="cart-product">
                                    <th className="cart-product-item">{t('sn')}</th>
                                    <th className="cart-product-name">{t('name')}</th>
                                    <th className="cart-product-item">{t('email')}</th>
                                    <th className="cart-product-price">{t('role')}</th>
                                    <th className="cart-product-action">{t('actions')}</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    users.map((user, index) => {
                                        return (
                                            <tr className="cart-product" key={user._id}>
                                                <td className="">
                                                    {++index}
                                                </td>
                                                <td className="cart-product-name">{user.name}</td>
                                                <td className="cart-product-item">{user.username}</td>
                                                <td className="cart-product-price">{user.isAdmin ? t('admin') : t('nUser')}</td>
                                                <td className='cart-product-action' style={{width: '30%'}}>
                                                    <a href={t('protectedUrl') + t('clientUserUrl') + '/' + encode(user._id)}
                                                       className="btn btn-primary"><i
                                                        className='fa fa-edit'></i> {t('edit')}</a>
                                                    <button className="btn btn--secondary"
                                                            onClick={() => deleteUser(user._id)}><i
                                                        className='fa fa-trash'></i> {t('delete')}</button>
                                                    <button className="btn btn--primary"
                                                            onClick={() => resetUser(user._id)}><i
                                                        className='fa fa-trash'></i> {t('reset')}</button>
                                                </td>
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

export default UserListView;