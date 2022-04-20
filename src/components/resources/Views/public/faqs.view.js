import React from 'react';
import {useTranslation} from "react-i18next";
import "../../lang/i18n";
import $ from 'jquery';

const FAQSView = () => {

    let {t} = useTranslation();

    $(document).ready(function () {
        $('.nav li.active').removeAttr("class");
        $('#faqs').addClass("active");
    });
    return (
        <React.Fragment>
            <section id="page-title" className="page-title bg-overlay bg-overlay-dark">
                <div className="bg-section">
                    <img src="assets/images/page-title/title-30.jpg" alt="Background"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                            <div className="title title-2 text-center">
                                <div className="title--content">
                                    <div className="title--heading">
                                        <h1>FAQs</h1>
                                    </div>
                                    <div className="title--desc">
                                        <p>We love what we do and we do it with passion. We value you and we are concern about your experience while using our products.</p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            {/* .title end */}
                        </div>
                        {/* .col-md-12 end */}
                    </div>
                    {/* .row end */}
                </div>
                {/* .container end */}
            </section>
            {/* #page-title end */}

            {/* Accordion #1
            ============================================= */}
            <section id="faqs" className="bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-9">
                            <div className="accordion accordion-1" id="accordion01">

                                {/* Panel 02 */}
                                <div className="panel">
                                    <div className="panel--heading">
                                        <a className="accordion-toggle collapsed" data-toggle="collapse"
                                           data-parent="#accordion01" href="#collapse01-2">Do I have to commit to a
                                            contract?</a>
                                    </div>
                                    <div id="collapse01-2" className="panel--body panel-collapse collapse">
                                        No
                                    </div>
                                </div>

                                {/* Panel 03 */}
                                <div className="panel">
                                    <div className="panel--heading">
                                        <a className="accordion-toggle collapsed" data-toggle="collapse"
                                           data-parent="#accordion01" href="#collapse01-3">What if i miss place my unique code?</a>
                                    </div>
                                    <div id="collapse01-3" className="panel--body panel-collapse collapse">
                                        We are sorry,you can't get back your products without that code
                                    </div>
                                </div>

                                {/* Panel 04 */}
                                <div className="panel">
                                    <div className="panel--heading">
                                        <a className="accordion-toggle" data-toggle="collapse"
                                           data-parent="#accordion01" href="#collapse01-4">What if I don't get my goods</a>
                                    </div>
                                    <div id="collapse01-4" className="panel--body panel-collapse collapse in">
                                        To confirm that you actually paid for goods on our platform,we send you a unique Code to your email after every payment is done. So after 10 business days you can  write to us through the life chat  presenting the code.I f valid we will resend the good(s)
                                    </div>
                                </div>


                                {/* Panel 07 */}
                                <div className="panel">
                                    <div className="panel--heading">
                                        <a className="accordion-toggle collapsed" data-toggle="collapse"
                                           data-parent="#accordion01" href="#collapse01-7">Payment does not deduct my account</a>
                                    </div>
                                    <div id="collapse01-7" className="panel--body panel-collapse collapse">
                                        At the moment,we use a sandbox to simulate the payments,once goods arrive we will switch to the live payments again. This is to avoid you making payments for goods that are not available at the moment
                                    </div>
                                </div>

                                {/* Panel 08 */}
                                <div className="panel">
                                    <div className="panel--heading">
                                        <a className="accordion-toggle collapsed" data-toggle="collapse"
                                           data-parent="#accordion01" href="#collapse01-8">What Payment Methods Are
                                            Available?</a>
                                    </div>
                                    <div id="collapse01-8" className="panel--body panel-collapse collapse">
                                        For now we use MTN mobile money but later we will incorporate bank payments and other payment channels like orange money
                                    </div>
                                </div>

                        </div>
                        </div>
                        {/* .col-md-9 end */}
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            {/* Search
            ===
            === === === === === === === === === === === === === === */}
                            <div className="widget widget-search">
                                <div className="widget--content">
                                    <form className="form-search">
                                        <div className="input-group">
                                            <input type="text" className="form-control"
                                                   placeholder="Type Your Search Words"/>
                                            <span className="input-group-btn">
					<button className="btn" type="button"><i className="fa fa-search"></i></button>
				</span>
                                        </div>
                                        {/* /input-group */}
                                    </form>
                                </div>
                            </div>
                            {/* .widget-search end */}


                            {/* Info
                            ===
                            === === === === === === === === === === === === === === */}
                            <div className="widget widget-info">
                                <div className="widget--content">
                                    <div className="info--title">
                                        Need Help!
                                    </div>
                                    <div className="info--content">
                                        Just contact our support team for more details.Better still you may write to us through the live chat!
                                    </div>
                                    <a className="btn btn--white btn--bordered" href={t('contactUsUrl')}>{t('contactUs')}</a>
                                </div>
                            </div>
                            {/* .widget-info end */}            </div>
                        {/* .col-md-3 end */}
                    </div>
                    {/* .row end */}
                </div>
            </section>
        </React.Fragment>
    )
}

export default FAQSView;