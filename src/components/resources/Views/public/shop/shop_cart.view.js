import React from 'react';
import {useCart} from "../../../../Providers/CartProvider";
import $ from "jquery";
import {useTranslation} from "react-i18next";
import '../../../lang/i18n';


const ShopCartView = () => {

    let {t} = useTranslation();
    let cartProvider = useCart();
    let cartTotal = cartProvider.cartTotal();

    const [preCart, setPreCart] = React.useState(cartProvider.cart);

    document.body.classList.remove('side-header');

    const removeProduct = (e,id) => {
        e.preventDefault();
        let ID = '#cartTR-' + id;
        $(ID).remove();
        let newCart = preCart.filter((crt) => crt.p_id !== id);
        setPreCart(newCart);
    }


    const increaseQuantity = (e,pId,pQuant) => {
        e.preventDefault();
        let ID = '#quantity-' +pId;
        let value = $(ID).val();
        if(value> pQuant) {
            return;
        }
        let newCart = preCart.map((item) => {
            if (item.p_id == pId) {
                let quantity = parseInt(value)+1;
                return {...item, ['quantity']: quantity};
            }
            return item;
        });
        setPreCart(newCart);
    }

    const decreaseQuantity = (e,pId) => {
        e.preventDefault();
        let ID = '#quantity-' +pId;
        let value = $(ID).val();
        if(value==1){
            return;
        }
        let newCart = preCart.map((item) => {
            if (item.p_id == pId) {
                let quantity = parseInt(value)-1;
                return {...item, ['quantity']: quantity};
            }
            return item;
        });
        setPreCart(newCart);
    }

    const updateCart = (e) => {
        e.preventDefault();
        cartProvider.resetCart(preCart);
    }

    return (
        <React.Fragment>
            <section id="page-title" className="page-title">
                <div className="container-fluid bg-overlay bg-overlay-dark">
                    <div className="bg-section">
                        <img src="assets/images/page-title/title-20.jpg" alt="Background"/>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="title title-1 text--center">
                                <div className="title--content">
                                    <div className="title--heading">
                                        <h1>{t('shoppingCart')}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            {/* Shop Cart
            ============================================= */}
            <section id="shopcart" className="shop shop-cart bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="cart-table table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr className="cart-product">
                                        <th className="cart-product-item">{t('product')}</th>
                                        <th className="cart-product-price">{t('price')}</th>
                                        <th className="cart-product-quantity">{t('quantity')}</th>
                                        <th className="cart-product-total">{t('total')}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        preCart.map((item) => {

                                            return (
                                                <tr className="cart-product" key={item.p_id} id={item.p_id}>
                                                    <td className="cart-product-item">
                                                        <div className="cart-product-remove"  onClick={(e) => removeProduct(e,item.p_id)}>
                                                            <i className="fa fa-close"></i>
                                                        </div>
                                                        <div className="cart-product-img">
                                                            <img src={item.image} alt="product" style={{width:"60px",height:"40px"}}/>
                                                        </div>
                                                        <div className="cart-product-name">
                                                            <h6>{item.productName}</h6>
                                                        </div>
                                                    </td>
                                                    <td className="cart-product-price">{item.price}</td>
                                                    <td className="cart-product-quantity">
                                                        <div className="product-quantity">
                                                            <a href="#" onClick={(e) =>decreaseQuantity(e,item.p_id)}><i className="fa fa-minus"></i></a>
                                                            <input type="text" value={item.quantity} id={"quantity-" + item.p_id} readOnly/>
                                                            <a href="#" onClick={(e) =>increaseQuantity(e,item.p_id,item.quantity)}><i className="fa fa-plus"></i></a>
                                                        </div>
                                                    </td>
                                                    <td className="cart-product-total">${(item.price * item.quantity)}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    {
                                        preCart.length != 0 ? (
                                            <tr className="cart-product-action">
                                                <td colSpan="4">
                                                    <div className="row clearfix">
                                                        <div className="col-xs-12 col-sm-6 col-md-6">
                                                            <form className="form-inline">
                                                                <input type="text" className="form-control" id="coupon"
                                                                       placeholder="Coupon Code"/>
                                                                <button type="submit"
                                                                        className="btn btn--primary">{t('applyCoupon')}
                                                                </button>
                                                            </form>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-6 col-md-6 text-right">
                                                            <a className="btn btn--secondary" href="#"
                                                               onClick={updateCart}>{t('updateCart')}</a>
                                                            <a className="btn btn--primary" href={t('clientCheckoutUrl')}>{t('checkout')}</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : ('')
                                    }
                                    </tbody>
                                </table>
                                {
                                    preCart.length == 0 && (<div className="alerts">
                                        <div className="alert-icon">
                                            <i className="fa fa-check-circle"></i>
                                        </div>
                                        <div className="alert-content">
                                            <h4>{t('productNotFound')}</h4>
                                            <p>{t('cartNotFoundDesc')}</p>
                                        </div>
                                    </div>)
                                }
                            </div>

                        </div>

                        <div className="col-xs-12 col-sm-12  col-md-6 mb-30-xs mb-30-sm">
                            {/*<div className="cart-shiping">*/}
                            {/*<h6>Calculate Shipping :</h6>*/}
                            {/*<div className="row">*/}
                            {/*    <form>*/}
                            {/*        <div className="col-xs-12 col-md-12">*/}
                            {/*            <i className="fa fa-angle-down"></i>*/}
                            {/*            <select className="form-control">*/}
                            {/*                <option value="USA">USA</option>*/}
                            {/*                <option value="AFG">Afghanistan</option>*/}
                            {/*                <option value="ALA">Åland Islands</option>*/}
                            {/*                <option value="ALB">Albania</option>*/}
                            {/*                <option value="DZA">Algeria</option>*/}
                            {/*                <option value="ASM">American Samoa</option>*/}
                            {/*                <option value="AND">Andorra</option>*/}
                            {/*                <option value="AGO">Angola</option>*/}
                            {/*                <option value="AIA">Anguilla</option>*/}
                            {/*                <option value="ATA">Antarctica</option>*/}
                            {/*                <option value="ATG">Antigua and Barbuda</option>*/}
                            {/*                <option value="ARG">Argentina</option>*/}
                            {/*                <option value="ARM">Armenia</option>*/}
                            {/*                <option value="ABW">Aruba</option>*/}
                            {/*                <option value="AUS">Australia</option>*/}
                            {/*                <option value="AUT">Austria</option>*/}
                            {/*                <option value="AZE">Azerbaijan</option>*/}
                            {/*                <option value="BHS">Bahamas</option>*/}
                            {/*                <option value="BHR">Bahrain</option>*/}
                            {/*                <option value="BGD">Bangladesh</option>*/}
                            {/*                <option value="BRB">Barbados</option>*/}
                            {/*                <option value="BLR">Belarus</option>*/}
                            {/*                <option value="BEL">Belgium</option>*/}
                            {/*                <option value="BLZ">Belize</option>*/}
                            {/*                <option value="BEN">Benin</option>*/}
                            {/*                <option value="BMU">Bermuda</option>*/}
                            {/*                <option value="BTN">Bhutan</option>*/}
                            {/*                <option value="BOL">Bolivia, Plurinational State of</option>*/}
                            {/*                <option value="BES">Bonaire, Sint Eustatius and Saba</option>*/}
                            {/*                <option value="BIH">Bosnia and Herzegovina</option>*/}
                            {/*                <option value="BWA">Botswana</option>*/}
                            {/*                <option value="BVT">Bouvet Island</option>*/}
                            {/*                <option value="BRA">Brazil</option>*/}
                            {/*                <option value="IOT">British Indian Ocean Territory</option>*/}
                            {/*                <option value="BRN">Brunei Darussalam</option>*/}
                            {/*                <option value="BGR">Bulgaria</option>*/}
                            {/*                <option value="BFA">Burkina Faso</option>*/}
                            {/*                <option value="BDI">Burundi</option>*/}
                            {/*                <option value="KHM">Cambodia</option>*/}
                            {/*                <option value="CMR">Cameroon</option>*/}
                            {/*                <option value="CAN">Canada</option>*/}
                            {/*                <option value="CPV">Cape Verde</option>*/}
                            {/*                <option value="CYM">Cayman Islands</option>*/}
                            {/*                <option value="CAF">Central African Republic</option>*/}
                            {/*                <option value="TCD">Chad</option>*/}
                            {/*                <option value="CHL">Chile</option>*/}
                            {/*                <option value="CHN">China</option>*/}
                            {/*                <option value="CXR">Christmas Island</option>*/}
                            {/*                <option value="CCK">Cocos (Keeling) Islands</option>*/}
                            {/*                <option value="COL">Colombia</option>*/}
                            {/*                <option value="COM">Comoros</option>*/}
                            {/*                <option value="COG">Congo</option>*/}
                            {/*                <option value="COD">Congo, the Democratic Republic of the</option>*/}
                            {/*                <option value="COK">Cook Islands</option>*/}
                            {/*                <option value="CRI">Costa Rica</option>*/}
                            {/*                <option value="CIV">Côte d'Ivoire</option>*/}
                            {/*                <option value="HRV">Croatia</option>*/}
                            {/*                <option value="CUB">Cuba</option>*/}
                            {/*                <option value="CUW">Curaçao</option>*/}
                            {/*                <option value="CYP">Cyprus</option>*/}
                            {/*                <option value="CZE">Czech Republic</option>*/}
                            {/*                <option value="DNK">Denmark</option>*/}
                            {/*                <option value="DJI">Djibouti</option>*/}
                            {/*                <option value="DMA">Dominica</option>*/}
                            {/*                <option value="DOM">Dominican Republic</option>*/}
                            {/*                <option value="ECU">Ecuador</option>*/}
                            {/*                <option value="EGY">Egypt</option>*/}
                            {/*                <option value="SLV">El Salvador</option>*/}
                            {/*                <option value="GNQ">Equatorial Guinea</option>*/}
                            {/*                <option value="ERI">Eritrea</option>*/}
                            {/*                <option value="EST">Estonia</option>*/}
                            {/*                <option value="ETH">Ethiopia</option>*/}
                            {/*                <option value="FLK">Falkland Islands (Malvinas)</option>*/}
                            {/*                <option value="FRO">Faroe Islands</option>*/}
                            {/*                <option value="FJI">Fiji</option>*/}
                            {/*                <option value="FIN">Finland</option>*/}
                            {/*                <option value="FRA">France</option>*/}
                            {/*                <option value="GUF">French Guiana</option>*/}
                            {/*                <option value="PYF">French Polynesia</option>*/}
                            {/*                <option value="ATF">French Southern Territories</option>*/}
                            {/*                <option value="GAB">Gabon</option>*/}
                            {/*                <option value="GMB">Gambia</option>*/}
                            {/*                <option value="GEO">Georgia</option>*/}
                            {/*                <option value="DEU">Germany</option>*/}
                            {/*                <option value="GHA">Ghana</option>*/}
                            {/*                <option value="GIB">Gibraltar</option>*/}
                            {/*                <option value="GRC">Greece</option>*/}
                            {/*                <option value="GRL">Greenland</option>*/}
                            {/*                <option value="GRD">Grenada</option>*/}
                            {/*                <option value="GLP">Guadeloupe</option>*/}
                            {/*                <option value="GUM">Guam</option>*/}
                            {/*                <option value="GTM">Guatemala</option>*/}
                            {/*                <option value="GGY">Guernsey</option>*/}
                            {/*                <option value="GIN">Guinea</option>*/}
                            {/*                <option value="GNB">Guinea-Bissau</option>*/}
                            {/*                <option value="GUY">Guyana</option>*/}
                            {/*                <option value="HTI">Haiti</option>*/}
                            {/*                <option value="HMD">Heard Island and McDonald Islands</option>*/}
                            {/*                <option value="VAT">Holy See (Vatican City State)</option>*/}
                            {/*                <option value="HND">Honduras</option>*/}
                            {/*                <option value="HKG">Hong Kong</option>*/}
                            {/*                <option value="HUN">Hungary</option>*/}
                            {/*                <option value="ISL">Iceland</option>*/}
                            {/*                <option value="IND">India</option>*/}
                            {/*                <option value="IDN">Indonesia</option>*/}
                            {/*                <option value="IRN">Iran, Islamic Republic of</option>*/}
                            {/*                <option value="IRQ">Iraq</option>*/}
                            {/*                <option value="IRL">Ireland</option>*/}
                            {/*                <option value="IMN">Isle of Man</option>*/}
                            {/*                <option value="ISR">Israel</option>*/}
                            {/*                <option value="ITA">Italy</option>*/}
                            {/*                <option value="JAM">Jamaica</option>*/}
                            {/*                <option value="JPN">Japan</option>*/}
                            {/*                <option value="JEY">Jersey</option>*/}
                            {/*                <option value="JOR">Jordan</option>*/}
                            {/*                <option value="KAZ">Kazakhstan</option>*/}
                            {/*                <option value="KEN">Kenya</option>*/}
                            {/*                <option value="KIR">Kiribati</option>*/}
                            {/*                <option value="PRK">Korea, Democratic People's Republic of</option>*/}
                            {/*                <option value="KOR">Korea, Republic of</option>*/}
                            {/*                <option value="KWT">Kuwait</option>*/}
                            {/*                <option value="KGZ">Kyrgyzstan</option>*/}
                            {/*                <option value="LAO">Lao People's Democratic Republic</option>*/}
                            {/*                <option value="LVA">Latvia</option>*/}
                            {/*                <option value="LBN">Lebanon</option>*/}
                            {/*                <option value="LSO">Lesotho</option>*/}
                            {/*                <option value="LBR">Liberia</option>*/}
                            {/*                <option value="LBY">Libya</option>*/}
                            {/*                <option value="LIE">Liechtenstein</option>*/}
                            {/*                <option value="LTU">Lithuania</option>*/}
                            {/*                <option value="LUX">Luxembourg</option>*/}
                            {/*                <option value="MAC">Macao</option>*/}
                            {/*                <option value="MKD">Macedonia, the former Yugoslav Republic of</option>*/}
                            {/*                <option value="MDG">Madagascar</option>*/}
                            {/*                <option value="MWI">Malawi</option>*/}
                            {/*                <option value="MYS">Malaysia</option>*/}
                            {/*                <option value="MDV">Maldives</option>*/}
                            {/*                <option value="MLI">Mali</option>*/}
                            {/*                <option value="MLT">Malta</option>*/}
                            {/*                <option value="MHL">Marshall Islands</option>*/}
                            {/*                <option value="MTQ">Martinique</option>*/}
                            {/*                <option value="MRT">Mauritania</option>*/}
                            {/*                <option value="MUS">Mauritius</option>*/}
                            {/*                <option value="MYT">Mayotte</option>*/}
                            {/*                <option value="MEX">Mexico</option>*/}
                            {/*                <option value="FSM">Micronesia, Federated States of</option>*/}
                            {/*                <option value="MDA">Moldova, Republic of</option>*/}
                            {/*                <option value="MCO">Monaco</option>*/}
                            {/*                <option value="MNG">Mongolia</option>*/}
                            {/*                <option value="MNE">Montenegro</option>*/}
                            {/*                <option value="MSR">Montserrat</option>*/}
                            {/*                <option value="MAR">Morocco</option>*/}
                            {/*                <option value="MOZ">Mozambique</option>*/}
                            {/*                <option value="MMR">Myanmar</option>*/}
                            {/*                <option value="NAM">Namibia</option>*/}
                            {/*                <option value="NRU">Nauru</option>*/}
                            {/*                <option value="NPL">Nepal</option>*/}
                            {/*                <option value="NLD">Netherlands</option>*/}
                            {/*                <option value="NCL">New Caledonia</option>*/}
                            {/*                <option value="NZL">New Zealand</option>*/}
                            {/*                <option value="NIC">Nicaragua</option>*/}
                            {/*                <option value="NER">Niger</option>*/}
                            {/*                <option value="NGA">Nigeria</option>*/}
                            {/*                <option value="NIU">Niue</option>*/}
                            {/*                <option value="NFK">Norfolk Island</option>*/}
                            {/*                <option value="MNP">Northern Mariana Islands</option>*/}
                            {/*                <option value="NOR">Norway</option>*/}
                            {/*                <option value="OMN">Oman</option>*/}
                            {/*                <option value="PAK">Pakistan</option>*/}
                            {/*                <option value="PLW">Palau</option>*/}
                            {/*                <option value="PSE">Palestinian Territory, Occupied</option>*/}
                            {/*                <option value="PAN">Panama</option>*/}
                            {/*                <option value="PNG">Papua New Guinea</option>*/}
                            {/*                <option value="PRY">Paraguay</option>*/}
                            {/*                <option value="PER">Peru</option>*/}
                            {/*                <option value="PHL">Philippines</option>*/}
                            {/*                <option value="PCN">Pitcairn</option>*/}
                            {/*                <option value="POL">Poland</option>*/}
                            {/*                <option value="PRT">Portugal</option>*/}
                            {/*                <option value="PRI">Puerto Rico</option>*/}
                            {/*                <option value="QAT">Qatar</option>*/}
                            {/*                <option value="REU">Réunion</option>*/}
                            {/*                <option value="ROU">Romania</option>*/}
                            {/*                <option value="RUS">Russian Federation</option>*/}
                            {/*                <option value="RWA">Rwanda</option>*/}
                            {/*                <option value="BLM">Saint Barthélemy</option>*/}
                            {/*                <option value="SHN">Saint Helena, Ascension and Tristan da Cunha*/}
                            {/*                </option>*/}
                            {/*                <option value="KNA">Saint Kitts and Nevis</option>*/}
                            {/*                <option value="LCA">Saint Lucia</option>*/}
                            {/*                <option value="MAF">Saint Martin (French part)</option>*/}
                            {/*                <option value="SPM">Saint Pierre and Miquelon</option>*/}
                            {/*                <option value="VCT">Saint Vincent and the Grenadines</option>*/}
                            {/*                <option value="WSM">Samoa</option>*/}
                            {/*                <option value="SMR">San Marino</option>*/}
                            {/*                <option value="STP">Sao Tome and Principe</option>*/}
                            {/*                <option value="SAU">Saudi Arabia</option>*/}
                            {/*                <option value="SEN">Senegal</option>*/}
                            {/*                <option value="SRB">Serbia</option>*/}
                            {/*                <option value="SYC">Seychelles</option>*/}
                            {/*                <option value="SLE">Sierra Leone</option>*/}
                            {/*                <option value="SGP">Singapore</option>*/}
                            {/*                <option value="SXM">Sint Maarten (Dutch part)</option>*/}
                            {/*                <option value="SVK">Slovakia</option>*/}
                            {/*                <option value="SVN">Slovenia</option>*/}
                            {/*                <option value="SLB">Solomon Islands</option>*/}
                            {/*                <option value="SOM">Somalia</option>*/}
                            {/*                <option value="ZAF">South Africa</option>*/}
                            {/*                <option value="SGS">South Georgia and the South Sandwich Islands*/}
                            {/*                </option>*/}
                            {/*                <option value="SSD">South Sudan</option>*/}
                            {/*                <option value="ESP">Spain</option>*/}
                            {/*                <option value="LKA">Sri Lanka</option>*/}
                            {/*                <option value="SDN">Sudan</option>*/}
                            {/*                <option value="SUR">Suriname</option>*/}
                            {/*                <option value="SJM">Svalbard and Jan Mayen</option>*/}
                            {/*                <option value="SWZ">Swaziland</option>*/}
                            {/*                <option value="SWE">Sweden</option>*/}
                            {/*                <option value="CHE">Switzerland</option>*/}
                            {/*                <option value="SYR">Syrian Arab Republic</option>*/}
                            {/*                <option value="TWN">Taiwan, Province of China</option>*/}
                            {/*                <option value="TJK">Tajikistan</option>*/}
                            {/*                <option value="TZA">Tanzania, United Republic of</option>*/}
                            {/*                <option value="THA">Thailand</option>*/}
                            {/*                <option value="TLS">Timor-Leste</option>*/}
                            {/*                <option value="TGO">Togo</option>*/}
                            {/*                <option value="TKL">Tokelau</option>*/}
                            {/*                <option value="TON">Tonga</option>*/}
                            {/*                <option value="TTO">Trinidad and Tobago</option>*/}
                            {/*                <option value="TUN">Tunisia</option>*/}
                            {/*                <option value="TUR">Turkey</option>*/}
                            {/*                <option value="TKM">Turkmenistan</option>*/}
                            {/*                <option value="TCA">Turks and Caicos Islands</option>*/}
                            {/*                <option value="TUV">Tuvalu</option>*/}
                            {/*                <option value="UGA">Uganda</option>*/}
                            {/*                <option value="UKR">Ukraine</option>*/}
                            {/*                <option value="ARE">United Arab Emirates</option>*/}
                            {/*                <option value="GBR">United Kingdom</option>*/}
                            {/*                <option value="USA">United States</option>*/}
                            {/*                <option value="UMI">United States Minor Outlying Islands</option>*/}
                            {/*                <option value="URY">Uruguay</option>*/}
                            {/*                <option value="UZB">Uzbekistan</option>*/}
                            {/*                <option value="VUT">Vanuatu</option>*/}
                            {/*                <option value="VEN">Venezuela, Bolivarian Republic of</option>*/}
                            {/*                <option value="VNM">Viet Nam</option>*/}
                            {/*                <option value="VGB">Virgin Islands, British</option>*/}
                            {/*                <option value="VIR">Virgin Islands, U.S.</option>*/}
                            {/*                <option value="WLF">Wallis and Futuna</option>*/}
                            {/*                <option value="ESH">Western Sahara</option>*/}
                            {/*                <option value="YEM">Yemen</option>*/}
                            {/*                <option value="ZMB">Zambia</option>*/}
                            {/*                <option value="ZWE">Zimbabwe</option>*/}
                            {/*            </select>*/}
                            {/*        </div>*/}
                            {/*        <div className="col-xs-12 col-md-6">*/}
                            {/*            <i className="fa fa-angle-down"></i>*/}
                            {/*            <select className="form-control">*/}
                            {/*                <option value="default">State/ Country</option>*/}
                            {/*                <option value="AL">Alabama</option>*/}
                            {/*                <option value="AK">Alaska</option>*/}
                            {/*                <option value="AZ">Arizona</option>*/}
                            {/*                <option value="AR">Arkansas</option>*/}
                            {/*                <option value="CA">California</option>*/}
                            {/*                <option value="CO">Colorado</option>*/}
                            {/*                <option value="CT">Connecticut</option>*/}
                            {/*                <option value="DE">Delaware</option>*/}
                            {/*                <option value="DC">District Of Columbia</option>*/}
                            {/*                <option value="FL">Florida</option>*/}
                            {/*                <option value="GA">Georgia</option>*/}
                            {/*                <option value="HI">Hawaii</option>*/}
                            {/*                <option value="ID">Idaho</option>*/}
                            {/*                <option value="IL">Illinois</option>*/}
                            {/*                <option value="IN">Indiana</option>*/}
                            {/*                <option value="IA">Iowa</option>*/}
                            {/*                <option value="KS">Kansas</option>*/}
                            {/*                <option value="KY">Kentucky</option>*/}
                            {/*                <option value="LA">Louisiana</option>*/}
                            {/*                <option value="ME">Maine</option>*/}
                            {/*                <option value="MD">Maryland</option>*/}
                            {/*                <option value="MA">Massachusetts</option>*/}
                            {/*                <option value="MI">Michigan</option>*/}
                            {/*                <option value="MN">Minnesota</option>*/}
                            {/*                <option value="MS">Mississippi</option>*/}
                            {/*                <option value="MO">Missouri</option>*/}
                            {/*                <option value="MT">Montana</option>*/}
                            {/*                <option value="NE">Nebraska</option>*/}
                            {/*                <option value="NV">Nevada</option>*/}
                            {/*                <option value="NH">New Hampshire</option>*/}
                            {/*                <option value="NJ">New Jersey</option>*/}
                            {/*                <option value="NM">New Mexico</option>*/}
                            {/*                <option value="NY">New York</option>*/}
                            {/*                <option value="NC">North Carolina</option>*/}
                            {/*                <option value="ND">North Dakota</option>*/}
                            {/*                <option value="OH">Ohio</option>*/}
                            {/*                <option value="OK">Oklahoma</option>*/}
                            {/*                <option value="OR">Oregon</option>*/}
                            {/*                <option value="PA">Pennsylvania</option>*/}
                            {/*                <option value="RI">Rhode Island</option>*/}
                            {/*                <option value="SC">South Carolina</option>*/}
                            {/*                <option value="SD">South Dakota</option>*/}
                            {/*                <option value="TN">Tennessee</option>*/}
                            {/*                <option value="TX">Texas</option>*/}
                            {/*                <option value="UT">Utah</option>*/}
                            {/*                <option value="VT">Vermont</option>*/}
                            {/*                <option value="VA">Virginia</option>*/}
                            {/*                <option value="WA">Washington</option>*/}
                            {/*                <option value="WV">West Virginia</option>*/}
                            {/*                <option value="WI">Wisconsin</option>*/}
                            {/*                <option value="WY">Wyoming</option>*/}
                            {/*            </select>*/}
                            {/*        </div>*/}
                            {/*        <div className="col-md-6">*/}
                            {/*            <input type="text" className="form-control" id="postal-code"*/}
                            {/*                   placeholder="Postal Code / ZIP" />*/}
                            {/*        </div>*/}
                            {/*        <div className="col-md-12">*/}
                            {/*            <button type="submit"*/}
                            {/*                    className="btn btn--primary pull-right pull-none-xs">update total*/}
                            {/*            </button>*/}
                            {/*        </div>*/}
                            {/*    </form>*/}
                            {/*</div>*/}
                            {/*</div>*/}

                        </div>
                        <div className="col-xs-12 col-sm-12  col-md-6">
                            <div className="cart-total-amount">
                                <h6>Cart Totals :</h6>
                                <ul className="list-unstyled">
                                    <li>Cart Subtotal :<span className="pull-right text-right">${cartTotal}</span></li>
                                    {/*<li>Shipping :<span className="pull-right text-right">Free Shipping</span></li>*/}
                                    <li>Order Total :<span className="pull-right text-right">${cartTotal}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </React.Fragment>
    );
}
export default ShopCartView;