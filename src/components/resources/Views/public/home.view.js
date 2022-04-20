import React from 'react';
import $ from 'jquery';
import {useTranslation} from "react-i18next";


const HomeView = () => {

    $(document).ready(function () {
        $('.nav li.active').removeAttr("class");
        $('#home').addClass("active");
    });

    const {t} = useTranslation();
    return (
        <React.Fragment>
            <section id="slider" className="slider slider-overlay-dark">
                {/* START REVOLUTION SLIDER 5.0 */}
                <div className="rev_slider_wrapper">
                    <div id="slider1" className="rev_slider" data-version="5.0">
                        <ul>
                            {/* slide 1 */}
                            <li data-transition="zoomout"
                                data-slotamount="default"
                                data-easein="Power4.easeInOut"
                                data-easeout="Power4.easeInOut"
                                data-masterspeed="2000">
                                {/* MAIN IMAGE */}
                                <img src="assets/images/sliders/slide-bg/4.jpg" alt="Slide Background Image"
                                     width="1920" height="1280"/>
                                {/* LAYER NR. 1 */}
                                <div className="tp-caption"
                                     data-x="center" data-hoffset="0"
                                     data-y="center" data-voffset="-65"
                                     data-whitespace="nowrap"
                                     data-width="none"
                                     data-height="none"
                                     data-transform_idle="o:1;"
                                     data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                     data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                     data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                     data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                                     data-start="750"
                                     data-splitin="none"
                                     data-splitout="none"
                                     data-responsive_offset="on"
                                >
                                    <div className="slide--headline text-center">We Create<br/>Your Sweet Future!</div>
                                </div>

                                {/* LAYER NR. 2 */}
                                <div className="tp-caption"
                                     data-x="center" data-hoffset="0"
                                     data-y="center" data-voffset="50"
                                     data-width="none"
                                     data-height="none"
                                     data-transform_idle="o:1;"
                                     data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                     data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                     data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                     data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                                     data-start="1000"
                                     data-splitin="none"
                                     data-splitout="none"
                                     data-responsive_offset="on"
                                >
                                    <div className="slide--bio text-center">We are reliable and dedicated to your comfort
                                    </div>
                                </div>

                                {/* LAYER NR. 3 */}
                                <div className="tp-caption"
                                     id="slide-163-layer-6"
                                     data-x="center" data-hoffset="0"
                                     data-y="center" data-voffset="130"
                                     data-width="none"
                                     data-height="none"
                                     data-whitespace="nowrap"
                                     data-transform_idle="o:1;"
                                     data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power3.easeOut;"
                                     data-style_hover="c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);"
                                     data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                     data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                     data-mask_out="x:inherit;y:inherit;"
                                     data-start="1250"
                                     data-splitin="none"
                                     data-splitout="none"
                                     data-actions='[{"event":"click","action":"jumptoslide","slide":"rs-164","delay":""}]'
                                     data-basealign="slide"
                                     data-responsive_offset="on"
                                     data-responsive="off">
                                    <div className="slide-action">
                                       {/* <a className="btn btn--video popup-video"
                                           href="https://www.youtube.com/watch?v=nrJtHemSPW4"><i
                                            className="icon icon-Play"></i>Play Video!</a>*/}
                                    </div>
                                </div>
                            </li>

                            {/* slide 2 */}
                            <li data-transition="zoomout"
                                data-slotamount="default"
                                data-easein="Power4.easeInOut"
                                data-easeout="Power4.easeInOut"
                                data-masterspeed="2000">
                                {/* MAIN IMAGE */}
                                <img src="assets/images/sliders/slide-bg/5.jpg" alt="Slide Background Image"
                                     width="1920" height="1280"/>
                                {/* LAYER NR. 1 */}
                                <div className="tp-caption"
                                     data-x="center" data-hoffset="0"
                                     data-y="center" data-voffset="-65"
                                     data-whitespace="nowrap"
                                     data-width="none"
                                     data-height="none"
                                     data-transform_idle="o:1;"
                                     data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                     data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                     data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                     data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                                     data-start="750"
                                     data-splitin="none"
                                     data-splitout="none"
                                     data-responsive_offset="on"
                                >
                                    <div className="slide--headline text-center">Vims Provides <br/>Great
                                        Solutions
                                    </div>
                                </div>

                                {/* LAYER NR. 2 */}
                                <div className="tp-caption"
                                     data-x="center" data-hoffset="0"
                                     data-y="center" data-voffset="50"
                                     data-width="none"
                                     data-height="none"
                                     data-transform_idle="o:1;"
                                     data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                     data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                     data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                     data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                                     data-start="1000"
                                     data-splitin="none"
                                     data-splitout="none"
                                     data-responsive_offset="on"
                                >
                                    <div className="slide--bio text-center">We are Experts and Effective. We are trusted.
                                    </div>
                                </div>

                                {/* LAYER NR. 3 */}
                                <div className="tp-caption"
                                     id="slide-163-layer-6"
                                     data-x="center" data-hoffset="0"
                                     data-y="center" data-voffset="130"
                                     data-width="none"
                                     data-height="none"
                                     data-whitespace="nowrap"
                                     data-transform_idle="o:1;"
                                     data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power3.easeOut;"
                                     data-style_hover="c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);"
                                     data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                     data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                     data-mask_out="x:inherit;y:inherit;"
                                     data-start="1250"
                                     data-splitin="none"
                                     data-splitout="none"
                                     data-actions='[{"event":"click","action":"jumptoslide","slide":"rs-164","delay":""}]'
                                     data-basealign="slide"
                                     data-responsive_offset="on"
                                     data-responsive="off">
                                    <div className="slide-action">
                                        <a className="btn btn--slide btn--secondary btn--white" href={t('aboutUsUrl')}>Read More </a>
                                        <a className="btn btn--slide btn--white btn--bordered" href={t('shopUrl')}>Get Started</a>
                                    </div>
                                </div>
                            </li>

                            {/* slide 3 */}
                            <li data-transition="zoomout"
                                data-slotamount="default"
                                data-easein="Power4.easeInOut"
                                data-easeout="Power4.easeInOut"
                                data-masterspeed="2000" className="bg-overlay bg-overlay-dark">
                                {/* MAIN IMAGE */}
                                <img src="assets/images/sliders/slide-bg/1.jpg" alt="Slide Background Image"
                                     width="1920" height="1280"/>
                                {/* LAYER NR. 1 */}
                                <div className="tp-caption"
                                     data-x="center" data-hoffset="0"
                                     data-y="center" data-voffset="-65"
                                     data-whitespace="nowrap"
                                     data-width="none"
                                     data-height="none"
                                     data-transform_idle="o:1;"
                                     data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                     data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                     data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                     data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                                     data-start="750"
                                     data-splitin="none"
                                     data-splitout="none"
                                     data-responsive_offset="on"
                                >
                                    <div className="slide--headline text-center">we delivery<br/> unique products limitless
                                    </div>
                                </div>

                                {/* LAYER NR. 2 */}
                                <div className="tp-caption"
                                     data-x="center" data-hoffset="0"
                                     data-y="center" data-voffset="50"
                                     data-width="none"
                                     data-height="none"
                                     data-transform_idle="o:1;"
                                     data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                     data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                     data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                     data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                                     data-start="1000"
                                     data-splitin="none"
                                     data-splitout="none"
                                     data-responsive_offset="on"
                                >
                                    <div className="slide--bio text-center">We are Vims,<br/> our strategy facilitate your acquisition of goods
                                    </div>
                                </div>

                                {/* LAYER NR. 3 */}
                                <div className="tp-caption"
                                     id="slide-163-layer-6"
                                     data-x="center" data-hoffset="0"
                                     data-y="center" data-voffset="130"
                                     data-width="none"
                                     data-height="none"
                                     data-whitespace="nowrap"
                                     data-transform_idle="o:1;"
                                     data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power3.easeOut;"
                                     data-style_hover="c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);"
                                     data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                     data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                     data-mask_out="x:inherit;y:inherit;"
                                     data-start="1250"
                                     data-splitin="none"
                                     data-splitout="none"
                                     data-actions='[{"event":"click","action":"jumptoslide","slide":"rs-164","delay":""}]'
                                     data-basealign="slide"
                                     data-responsive_offset="on"
                                     data-responsive="off">
                                    <div className="slide-action">
                                        <a className="btn btn--slide btn--white btn--bordered" href={t('shopUrl')}>Get Started</a>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                    {/* END REVOLUTION SLIDER */}
                </div>
                {/* END OF SLIDER WRAPPER */}
            </section>

            <section id="heading1" className="bg-white heading heading-1 pb-100">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                            <div className="text--center">
                                <img className="heading--img" src="assets/images/heading/heading-icon.png"
                                     alt="heading img"/>
                                <p className="heading--subtitle">Effective & Reliable</p>
                                <h2 className="heading--title">We Are Vims</h2>
                                <div className="divider--line">
                                    <i className="divider divider--1"></i>
                                    <i className="divider divider--2"></i>
                                    <i className="divider divider--3"></i>
                                    <i className="divider divider--4"></i>
                                </div>
                                <p className="heading--desc">
                                    We are Vims,our solutions will increase your purchasing power.We care about your comfort,and deliver to your satisfaction</p>
                            </div>
                        </div>
                        {/* .col-md-8 end */}
                    </div>
                    {/* .row end */}
                </div>
                {/* .container end */}
            </section>

            <section id="banner3" className="skills skills-2 pt-0 pb-0">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-xs-12 col-sm-12 col-md-6 col-content pl-100">
                            <div className="row mb-50">
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
                                    </div>
                                    {/* .feature-panel end */}
                                </div>
                                {/* .col-md-4 end */}

                                {/* Panel #2 */}
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <div className="feature-panel">
                                        <div className="feature--icon">
                                            <i className="lnr lnr-bullhorn"></i>
                                        </div>
                                        <div className="feature--content">
                                            <h3>Quality</h3>
                                            <p>We are best in what we do and we have more than 5 years experience any customer's complains.</p>
                                        </div>
                                    </div>
                                    {/* .feature-panel end */}
                                </div>
                                {/* .col-md-4 end */}

                            </div>
                            {/* .row end */}
                            <div className="row">
                                {/* Panel #3 */}
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <div className="feature-panel">
                                        <div className="feature--icon">
                                            <i className="lnr lnr-apartment"></i>
                                        </div>
                                        <div className="feature--content">
                                            <h3>Priority</h3>
                                            <p>Your request is our priority and we are because you are. Our reason of existence is to make sure you our comfortable</p>
                                        </div>
                                    </div>
                                    {/* .feature-panel end */}
                                </div>
                                {/* .col-md-4 end */}

                                {/* Panel #4 */}
                                <div className="col-xs-12 col-sm-6 col-md-6">
                                    <div className="feature-panel">
                                        <div className="feature--icon">
                                            <i className="lnr lnr-rocket"></i>
                                        </div>
                                        <div className="feature--content">
                                            <h3>Delivery</h3>
                                            <p>We are in partnership with the best transport systems within the country.So delivery is made much easier.You comfort is our priority</p>
                                        </div>
                                    </div>
                                    {/* .feature-panel end */}
                                </div>
                                {/* .col-md-4 end */}
                            </div>
                            {/* .row end */}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 pr-0 pl-0">
                            <div className="col-img  bg-overlay">
                                <div className="bg-section">
                                    <img src="assets/images/banners/1.jpg" alt="Background"/>
                                </div>
                            </div>
                        </div>
                        {/* .col-md-6 end*/}
                    </div>
                    {/* .row end */}
                </div>
                {/* .container end */}
            </section>

            <section id="banner4" className="skills skills-2 pt-0 pb-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 pr-0 pl-0">
                            <div className="col-img  bg-overlay">
                                <div className="bg-section">
                                    <img src="assets/images/banners/2.jpg" alt="Background"/>
                                </div>
                            </div>
                        </div>
                        {/* .col-md-6 end*/}
                        <div className="col-xs-12 col-sm-12 col-md-6 col-content pl-100">
                            <div className="heading heading-8 mb-50">
                                <h2 className="heading--title">Order &amp; Receive,<br/>We make it so simple!</h2>
                                <p className="heading--desc mb-20">
                                    We are Vims, our strategy facilitate your acquisition of goods
                                </p>
                                <div className="divider--line">
                                    <i className="divider divider--1"></i>
                                    <i className="divider divider--2"></i>
                                    <i className="divider divider--3"></i>
                                    <i className="divider divider--4"></i>
                                </div>
                            </div>
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
                        </div>
                    </div>
                    {/* .row end */}
                </div>
                {/* .container end */}
            </section>

            <section id="counter1" className="counter bg-white">
                <div className="container">
                    <div className="row">
                        {/* count #1 */}
                        <div className="col-xs-6 col-sm-3 col-md-3">
                            <div className="count-box text-center">
                                <div className="count-icon">
                                    <i className="lnr lnr-coffee-cup"></i>
                                </div>
                                <div className="counting">5,344,000</div>
                                <div className="count-title">Products Sold</div>
                            </div>
                        </div>
                        {/* .col-md-3 end */}

                        {/* count #2 */}
                        <div className="col-xs-6 col-sm-3 col-md-3">
                            <div className="count-box text-center">
                                <div className="count-icon">
                                    <i className="lnr lnr-users"></i>
                                </div>
                                <div className="counting">2,000,350</div>
                                <div className="count-title">Customers</div>
                            </div>
                        </div>
                        {/* .col-md-3 end */}

                        {/* count #3 */}
                        <div className="col-xs-6 col-sm-3 col-md-3">
                            <div className="count-box text-center">
                                <div className="count-icon">
                                    <i className="lnr lnr-briefcase"></i>
                                </div>
                                <div className="counting">25</div>
                                <div className="count-title">Partners</div>
                            </div>
                        </div>
                        {/* .col-md-3 end */}

                        {/* count #4 */}
                        <div className="col-xs-6 col-sm-3 col-md-3">
                            <div className="count-box text-center">
                                <div className="count-icon">
                                    <i className="lnr lnr-keyboard"></i>
                                </div>
                                <div className="counting">30</div>
                                <div className="count-title">Delivery Agencies</div>
                            </div>
                        </div>
                        {/* .col-md-3 end */}


                    </div>
                    {/* .row end */}
                </div>
                {/* .container end */}
            </section>

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

            <section id="clients" className="clients clients-carousel pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="carousel carousel-dots" data-slide="6" data-slide-res="2"
                                 data-autoplay="false" data-nav="false" data-dots="false" data-space="30"
                                 data-loop="true" data-speed="800">
                                {/* Client #1 */}
                                <div className="client">
                                    <img className="center-block" src="assets/images/clients/1.png" alt="client"/>
                                </div>

                                {/* Client #2 */}
                                <div className="client">
                                    <img className="center-block" src="assets/images/clients/2.png" alt="client"/>
                                </div>

                                {/* Client #3 */}
                                <div className="client">
                                    <img className="center-block" src="assets/images/clients/3.png" alt="client"/>
                                </div>

                                {/* Client #4 */}
                                <div className="client">
                                    <img className="center-block" src="assets/images/clients/4.png" alt="client"/>
                                </div>

                                {/* Client #5 */}
                                <div className="client">
                                    <img className="center-block" src="assets/images/clients/5.png" alt="client"/>
                                </div>

                                {/* Client #6 */}
                                <div className="client">
                                    <img className="center-block" src="assets/images/clients/6.png" alt="client"/>
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
    );
}


export default HomeView;
