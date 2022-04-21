import React from "react";
import $ from  "jquery";
import {useTranslation} from "react-i18next";


const AboutUsView = () => {

    $(document).ready(function () {
        $('.nav li.active').removeAttr("class");
        $('#aboutUs').addClass("active");
    });

    const {t} = useTranslation();

    return(
        <React.Fragment>

            {/* Page Title #1
            ============================================= */}
            <section id="page-title" className="page-title bg-overlay bg-overlay-dark">
                <div className="bg-section" >
                    <img src="assets/images/page-title/title-2.jpg" alt="Background"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="title title-1 text-center">
                                <div className="title--content">
                                    <div className="title--heading">
                                        <h1>About Us</h1>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            {/*    <ol className="breadcrumb">
                                    <li><a href="index-2.html">Home</a></li>
                                    <li><a href="index-2.html">pages</a></li>
                                    <li className="active">about us</li>
                                </ol>*/}
                            </div>{/* .title end */}
                        </div>{/* .col-md-12 end */}
                    </div>{/* .row end */}
                </div>{/* .container end */}
            </section>{/* #page-title end */}

            {/* Number Process #1
            ============================================= */}
            <section id="number1" className="number number-1 bg-white pb-100">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                            <div className="text--center heading heading--2 mb-40">
                                <p className="heading--subtitle">We are Vims!</p>
                                <h2 className="heading--title">Best Solutions</h2>
                                <div className="divider--line">
                                    <i className="divider divider--1"></i>
                                    <i className="divider divider--2"></i>
                                    <i className="divider divider--3"></i>
                                    <i className="divider divider--4"></i>
                                </div>
                                <p className="heading--desc">We are Vims, we provide you with the best e-commerce solutions in cameroon.We are always there for you.</p>
                            </div>
                        </div>{/* .col-md-8 end */}
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="number-panel">
                                <div className="number--img">
                                    <img src="assets/images/banners/4.jpg" alt="image"/>
                                </div>
                                <div className="number--content">
                                    <h3><span>01.</span> Advice and guides</h3>
                                    <p>Our payments are irreversible and reimbursement is impossible but we make sure to deliver your goods to you at your comfort!</p>
                                </div>
                            </div>{/* .number-panel end */}
                        </div>{/* .col-md-12 end */}
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="number-panel">
                                <div className="number--img">
                                    <img src="assets/images/banners/5.jpg" alt="image"/>
                                </div>
                                <div className="number--content">
                                    <h3><span>02.</span> Great Solutions</h3>
                                    <p>After all,we provide you with one of the best e-commerce site in the country and we have built trust over the years and are proven to be worth it.!</p>
                                </div>
                            </div>{/* .number-panel end */}
                        </div>{/* .col-md-12 end */}
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="number-panel">
                                <div className="number--img">
                                    <img src="assets/images/banners/6.jpg" alt="image"/>
                                </div>
                                <div className="number--content">
                                    <h3><span>03.</span> Support in person</h3>
                                    <p> You can always refer to our contact person in the contact section for any help. We will always be there for you!</p>
                                </div>
                            </div>{/* .number-panel end */}
                        </div>{/* .col-md-12 end */}
                    </div>{/* .row end */}
                </div>{/* .container end */}
            </section>{/* #number1*/}
            {/* Banner #2
            ============================================= */}
            <section id="banner2" className="banner banner-2 skills skills-2 pt-0 pb-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 pr-0 pl-0">
                            <div className="col-img  bg-overlay bg-overlay-theme">
                                <div className="bg-section">
                                    <img src= "assets/images/banners/2.jpg" alt="Background"/>
                                </div>
                                <div className="row mb-50 pt-100">
                                    {/* Panel #1 */}
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <div className="feature-panel">
                                            <div className="feature--icon">
                                                <i className="lnr lnr-tablet"></i>
                                            </div>
                                            <div className="feature--content">
                                                <h3>Reliable</h3>
                                                <p>We are vims,we are reliable and provide you with the best qualities!</p>
                                            </div>
                                        </div>{/* .feature-panel end */}
                                    </div>{/* .col-md-4 end */}

                                    {/* Panel #2 */}
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <div className="feature-panel">
                                            <div className="feature--icon">
                                                <i className="lnr lnr-bullhorn"></i>
                                            </div>
                                            <div className="feature--content">
                                                <h3>Quality</h3>
                                                <p>We are best in what we do and we have more than 5 years experience any customer's complains</p>
                                            </div>
                                        </div>{/* .feature-panel end */}
                                    </div>{/* .col-md-4 end */}

                                </div>{/* .row end */}
                                <div className="row">
                                    {/* Panel #3 */}
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <div className="feature-panel">
                                            <div className="feature--icon">
                                                <i className="lnr lnr-cog"></i>
                                            </div>
                                            <div className="feature--content">
                                                <h3>Delivery</h3>
                                                <p>We are in partnership with the best transport systems within the country.So delivery is made much easier</p>
                                            </div>
                                        </div>{/* .feature-panel end */}
                                    </div>{/* .col-md-4 end */}

                                    {/* Panel #4 */}
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <div className="feature-panel">
                                            <div className="feature--icon">
                                                <i className="lnr lnr-rocket"></i>
                                            </div>
                                            <div className="feature--content">
                                                <h3>Priority</h3>
                                                <p>Your request is our priority and we are because you are. Our reason of existence is to make sure you our comfortable</p>
                                            </div>
                                        </div>{/* .feature-panel end */}
                                    </div>{/* .col-md-4 end */}
                                </div>{/* .row end */}
                            </div>
                        </div>{/* .col-md-6 end*/}
                        <div className="col-xs-12 col-sm-12 col-md-6 col-content pl-100">
                            <div className="heading heading-8 mb-50">
                                <h2 className="heading--title">Order &amp; Receive,<br/>We make it so simple!</h2>
                                <p className="heading--desc mb-20">We are Vims, our strategy facilitate your acquisition of goods</p>
                                <div className="divider--line">
                                    <i className="divider divider--1"></i>
                                    <i className="divider divider--2"></i>
                                    <i className="divider divider--3"></i>
                                    <i className="divider divider--4"></i>
                                </div>
                            </div>{/* .heading end */}
                            {/* progress 1 */}
                            <div className="progressbar">
                                <div className="progress-title">
                                    <span className="title">Product Delivery</span>
                                    <span className="value">95%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            {/* .progressbar end */}

                            {/* progress 2 */}
                            <div className="progressbar">
                                <div className="progress-title">
                                    <span className="title">Product Quality</span>
                                    <span className="value">100%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            {/* .progressbar end */}

                            {/* progress 3 */}
                            <div className="progressbar">
                                <div className="progress-title">
                                    <span className="title">Reliability</span>
                                    <span className="value">98%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            {/* .progressbar end */}

                            {/* progress 4 */}

                            {/* .progressbar end */}
                        </div>
                    </div>
                    {/* .row end */}
                </div>
                {/* .container end */}
            </section>
            {/* #banner2 end */}
            {/* Clients Section #2
            ============================================= */}
            <section id="clients2" className="clients clients-2 bg-white">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                            <div className="heading heading-2 text--center mb-60">
                                <p className="heading--subtitle">We Are Trusted</p>
                                <h2 className="heading--title">Our Beloved Clients</h2>
                                <div className="divider--line">
                                    <i className="divider divider--1"></i>
                                    <i className="divider divider--2"></i>
                                    <i className="divider divider--3"></i>
                                    <i className="divider divider--4"></i>
                                </div>
                                <p className="heading--desc pr-30 pl-30">We've been lucky to collaborate with a long list of customers, within the country. Thanks to them we have grown as professionals.</p>
                            </div>
                        </div>{/* .col-md-8 end */}
                    </div>{/* .row end */}
                    <div className="row row-clients">
                        {/* Client #1 */}
                        <div className="col-xs-12 col-sm-6 col-md-3 client">
                            <img className="center-block" src="assets/images/clients/7.png" alt="client"/>
                        </div>
                        {/* .client end */}

                        {/* Client #2 */}
                        <div className="col-xs-12 col-sm-6 col-md-3 client">
                            <img className="center-block" src="assets/images/clients/8.png" alt="client"/>
                        </div>
                        {/* .client end */}

                        {/* Client #3 */}
                        <div className="col-xs-12 col-sm-6 col-md-3 client">
                            <img className="center-block" src="assets/images/clients/9.png" alt="client"/>
                        </div>
                        {/* .client end */}

                        {/* Client #4 */}
                        <div className="col-xs-12 col-sm-6 col-md-3 client">
                            <img className="center-block" src="assets/images/clients/10.png" alt="client"/>
                        </div>
                        {/* .client end */}

                    </div>{/* .row-clients */}
                    <div className="row row-clients">
                        {/* Client #5 */}
                        <div className="col-xs-12 col-sm-6 col-md-3 client">
                            <img className="center-block" src="assets/images/clients/11.png" alt="client"/>
                        </div>
                        {/* .client end */}

                        {/* Client #6 */}
                        <div className="col-xs-12 col-sm-6 col-md-3 client">
                            <img className="center-block" src="assets/images/clients/12.png" alt="client"/>
                        </div>
                        {/* .client end */}

                        {/* Client #7 */}
                        <div className="col-xs-12 col-sm-6 col-md-3 client">
                            <img className="center-block" src="assets/images/clients/13.png" alt="client"/>
                        </div>
                        {/* .client end */}

                        {/* Client #8 */}
                        <div className="col-xs-12 col-sm-6 col-md-3 client">
                            <img className="center-block" src="assets/images/clients/14.png" alt="client"/>
                        </div>
                        {/* .client end */}
                    </div>
                    {/* .row-clients end */}
                </div>
                {/* .container end */}
            </section>
            {/* #clients2 end */}
            {/* Testimonial #2
            ============================================= */}
            <section id="testimonial2" className="testimonial testimonial-2">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                            <div className="heading heading-5 mb-60 text--center">
                                <p className="heading--subtitle">Testimonials</p>
                                <h2 className="heading--title">Our Happy Clients</h2>
                                <div className="divider--line">
                                    <i className="divider divider--1"></i>
                                    <i className="divider divider--2"></i>
                                    <i className="divider divider--3"></i>
                                    <i className="divider divider--4"></i>
                                </div>
                            </div>
                        </div>{/* .col-md-8 end */}
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div id="testimonial-carousel2" className="carousel-dots">
                                {/* Testimonial #1 */}
                                <div className="testimonial-panel">
                                    <div className="testimonial--meta-img">
                                        <img src="assets/images/testimonial/george.jpeg" alt="Testimonial Author"/>
                                    </div>
                                    <div className="testimonial--body">
                                        <p>Vims impressive & great e-commerce provider in cameroon that I've ever seen. From the quality of their products to the delivery system!</p>
                                    </div>{/* .testimonial-body end */}
                                    <div className="testimonial--icon"></div>{/* .testimonial-icon end */}
                                    <div className="testimonial--meta">
                                        <h4>Manyu Winifred Abgor</h4>
                                        <p>Witney's Complext</p>
                                    </div>{/* .testimonial-meta end */}
                                </div>{/* .testimonial-panel end */}

                                {/* Testimonial # */}
                                <div className="testimonial-panel">
                                    <div className="testimonial--meta-img">
                                        <img src="assets/images/testimonial/hanny.jpeg" alt="Testimonial Author"/>
                                    </div>
                                    <div className="testimonial--body">
                                        <p>I had no stress in trying to acquire my goods. Just within a few days at the comfort of my business i get my goods</p>
                                    </div>{/* .testimonial-body end */}
                                    <div className="testimonial--icon"></div>{/* .testimonial-icon end */}
                                    <div className="testimonial--meta">

                                        <h4>Hanny Harriet</h4>
                                        <p>Hanny's Complex</p>
                                    </div>{/* .testimonial-meta end */}
                                </div>{/* .testimonial-panel end */}

                                {/* Testimonial #1 */}
                                <div className="testimonial-panel">
                                    <div className="testimonial--meta-img">
                                        <img src="assets/images/testimonial/beyang.jpeg" alt="Testimonial Author"/>
                                    </div>
                                    <div className="testimonial--body">
                                        <p>In spent less with Vims e-commerce company that i normally do if I were to buy them myself</p>
                                    </div>{/* .testimonial-body end */}
                                    <div className="testimonial--icon"></div>{/* .testimonial-icon end */}
                                    <div className="testimonial--meta">
                                        <h4>Beyang Acha</h4>
                                        <p>Alamandon Ltd </p>
                                    </div>{/* .testimonial-meta end */}
                                </div>{/*.testimonial-panel end */}


                            {/* Testimonial #1 */}
                                <div className="testimonial-panel">
                                    <div className="testimonial--meta-img">
                                        <img src="assets/images/testimonial/yanick.jpeg" alt="Testimonial Author"/>
                                    </div>
                                    <div className="testimonial--body">
                                        <p>I use to find it difficult to locate the products with my desired quality but thanks to Vims, i get my quality products without efforts</p>
                                    </div>{/* .testimonial-body end */}
                                    <div className="testimonial--icon"></div>{/* .testimonial-icon end */}
                                    <div className="testimonial--meta">
                                        <h4>Nde yanick Che</h4>
                                        <p>Le Mecal's Enterprise</p>
                                    </div>{/* .testimonial-meta end */}
                                </div>{/* .testimonial-panel end */}
                            </div>
                        </div>{/*.col-md-12 end */}
                    </div>{/* .row end */}
                </div>{/* .container end */}
            </section>{/* .testimonial2 end */}
            {/* Team #2
            ============================================= */}
            <section id="team2" className="team team-2 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="heading heading-2 text-center mb-50">
                                <p className="heading--subtitle">Experts & Experienced</p>
                                <h2 className="heading--title">Meet The Team</h2>
                                <div className="divider--line">
                                    <i className="divider divider--1"></i>
                                    <i className="divider divider--2"></i>
                                    <i className="divider divider--3"></i>
                                    <i className="divider divider--4"></i>
                                </div>
                            </div>{/* .heading end */}
                        </div>{/* .col-md-12 end */}
                    </div>{/* .row end */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div id="team-carousel" className="carousel-dots">
                                {/* Member #1 */}
                                <div className="member">
                                    <div className="member-img">
                                        <img src="assets/images/team/tabi.jpg" alt="member" style={{width:"290px",height:"310px"}}/>
                                        <div className="member-overlay">
                                            <div className="member-social">
                                                <div className=" pos-vertical-center">
                                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>{/* .memebr-ovelay end */}
                                    </div>{/* .member-img end */}
                                    <div className="member-info">
                                        <h5>Ewang Rene Tabi</h5>
                                        <h6>Support Agent</h6>
                                    </div>{/* .member-info end */}
                                </div>{/* .member end */}

                                {/* Member #2 */}
                                <div className="member">
                                    <div className="member-img">
                                        <img src="assets/images/team/online.jpeg" alt="member"  style={{width:"290px",height:"310px"}}/>
                                        <div className="member-overlay">
                                            <div className="member-social">
                                                <div className=" pos-vertical-center">
                                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>{/* .memebr-ovelay end */}
                                    </div>{/* .member-img end */}
                                    <div className="member-info">
                                        <h5>Marisa Watson</h5>
                                        <h6>Marketing Officer</h6>
                                    </div>{/* .member-info end */}
                                </div>{/* .member end */}

                                <div className="member">
                                    <div className="member-img">
                                        <img src="assets/images/team/hanny.jpeg" alt="member"  style={{width:"290px",height:"310px"}}/>
                                        <div className="member-overlay">
                                            <div className="member-social">
                                                <div className=" pos-vertical-center">
                                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>{/* .memebr-ovelay end */}
                                    </div>{/* .member-img end */}
                                    <div className="member-info">
                                        <h5>Hanny Harriet</h5>
                                        <h6>Financial Manager</h6>
                                    </div>{/* .member-info end */}
                                </div>{/* .member end */}

                                {/* Member #3 */}
                                <div className="member">
                                    <div className="member-img">
                                        <img src="assets/images/team/wife.jpg" alt="member"  style={{width:"290px",height:"310px"}}/>
                                        <div className="member-overlay">
                                            <div className="member-social">
                                                <div className=" pos-vertical-center">
                                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>{/* .memebr-ovelay end */}
                                    </div>{/* .member-img end */}
                                    <div className="member-info">
                                        <h5>Evelyne Achidi</h5>
                                        <h6>Administrative Manager</h6>
                                    </div>{/* .member-info end */}
                                </div>{/* .member end */}

                                {/* Member #4 */}


                                {/* Member #2 */}
                                <div className="member">
                                    <div className="member-img">
                                        <img src="assets/images/team/yanick.jpeg" alt="member"  style={{width:"290px",height:"310px"}}/>
                                        <div className="member-overlay">
                                            <div className="member-social">
                                                <div className=" pos-vertical-center">
                                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>{/* .memebr-ovelay end */}
                                    </div>{/* .member-img end */}
                                    <div className="member-info">
                                        <h5>Nde Yanick</h5>
                                        <h6>Quality Manager</h6>
                                    </div>{/* .member-info end */}
                                </div>{/* .member end */}

                                {/* Member #3 */}
                                <div className="member">
                                    <div className="member-img">
                                        <img src="assets/images/team/beyang.jpeg" alt="member"  style={{width:"290px",height:"310px"}}/>
                                        <div className="member-overlay">
                                            <div className="member-social">
                                                <div className=" pos-vertical-center">
                                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>{/* .memebr-ovelay end */}
                                    </div>{/* .member-img end */}
                                    <div className="member-info">
                                        <h5>Beyang Acha</h5>
                                        <h6>General Manager</h6>
                                    </div>{/* .member-info end */}
                                </div>{/* .member end */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* #team2 end  */}
            {/* CTA #1
            ============================================= */}
            <section id="cta1" className="cta cta-1 bg-overlay bg-overlay-theme">
                <div className="bg-section">
                    <img src="assets/images/cta/cta-1.jpg" alt="Background"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <h3>We deliver to your expectations!</h3>
                        </div>{/* .col-md-6 end */}
                        <div className="col-xs-12 col-sm-6 col-md-6 text-right">
                            <a className="btn btn--white btn--bordered" href={t('shopUrl')}>Shop with us.</a>
                        </div>{/* .col-md-6 end */}
                    </div>{/* .row end */}
                </div>{/* .container end */}
            </section>{/* #cta1 end */}
        </React.Fragment>
    )
}

export default AboutUsView;