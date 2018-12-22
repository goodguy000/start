import React, { Fragment } from 'react';

export default class ResumeDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <section className="inner-header-title" style={{ backgroundImage: 'url(assets/img/banner-10.jpg)' }}>
          <div className="container">
            <h1>Resume Detail</h1>
          </div>
        </section>
        <div className="clearfix" />

        <section className="detail-desc">
          <div className="container white-shadow">
            <div className="row mrg-0">
              <div className="detail-pic">
                <img src="assets/img/client-1.jpg" className="img" alt="" />
                <a href="#" className="detail-edit" title="edit" ><i className="fa fa-pencil" /></a>
              </div>
              <div className="detail-status">
                <span>7 Hour Days Ago</span>
              </div>
            </div>
            <div className="row bottom-mrg mrg-0">
              <div className="col-md-8 col-sm-8">
                <div className="detail-desc-caption">
                  <h4>Daniel Dax</h4>
                  <span className="designation">Web Developer</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="detail-desc-skill">
                  <span>HTML</span><span>css</span><span>photoshop</span>
                  <span>java</span><span>php</span><span>bootstrap</span>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="get-touch">
                  <h4>Get in Touch</h4>
                  <ul>
                    <li><i className="fa fa-map-marker" /><span>Menlo Park, CA</span></li>
                    <li><i className="fa fa-envelope" /><span>danieldax704@gmail.com</span></li>
                    <li><i className="fa fa-phone" /><span>0 123 456 7859</span></li>
                    <li><i className="fa fa-money" /><span>$52/Hour</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row no-padd mrg-0">
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
                    <a href="#" className="footer-btn grn-btn" title="">Hire Now</a>
                    <a href="#" className="footer-btn blu-btn" title="">Edit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section className="full-detail-description full-detail">
          <div className="container">

            <div className="row row-bottom mrg-0">
              <h2 className="detail-title">About Resume</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="row row-bottom mrg-0">
              <h2 className="detail-title">Education</h2>
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
            <div className="row row-bottom mrg-0">
              <h2 className="detail-title">Work Experience</h2>
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

            <div className="row row-bottom mrg-0">
              <h2 className="detail-title">Skills</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="ext-mrg row third-progress">
                <div className="col-md-6 col-sm-6">
                  <div className="panel-body">
                    <h3 className="progressbar-title">Apps Development</h3>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '90%', background: '#26a9e1' }}>
                        <span className="progress-icon fa fa-plus" style={{ borderColor: '#26a9e1', color: '#26a9e1' }} />
                        <div className="progress-value">90%</div>
                      </div>
                    </div>

                    <h3 className="progressbar-title">iPhone Development</h3>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '80%', background: '#f6931e' }}>
                        <span className="progress-icon fa fa-plus" style={{ borderColor: '#f6931e', color: '#f6931e' }} />
                        <div className="progress-value">80%</div>
                      </div>
                    </div>

                    <h3 className="progressbar-title">Digital Marketing</h3>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '65%', background: '#8bc43f' }}>
                        <span className="progress-icon fa fa-plus" style={{ borderColor: '#8bc43f', color: '#8bc43f' }} />
                        <div className="progress-value">65%</div>
                      </div>
                    </div>

                    <h3 className="progressbar-title">SEO/SMO</h3>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '52%', background: '#d20001' }}>
                        <span className="progress-icon fa fa-plus" style={{ borderColor: '#d20001', color: '#d20001' }} />
                        <div className="progress-value">52%</div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="col-sm-6 col-sm-6">
                  <div className="panel-body">
                    <h3 className="progressbar-title">Apps Development</h3>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '90%', background: '#26a9e1' }}>
                        <span className="progress-icon fa fa-plus" style={{ borderColor: '#26a9e1', color: '#26a9e1' }} />
                        <div className="progress-value">90%</div>
                      </div>
                    </div>

                    <h3 className="progressbar-title">iPhone Development</h3>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '80%', background: '#f6931e' }}>
                        <span className="progress-icon fa fa-plus" style={{ borderColor: '#f6931e', color: '#f6931e' }} />
                        <div className="progress-value">80%</div>
                      </div>
                    </div>

                    <h3 className="progressbar-title">Digital Marketing</h3>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '65%', background: '#8bc43f' }}>
                        <span className="progress-icon fa fa-plus" style={{ borderColor: '#8bc43f', color: '#8bc43f' }} />
                        <div className="progress-value">65%</div>
                      </div>
                    </div>

                    <h3 className="progressbar-title">SEO/SMO</h3>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '52%', background: '#d20001' }}>
                        <span className="progress-icon fa fa-plus" style={{ borderColor: '#d20001', color: '#d20001' }} />
                        <div className="progress-value">52%</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </Fragment>
    );
  }
}
