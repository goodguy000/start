import React, { Fragment } from 'react';
import ImagesSlider from 'components/ImagesSlider';

export default class CompanyDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <section className="inner-header-title" style={{ backgroundImage: 'url(assets/img/Business-People.jpg)' }}>
          <div className="Container"><h1>Microsoft</h1></div>
        </section>
        <div className="clearfix" />
        {/* Title Header End */}

        {/* Company Detail Start */}
        <section className="detail-desc">
          <div className="container white-shadow">
            <div className="row">
              <div className="detail-pic">
                <img src="assets/img/com-7.jpg" className="img" alt="job-img" />
                <a href="#" className="detail-edit" title="edit"><i className="fa fa-pencil" /></a>
              </div>
              <div className="detail-status">
                <span>10 Min Days Ago</span>
              </div>
            </div>
            <div className="row bottom-mrg">
              <div className="col-md-8 col-sm-8">
                <div className="detail-desc-caption">
                  <h4>Microsoft</h4>
                  <span className="designation">Software Development Company</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="get-touch">
                  <h4>Get in Touch</h4>
                  <ul>
                    <li><i className="fa fa-map-marker" /><span>Menlo Park, CA</span></li>
                    <li><i className="fa fa-envelope" /><span>danieldax704@gmail.com</span></li>
                    <li><i className="fa fa-globe" /><span>microft.com</span></li>
                    <li><i className="fa fa-phone" /><span>0 123 456 7859</span></li>
                    <li><i className="fa fa-users" /><span>1000 -1200</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row no-padd">
              <div className="detail pannel-footer">
                <div className="col-md-5 col-sm-5">
                  <ul className="detail-footer-social">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="#"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
                <div className="col-md-7 col-sm-7">
                  <div className="detail-pannel-footer-btn pull-right">
                    <a href="#" className="footer-btn grn-btn" title>Favourite</a>
                    <a href="#" className="footer-btn blu-btn" title>Save Draft</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Company Detail End */}

        {/* company full detail Start */}
        <section className="full-detail-description full-detail">
          <div className="container">
            <div className="row-bottom">
              <h2 className="detail-title">About Company</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="row-bottom">
              <h2 className="detail-title">Company Requirement</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul className="detail-list">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur.</li>
              </ul>
            </div>
            <div className="row-bottom">
              <h2 className="detail-title">Benefits</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul className="detail-list">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="full-detail-description full-detail">
          <div className="container justify-c">
            <div className="col-sm-8 images-border"><ImagesSlider /></div>
          </div>
        </section>
      </Fragment>
    );
  }
}
