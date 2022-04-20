import React from 'react';
import $ from 'jquery';
import {useTranslation} from "react-i18next";
import {init, send} from "@emailjs/browser";

const OurServices = () => {

    const [email, setEmail] = React.useState({name: '', email: '', myID: process.env.REACT_APP_MY_EMAIL, message: ''});
    const [sent, setSent] = React.useState(false);
    const [error, setError] = React.useState(false);

    let {t} = useTranslation();

    init(process.env.REACT_APP_USER_ID);

    const handleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        setEmail({...email, [name]: value});

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        var templateParams = {
            name: email.name,
            from_name: email.email,
            to_name: email.myID,
            message: email.message
        };

        send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams
        ).then(function (response) {
                $('#contact-form')[0].reset();
                setSent(true)
            },
            function (error) {
                setError(true);
            });
    };

    $(document).ready(function () {
        $('.nav li.active').removeAttr("class");
        $('#contactUs').addClass("active");
    });

    $(document).ready(function () {
        $('.nav li.active').removeAttr("class");
        $('#ourService').addClass("active");
    });
    return (
        <React.Fragment>
            <section id="page-title" className="page-title bg-overlay bg-overlay-dark">
                <div className="bg-section">
                    <img src="/assets/images/page-title/title-3.jpg" alt="Background"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                            <div className="title title-2 text-center">
                                <div className="title--content">
                                    <div className="title--heading">
                                        <h1>Our Services</h1>
                                    </div>
                                    <div className="title--desc">
                                        <p>We are Vims and we deliver at your time and expectations.</p>
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

            {/* Banner #1
            ============================================= */}
            <section id="banners1" className="interactive pt-0 pb-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="banner-panel">
                            <h6>We are helpers</h6>
                            <h3>Advice and guides</h3>
                            <p>Our payments are irreversible and reimbursement is impossible but we make sure to deliver
                                your goods to you at your comfort!</p>
                        </div>
                        {/* .boxed-panel end */}

                        <div className="banner-panel">
                            <div className="bg-section">
                                <img src="assets/images/banners/3.jpg" alt="Background"/>
                            </div>
                            <h6>Quick & smart</h6>
                            <h3>Great Solutions</h3>
                            <p>After all,we provide you with one of the best e-commerce site in the country and we have
                                built trust over the years and are proven to be worth it.!</p>
                        </div>
                        {/* .boxed-panel end */}

                        <div className="banner-panel">
                            <h6>Friendly support</h6>
                            <h3>Support in person</h3>
                            <p>You can always refer to our contact person in the contact section for any help. We will
                                always be there for you!</p>
                        </div>
                        {/* .boxed-panel end */}
                    </div>
                    {/* .row end */}
                </div>
                {/* .container end */}
            </section>
            {/* #banner1 end */}

            {/* Feature #1
            ============================================= */}
            <section id="feature1" className="feature feature-1 text-center bg-white pb-100">
                <div className="container">
                    <div className="row mb-50">
                        {/* Panel #1 */}
                        <div className="col-xs-12 col-sm-4 col-md-3">
                            <div className="feature-panel">
                                <div className="feature--icon">
                                    <i className="lnr lnr-diamond"></i>
                                </div>
                                <div className="feature--content">
                                    <h3>Quality</h3>
                                    <p>We provide you with proven quality products from all over the world irrespective
                                        of where they are made.</p>
                                </div>
                            </div>
                            {/* .feature-panel end */}
                        </div>
                        {/* .col-md-4 end */}

                        {/* Panel #2 */}
                        <div className="col-xs-12 col-sm-4 col-md-3">
                            <div className="feature-panel">
                                <div className="feature--icon">
                                    <i className="lnr lnr-heart-pulse"></i>
                                </div>
                                <div className="feature--content">
                                    <h3>Reliability</h3>
                                    <p>We are reliable and trust worthy. We care about our customers</p>
                                </div>
                            </div>
                            {/* .feature-panel end */}
                        </div>
                        {/* .col-md-4 end */}

                        {/* Panel #3 */}
                        <div className="col-xs-12 col-sm-4 col-md-3">
                            <div className="feature-panel">
                                <div className="feature--icon">
                                    <i className="lnr lnr-car"></i>
                                </div>
                                <div className="feature--content">
                                    <h3>Delivery</h3>
                                    <p>We are in contact with the best transportation agencies within the country and
                                        this makes delivery easy and simple.</p>
                                </div>
                            </div>
                            {/* .feature-panel end */}
                        </div>
                        {/* .col-md-4 end */}
                    {/* .row end */}
                    {/* Panel #4 */}
                    <div className="col-xs-12 col-sm-4 col-md-3">
                        <div className="feature-panel">
                            <div className="feature--icon">
                                <i className="lnr lnr-cart"></i>
                            </div>
                            <div className="feature--content">
                                <h3>Good Pricing</h3>
                                <p>We provide goods much more less than the normal price within the country and during
                                    our promotion period these are far less than normal</p>
                            </div>
                        </div>
                        {/* .feature-panel end */}
                    </div>
                    {/* .col-md-4 end */}

                    {/* Panel #5 */}
                    {/* .col-md-4 end */}
                </div>
                </div>
                {/* .row end */}
                {/* .container end */}
            </section>

            <section id="process1" className="process-1">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                            <div className="heading heading-2 text--center mb-50">
                                <p className="heading--subtitle">How It Works?</p>
                                <h2 className="heading--title">Our Purchase Process</h2>
                                <div className="divider--line">
                                    <i className="divider divider--1"></i>
                                    <i className="divider divider--2"></i>
                                    <i className="divider divider--3"></i>
                                    <i className="divider divider--4"></i>
                                </div>
                                <p className="heading--desc">Follow the our shop link on the menu items above to purchase a set of products available at the moment </p>
                            </div>
                        </div>
                        {/* .col-md-8 end */}
                    </div>
                    {/* .row end */}
                    <div className="row">
                        {/* Process #1 */}
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="process-panel text--center">
                                <div className="process-img">
                                    <img className="center-block" src="assets/images/process/process-1.png"
                                         alt="process image"/>
                                    <div className="process-overlay">
                                        <i className="lnr lnr-warning"></i>
                                    </div>
                                </div>
                                <div className="process-content">
                                    <h3><span className="step">01. </span>Inventory</h3>
                                    <p>Add a list of inventory to the cart!</p>
                                    <div className="process-divider">
                                        <div className="divider--line">
                                            <i className="divider divider--1"></i>
                                            <i className="divider divider--2"></i>
                                        </div>
                                    </div>
                                    {/* .process-divider end */}
                                </div>
                            </div>
                            {/* .process-panel end */}

                        </div>
                        {/* .col-md-3 end */}

                        {/* Process #2 */}
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="process-panel text--center">
                                <div className="process-img">
                                    <img src="/assets/images/process/process-2.png" alt="process image"/>
                                    <div className="process-overlay">
                                        <i className="lnr lnr-printer"></i>
                                    </div>
                                </div>
                                <div className="process-content">
                                    <h3><span className="step">02. </span>Payments</h3>
                                    <p>Check all the list on the cart and make payments</p>
                                    <div className="process-divider">
                                        <div className="divider--line">
                                            <i className="divider divider--1"></i>
                                            <i className="divider divider--2"></i>
                                        </div>
                                    </div>
                                    {/* .process-divider end */}
                                </div>
                            </div>
                            {/* .process-panel end */}
                        </div>
                        {/* .col-md-3 end */}

                        {/* Process #3 */}
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="process-panel text--center">
                                <div className="process-img">
                                    <img src="/assets/images/process/process-3.png" alt="process image"/>
                                    <div className="process-overlay">
                                        <i className="lnr lnr-layers"></i>
                                    </div>
                                </div>
                                <div className="process-content">
                                    <h3><span className="step">03. </span>Payment Methods</h3>
                                    <p>Payments are done using MTN Mobile Money an email is send to the customer</p>
                                    <div className="process-divider">
                                        <div className="divider--line">
                                            <i className="divider divider--1"></i>
                                            <i className="divider divider--2"></i>
                                        </div>
                                    </div>
                                    {/* .process-divider end */}
                                </div>
                            </div>
                            {/* .process-panel end */}
                        </div>
                        {/* .col-md-3 end */}

                        {/* Process #4 */}
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="process-panel text--center">
                                <div className="process-img">
                                    <img src="/assets/images/process/process-4.png" alt="process image"/>
                                    <div className="process-overlay">
                                        <i className="lnr lnr-chart-bars"></i>
                                    </div>
                                </div>
                                <div className="process-content">
                                    <h3><span className="step">04. </span>Delivery</h3>
                                    <p>Keep track of your email to keep track on the progress and exact delivery location of your product.</p>
                                </div>
                            </div>
                            {/* .process-panel end */}
                        </div>
                        {/* .col-md-3 end */}
                    </div>
                    {/* .row end */}
                </div>
                {/* .container end */}
            </section>
            {/* #process1 end */}

            {/* Contact #1
            ============================================= */}
            <section id="contact1" className="contact-2 bg-white pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="row mb-50">
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <div className="contact--info">
                                        <h3>Our Address</h3>
                                        <p>Bonamousadi,Akwa</p>
                                        <p>Littoral,Douala</p>
                                        <a className="link--styled" href="#">Get Directions</a>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <div className="contact--info">
                                        <h3>Our Phone</h3>
                                        <p>Office Telephone : +237675669236</p>
                                        <p>Mobile : +237673676301</p>
                                        <a className="link--styled" href="#">Call Us</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <div className="contact--info">
                                        <h3>Our Email</h3>
                                        <p>Main Email : vims.powerschool@gmail.com</p>
                                        <p>Inquiries : vimsinfo@gmail.com</p>
                                        <a className="link--styled" href="#">Send a Message</a>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6">
                                    <div className="contact--info">
                                        <h3>Our Support</h3>
                                        <p>Main Support : vimsinfo@gmail.com</p>
                                        <p>Sales : +237675669236</p>
                                        <a className="link--styled" href="#">Contact Us</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="contact-form">
                                {sent && (<div className="alert alert-success"> {t('emailSent')}</div>)}
                                {error && (<div className="alert alert-danger">{t('emailNotSent')}</div>)}
                                <form className="mb-0" onSubmit={handleSubmit} id="contact-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control" name="name" id="name"
                                                   placeholder="Name" onChange={handleChange} required/>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control" name="email" id="email"
                                                   placeholder="Email" onChange={handleChange} required/>
                                        </div>
                                        <div className="col-md-12">
                                            <textarea className="form-control" name="message" id="message"
                                                      rows="2" placeholder="Message" onChange={handleChange}
                                                      required></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <input type="submit" value="Send Message" name="submit"
                                                   className="btn btn--secondary btn--block"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* #contact1 end */}

            {/* Contact #2
            ============================================= */}
            <section id="contact2" className="contact contact-2 pb-0 pt-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12  col-sm-12  col-md-12 pr-0 pl-0">
                            {/* <div id="googleMap" style="width:100%;height:335px;">
                            </div>*/}

                        </div>
                        {/* .col-md-6 end */}
                    </div>
                </div>
            </section>
            {/* #contact2 end */}

            {/* Clients Carousel Section
            ============================================= */}
            <section id="clients" className="clients clients-carousel bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="carousel carousel-dots" data-slide="6" data-slide-res="2"
                                 data-autoplay="false" data-nav="false" data-dots="false" data-space="30"
                                 data-loop="true" data-speed="800">
                                {/* Client #1 */}
                                <div className="client">
                                    <img className="center-block" src="/assets/images/clients/1.png" alt="client"/>
                                </div>

                                {/* Client #2 */}
                                <div className="client">
                                    <img className="center-block" src="/assets/images/clients/2.png" alt="client"/>
                                </div>

                                {/* Client #3 */}
                                <div className="client">
                                    <img className="center-block" src="/assets/images/clients/3.png" alt="client"/>
                                </div>

                                {/* Client #4 */}
                                <div className="client">
                                    <img className="center-block" src="/assets/images/clients/4.png" alt="client"/>
                                </div>

                                {/* Client #5 */}
                                <div className="client">
                                    <img className="center-block" src="/assets/images/clients/5.png" alt="client"/>
                                </div>

                                {/* Client #6 */}
                                <div className="client">
                                    <img className="center-block" src="/assets/images/clients/6.png" alt="client"/>
                                </div>
                            </div>
                        </div>
                        {/* .col-md-12 end */}
                    </div>
                    {/* .row end */}
                </div>
                {/* .container end */}
            </section>
        </React.Fragment>
    )
}

export default OurServices;