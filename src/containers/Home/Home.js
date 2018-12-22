import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import config from 'config';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import RandomJobs from 'containers/RandomJobs';
import HowItWorks from 'containers/HowItWorks';
import WhatSayOurClient from 'containers/WhatSayOurClient';
import TopEmployers from 'containers/TopEmployers';
import VideoIntro from 'containers/VideoIntro';

@connect(state => ({
  online: state.online
}))
export default class Home extends Component {
  componentDidMount() {
    $('#company-brands').owlCarousel({
      items: 5,
      itemsDesktop: [1199, 5],
      itemsDesktopSmall: [979, 4],
      itemsTablet: [768, 3],
      itemsMobile: [600, 2],
      loop: true,
      pagination: false,
      navigation: false,
      navigationText: ['', ''],
      autoPlay: true
    });

    $('#client-testimonial-slider').owlCarousel({
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 2],
      itemsTablet: [768, 1],
      pagination: false,
      navigation: false,
      navigationText: ['', ''],
      autoPlay: true
    });
  }
  render() {
    return (
      <div>
        <Helmet title="Home" />
        <div className="wrapper">
          <div className="banner" style={{ backgroundImage: 'url(assets/img/banner-9.jpg)' }}>
            <div className="container">
              <div className="banner-caption">
                <div className="col-md-12 col-sm-12 banner-text">
                  <h1>7,000+ Browse Jobs</h1>
                  <form className="form-horizontal">
                    <div className="col-md-7 no-padd">
                      <div className="input-group">
                        <input type="text" className="form-control right-bor" placeholder="Skills, Designations, Companies" />
                      </div>
                    </div>

                    <div className="col-md-3 no-padd">
                      <div className="input-group">
                        <select className="form-control">
                          <option>Select City</option>
                          <option>Ha Noi</option>
                          <option>Ho Chi Minh</option>
                          <option>Da Nang</option>
                          <option>Others</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-2 no-padd">
                      <div className="input-group">
                        <button type="submit" className="btn btn-primary app-button">Search Job</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="company-brand">
              <div className="container">
                <div id="company-brands" className="owl-carousel">
                  <Link className="brand-img" to="/company/microsoft">
                    <img src="assets/img/microsoft-home.png" className="img-responsive" alt="" />
                  </Link>
                  <Link className="brand-img" to="/company/microsoft">
                    <img src="assets/img/img-home.png" className="img-responsive" alt="" />
                  </Link>
                  <Link className="brand-img" to="/company/microsoft">
                    <img src="assets/img/mothercare-home.png" className="img-responsive" alt="" />
                  </Link>
                  <Link className="brand-img" to="/company/microsoft">
                    <img src="assets/img/paypal-home.png" className="img-responsive" alt="" />
                  </Link>
                  <Link className="brand-img" to="/company/microsoft">
                    <img src="assets/img/serv-home.png" className="img-responsive" alt="" />
                  </Link>
                  <Link className="brand-img" to="/company/microsoft">
                    <img src="assets/img/xerox-home.png" className="img-responsive" alt="" />
                  </Link>
                  <Link className="brand-img" to="/company/microsoft">
                    <img src="assets/img/yahoo-home.png" className="img-responsive" alt="" />
                  </Link>
                  <Link className="brand-img" to="/company/microsoft">
                    <img src="assets/img/mothercare-home.png" className="img-responsive" alt="" />
                  </Link>
                  <Link className="brand-img" to="/company/microsoft">
                    <img src="assets/img/microsoft-home.png" className="img-responsive" alt="" />
                  </Link>
                  <Link className="brand-img" to="/company/microsoft">
                    <img src="assets/img/microsoft-home.png" className="img-responsive" alt="" />
                  </Link>
                  <Link className="brand-img" to="/company/microsoft">
                    <img src="assets/img/microsoft-home.png" className="img-responsive" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="clearfix" />

          <TopEmployers />

          <div className="clearfix" />

          {/* <section className="video-sec dark" id="video" style={{ backgroundImage: 'url(assets/img/banner-10.jpg)' }}>
            <div className="container">
              <div className="row">
                <div className="main-heading">
                  <p>Best For Your Projects</p>
                  <h2>Watch Our <span>video</span></h2>
                </div>
              </div>

              <div className="video-part">
                <a href="/" data-toggle="modal" data-target="#my-video" className="video-btn"><i className="fa fa-play" /></a>
              </div>
            </div>
          </section> */}

          <VideoIntro />

          <div className="clearfix" />

          <HowItWorks />

          <div className="clearfix" />

          <WhatSayOurClient />

          <div className="clearfix" />

          <RandomJobs />
        </div>
      </div>
    );
  }
}
