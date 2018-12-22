import React, { Fragment } from 'react';

export default class JobDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <section
          className="inner-header-title"
          style={{ backgroundImage: 'url(assets/img/Business-People.jpg)' }}
        >
          <div className="container">
            <h1>Twitter Pvt</h1>
          </div>
        </section>
        <div className="clearfix" />
        {/* Title Header End */}

        {/* Job Detail Start */}
        <section className="detail-desc advance-detail-pr gray-bg">
          <div className="container white-shadow bo-r-4">
            <div className="row">
              <div className="detail-pic">
                <img src="assets/img/com-7.jpg" className="img" alt="job-img" />
                <a href="#" className="detail-edit" title="edit">
                  <i className="fa fa-pencil" />
                </a>
              </div>
              <div className="detail-status">
                <span>2 Days Ago</span>
              </div>
            </div>
            <div className="row m-b-15">
              <div className="col-md-12 col-sm-12">
                <div className="advance-detail detail-desc-caption">
                  <h4>Product Designer</h4>
                  <span className="designation">Twitter Pvt</span>
                </div>
              </div>
            </div>
            <div className="row no-padd">
              <div className="detail pannel-footer">
                <div className="col-md-5 col-sm-5">
                  <ul className="detail-footer-social">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-7 col-sm-7">
                  <div className="detail-pannel-footer-btn pull-right">
                    <a
                      href="javascript:void(0)"
                      data-toggle="modal"
                      data-target="#apply-job"
                      className="footer-btn blu-btn"
                      title
                    >
                      Apply
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Job Detail End */}

        {/* Job full detail Start */}
        <section className="full-detail-description full-detail gray-bg">
          <div className="container">
            {/* Job Description */}
            <div className="col-md-9 col-sm-12">
              <div className="full-card">
                <div className="row row-bottom mrg-0">
                  <h2 className="detail-title">Job Detail</h2>
                  <ul className="job-detail-des">
                    <li>
                      <span>Salary:</span>$10,000 - $12,000 P.A.
                    </li>
                    <li>
                      <span>Industry:</span>IT-Software / Software Services
                    </li>
                    <li>
                      <span>Role Category:</span>Programming &amp; Design
                    </li>
                    <li>
                      <span>Role:</span>Product Designer
                    </li>
                    <li>
                      <span>Job Type:</span>Full Time
                    </li>
                  </ul>
                </div>
                <div className="row row-bottom mrg-0">
                  <h2 className="detail-title">Location</h2>
                  <ul className="job-detail-des">
                    <li>
                      <span>Address:</span>SCO 210, Neez Plaza
                    </li>
                    <li>
                      <span>City:</span>Mohali
                    </li>
                    <li>
                      <span>State:</span>Punjab
                    </li>
                    <li>
                      <span>Country:</span>India
                    </li>
                    <li>
                      <span>Zip:</span>520 548
                    </li>
                    <li>
                      <span>Telephone:</span>+91 123 456 7854
                    </li>
                    <li>
                      <span>Fax:</span>(622) 123 456
                    </li>
                    <li>
                      <span>Email:</span>youremail@gmail.com
                    </li>
                  </ul>
                </div>
                <div className="row row-bottom mrg-0">
                  <h2 className="detail-title">Job Responsibilities</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="row row-bottom mrg-0">
                  <h2 className="detail-title">Skill Requirement</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul className="detail-list">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </li>
                  </ul>
                </div>
                <div className="row row-bottom mrg-0">
                  <h2 className="detail-title">Benefits</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
            {/* End Job Description */}

            {/* Start Sidebar */}
            <div className="col-md-3 col-sm-12">
              <div className="sidebar right-sidebar">
                <div className="side-widget">
                  <h2 className="side-widget-title">Job Alert</h2>
                  <div className="job-alert">
                    <div className="widget-text">
                      <form>
                        <input
                          type="text"
                          name="keyword"
                          className="form-control"
                          placeholder="Job Keyword"
                        />
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                        />
                        <button type="submit" className="btn btn-alrt">
                          Add Alert
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="side-widget">
                  <h2 className="side-widget-title">Advertisment</h2>
                  <div className="widget-text padd-0">
                    <div className="ad-banner">
                      <img
                        src="http://via.placeholder.com/320x285"
                        className="img-responsive"
                        alt="job-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="side-widget">
                  <h2 className="side-widget-title">Advertisment</h2>
                  <div className="widget-text padd-0">
                    <div className="ad-banner">
                      <img
                        src="http://via.placeholder.com/320x285"
                        className="img-responsive"
                        alt="job-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Sidebar */}
          </div>
        </section>
      </Fragment>
    );
  }
}
