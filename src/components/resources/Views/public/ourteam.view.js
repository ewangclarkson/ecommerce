import React from 'react';
import $ from 'jquery';

const OurTeam = ()=>{
    $(document).ready(function () {
        $('.nav li.active').removeAttr("class");
        $('#ourTeam').addClass("active");
    });
    return(
        <React.Fragment>

            <section id="page-title" className="page-title bg-overlay bg-overlay-dark">
                <div className="bg-section">
                    <img src="assets/images/page-title/title-5.jpg" alt="Background"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                            <div className="title title-4 text-center">
                                <div className="title--content">
                                    <div className="title--heading">
                                        <h1>Our Team</h1>
                                    </div>
                                    <div className="title--desc">
                                        <p>We love what we do and we do it with passion.Your expectations is our priority</p>
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

            {/* Pie Charts #3
            ============================================= */}
            <section id="piechart3" className="pie-chart pie-chart-3 bg-white">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                            <div className="heading heading-2 text--center mb-60">
                                <p className="heading--subtitle"></p>
                                <h2 className="heading--title">We Are Experts!</h2>
                                <div className="divider--line">
                                    <i className="divider divider--1"></i>
                                    <i className="divider divider--2"></i>
                                    <i className="divider divider--3"></i>
                                    <i className="divider divider--4"></i>
                                </div>
                                <p className="heading--desc">We are Vims and we deliver at your time and expectations.</p>
                            </div>
                        </div>
                        {/* .col-md-8 end */}
                    </div>
                    <div className="row">
                        {/* Skill #1 */}
                        <div className="col-xs-12 col-sm-6 col-md-3 text-center">
                            <div className="skill">
                                <div className="rounded-skill" data-percent="80" data-width="3" data-color="#dd543d"
                                     data-size="166" data-line="square">
                                    <div className="rounded--icon">
                                        <i className="lnr lnr-license"></i>
                                    </div>
                                </div>
                                {/* .rounded-skill end */}
                                <div className="skill-name">
                                    <h6>Quality</h6>
                                </div>
                                {/* .skill-name end */}
                            </div>
                            {/* .skill end */}
                        </div>
                        {/* .col-md-2 end */}

                        {/* Skill #2 */}
                        <div className="col-xs-12 col-sm-6 col-md-3 text-center">
                            <div className="skill">
                                <div className="rounded-skill" data-percent="70" data-width="3" data-color="#dd543d"
                                     data-size="166" data-line="square">
                                    <div className="rounded--icon">
                                        <i className="lnr lnr-cart"></i>
                                    </div>
                                </div>
                                {/* .rounded-skill end */}
                                <div className="skill-name">
                                    <h6>Reliability</h6>
                                </div>
                                {/* .skill-name end */}
                            </div>
                            {/* .skill end */}
                        </div>
                        {/* .col-md-2 end */}

                        {/* Skill #3 */}
                        <div className="col-xs-12 col-sm-6 col-md-3 text-center">
                            <div className="skill">
                                <div className="rounded-skill" data-percent="90" data-width="3" data-color="#dd543d"
                                     data-size="166" data-line="square">
                                    <div className="rounded--icon">
                                        <i className="lnr lnr-diamond"></i>
                                    </div>
                                </div>
                                {/* .rounded-skill end */}
                                <div className="skill-name">
                                    <h6>Delivery</h6>
                                </div>
                                {/* .skill-name end */}
                            </div>
                            {/* .skill end */}
                        </div>
                        {/* .col-md-2 end */}

                        {/* Skill #4 */}
                        <div className="col-xs-12 col-sm-6 col-md-3 text-center">
                            <div className="skill">
                                <div className="rounded-skill" data-percent="75" data-width="3" data-color="#dd543d"
                                     data-size="166" data-line="square">
                                    <div className="rounded--icon">
                                        <i className="lnr lnr-apartment"></i>
                                    </div>
                                </div>
                                {/* .rounded-skill end */}
                                <div className="skill-name">
                                    <h6>Good Pricing</h6>
                                </div>
                                {/* .skill-name end */}
                            </div>
                            {/* .skill end */}
                        </div>
                        {/* .col-md-2 end */}

                        {/* .col-md-2 end */}
                    </div>
                    {/* .row end */}
                </div>
                {/* .container end */}
            </section>
            {/* #piechart3 end */}
            {/* Team #3
            ============================================= */}
            <section id="team3" className="team team-3">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div className="heading heading-2 text-center mb-50">
                                <p className="heading--subtitle">Skilled & Talented</p>
                                <h2 className="heading--title">Meet The Team</h2>
                                <div className="divider--line">
                                    <i className="divider divider--1"></i>
                                    <i className="divider divider--2"></i>
                                    <i className="divider divider--3"></i>
                                    <i className="divider divider--4"></i>
                                </div>
                            </div>
                            {/* .heading end */}
                        </div>
                        {/* .col-md-12 end */}
                    </div>
                    {/* .row end */}
                    <div className="row">
                        {/* Member #1 */}
                        <div className="col-xs-12 col-sm-3 col-md-3">
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
                                    </div>
                                    {/* .memebr-ovelay end */}
                                </div>
                                {/* .member-img end */}
                                <div className="member-info">
                                    <h5>Ewang Rene Tabi</h5>
                                    <h6>Support Agent</h6>
                                    <div className="divider--line">
                                        <i className="divider divider--1"></i>
                                        <i className="divider divider--2"></i>
                                    </div>
                                    <p>We provide support to all your difficulties while using the application</p>
                                </div>
                                {/* .member-info end */}
                            </div>
                            {/* .member end */}
                        </div>
                        {/* .col-md-3 end */}

                        {/* Member #2 */}
                        <div className="col-xs-12 col-sm-3 col-md-3">
                            <div className="member">
                                <div className="member-img">
                                    <img src="assets/images/team/online.jpeg" alt="member" style={{width:"290px",height:"310px"}}/>
                                    <div className="member-overlay">
                                        <div className="member-social">
                                            <div className=" pos-vertical-center">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"><i className="fa fa-twitter"></i></a>
                                                <a href="#"><i className="fa fa-google-plus"></i></a>
                                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* .memebr-ovelay end */}
                                </div>
                                {/* .member-img end */}
                                <div className="member-info">
                                    <h5>Marisa Watson</h5>
                                    <h6>Marketing Officer</h6>
                                    <div className="divider--line">
                                        <i className="divider divider--1"></i>
                                        <i className="divider divider--2"></i>
                                    </div>
                                    <p>Vision dominates a lot of our subconscious interpretation of the world around
                                        us.</p>
                                </div>
                                {/* .member-info end */}
                            </div>
                            {/* .member end */}
                        </div>
                        {/* .col-md-3 end */}

                        {/* Member #3 */}
                        <div className="col-xs-12 col-sm-3 col-md-3">
                            <div className="member">
                                <div className="member-img">
                                    <img src="assets/images/team/wife.jpg" alt="member" style={{width:"290px",height:"310px"}}/>
                                    <div className="member-overlay">
                                        <div className="member-social">
                                            <div className=" pos-vertical-center">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"><i className="fa fa-twitter"></i></a>
                                                <a href="#"><i className="fa fa-google-plus"></i></a>
                                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* .memebr-ovelay end */}
                                </div>
                                {/* .member-img end */}
                                <div className="member-info">
                                    <h5>Evelyne Achidi</h5>
                                    <h6>Administrative Manager</h6>
                                    <div className="divider--line">
                                        <i className="divider divider--1"></i>
                                        <i className="divider divider--2"></i>
                                    </div>
                                    <p>The development of a business is base on a lot of administrative decisions</p>
                                </div>
                                {/* .member-info end */}
                            </div>
                            {/* .member end */}
                        </div>
                        {/* .col-md-3 end */}


                        {/* Member #5 */}
                        <div className="col-xs-12 col-sm-3 col-md-3">
                            <div className="member">
                                <div className="member-img">
                                    <img src="assets/images/team/yanick.jpeg" alt="member" style={{width:"290px",height:"310px"}}/>
                                    <div className="member-overlay">
                                        <div className="member-social">
                                            <div className=" pos-vertical-center">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"><i className="fa fa-twitter"></i></a>
                                                <a href="#"><i className="fa fa-google-plus"></i></a>
                                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h5>Nde Yanick</h5>
                                    <h6>Quality Manager</h6>
                                    <div className="divider--line">
                                        <i className="divider divider--1"></i>
                                        <i className="divider divider--2"></i>
                                    </div>
                                    <p>There cannot be exploits without great quality improvements in products.</p>
                                </div>

                            </div>
                        </div>
                        {/* .col-md-3 end */}

                        {/* Member #6 */}
                        <div className="col-xs-12 col-sm-3 col-md-3">
                            <div className="member">
                                <div className="member-img">
                                    <img src="assets/images/team/beyang.jpeg" alt="member" style={{width:"290px",height:"310px"}}/>
                                    <div className="member-overlay">
                                        <div className="member-social">
                                            <div className=" pos-vertical-center">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"><i className="fa fa-twitter"></i></a>
                                                <a href="#"><i className="fa fa-google-plus"></i></a>
                                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* .memebr-ovelay end */}
                                </div>
                                {/* .member-img end */}
                                <div className="member-info">
                                    <h5>Beyang Acha</h5>
                                    <h6>General Manager</h6>
                                    <div className="divider--line">
                                        <i className="divider divider--1"></i>
                                        <i className="divider divider--2"></i>
                                    </div>
                                    <p>Desired success cannot be achieved without a good leader</p>
                                </div>
                                {/* .member-info end */}
                            </div>
                            {/* .member end */}
                        </div>
                        {/* .col-md-3 end */}

                        {/* Member #7 */}
                        <div className="col-xs-12 col-sm-3 col-md-3">
                            <div className="member">
                                <div className="member-img">
                                    <img src="assets/images/team/witney.jpg" alt="member" style={{width:"290px",height:"310px"}}/>
                                    <div className="member-overlay">
                                        <div className="member-social">
                                            <div className="pos-vertical-center">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"><i className="fa fa-twitter"></i></a>
                                                <a href="#"><i className="fa fa-google-plus"></i></a>
                                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* .memebr-ovelay end */}
                                </div>
                                {/* .member-img end */}
                                <div className="member-info">
                                    <h5>Willson Clarkson</h5>
                                    <h6>Developer & Graphics Designer</h6>
                                    <div className="divider--line">
                                        <i className="divider divider--1"></i>
                                        <i className="divider divider--2"></i>
                                    </div>
                                    <p>If it exist it should be worth it. Beauty is appreciated</p>
                                </div>
                                {/* .member-info end */}
                            </div>
                            {/* .member end */}
                        </div>
                        {/* .col-md-3 end */}

                        {/* Member #8 */}
                        <div className="col-xs-12 col-sm-3 col-md-3">
                            <div className="member">
                                <div className="member-img">
                                    <img src="assets/images/team/esther.jpg" alt="member" style={{width:"290px",height:"310px"}}/>
                                    <div className="member-overlay">
                                        <div className="member-social">
                                            <div className=" pos-vertical-center">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"><i className="fa fa-twitter"></i></a>
                                                <a href="#"><i className="fa fa-google-plus"></i></a>
                                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* .memebr-ovelay end */}
                                </div>
                                {/* .member-img end */}
                                <div className="member-info">
                                    <h5>Esther Davinchi</h5>
                                    <h6>PA</h6>
                                    <div className="divider--line">
                                        <i className="divider divider--1"></i>
                                        <i className="divider divider--2"></i>
                                    </div>
                                    <p>No matter how smart you are,you will need assistance</p>
                                </div>
                                {/* .member-info end */}
                            </div>
                            {/* .member end */}
                        </div>
                        {/* .col-md-3 end */}
                        <div className="col-xs-12 col-sm-3 col-md-3">
                            <div className="member">
                                <div className="member-img">
                                    <img src="assets/images/team/hanny.jpeg" alt="member"/>
                                    <div className="member-overlay">
                                        <div className="member-social">
                                            <div className=" pos-vertical-center">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"><i className="fa fa-twitter"></i></a>
                                                <a href="#"><i className="fa fa-google-plus"></i></a>
                                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* .memebr-ovelay end */}
                                </div>
                                {/* .member-img end */}
                                <div className="member-info">
                                    <h5>Hanny Harriet</h5>
                                    <h6>Financial Manager</h6>
                                    <div className="divider--line">
                                        <i className="divider divider--1"></i>
                                        <i className="divider divider--2"></i>
                                    </div>
                                    <p>No matter how smart you are,you will need assistance</p>
                                </div>
                                {/* .member-info end */}
                            </div>
                            {/* .member end */}
                        </div>
                    </div>
                </div>
            </section>
            {/* #team3 end  */}

            {/* Counter #1
            ============================================= */}
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
            {/* #counter1 end */}
        </React.Fragment>
    )
}

export default OurTeam;