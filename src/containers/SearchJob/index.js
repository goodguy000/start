import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class SearchJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    require('../../../static/assets/plugins/date-dropper/datedropper.css');
    require('../../../static/assets/plugins/dropzone/css/dropzone.css');

    return (
      <Fragment>
        <section
          className="inner-header-title no-br advance-header-title"
          style={{ backgroundImage: 'url(assets/img/banner-10.jpg)' }}
        >
          <div className="container">
            <h2>
              <span>Work There.</span> Find the dream job
            </h2>
            <p>
              <span>704</span> new job in the last <span>7</span> days.
            </p>
          </div>
        </section>
        <div className="clearfix" />

        <section className="bottom-search-form">
          <div className="container">
            <form className="bt-form">
              <div className="col-md-6 col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Skills, Designations, Keyword"
                />
              </div>

              <div className="col-md-3 col-sm-6">
                <select className="form-control">
                  <option>Find Location</option>
                  <option>Ha Noi</option>
                  <option>Ho Chi Minh</option>
                  <option>Da Nang</option>
                  <option>Others</option>
                </select>
              </div>

              <div className="col-md-3 col-sm-6">
                <button type="submit" className="btn btn-primary app-button">
                  Search Job
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="brows-job-category gray-bg">
          <div className="container">
            <div className="col-md-9 col-sm-12">
              <div className="full-card">
                <div className="card-header">
                  <div className="row mrg-0">
                    <div className="col-md-4 col-sm-4">
                      <select
                        className="selectpicker form-control"
                        multiple
                        title="Job Type"
                      >
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Freelancer</option>
                        <option>Internship</option>
                      </select>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <select
                        className="selectpicker form-control"
                        multiple
                        title="All Categories"
                      >
                        <option>Teacher Jobs</option>
                        <option>Consultant Jobs</option>
                        <option>IT Jobs</option>
                        <option>Sales Jobs</option>
                        <option>Graphic Designer Jobs</option>
                      </select>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <ol className="breadcrumb pull-right">
                        <li>
                          <a href="#">
                            <i className="fa fa-home" />
                          </a>
                        </li>
                        <li>
                          <a href="#">Full Time</a>
                        </li>
                        <li className="active">IT Jobs</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <article className="advance-search-job">
                    <div className="row no-mrg">
                      <div className="col-md-10 col-sm-10">
                        <a href="job-detail" title="job Detail">
                          <div className="advance-search-img-box">
                            <img
                              src="assets/img/com-2.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </div>
                        </a>
                        <div className="advance-search-caption">
                          <Link to="job-detail" title="Job Dtail">
                            <h4>Product Designer</h4>
                          </Link>
                          <span>Google Ltd</span>
                          <p>
                            <span className="brows-job-sallery icon_and_text">
                              <i className="fa fa-money" />
                              $110 - 200
                            </span>
                          </p>
                          <p>
                            Project DescriptionABOUT THE PROJECT: - Develop and
                            maintain embedded system for Automotive Telematics
                            Control Unit products. We are looking for...
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-2">
                        <a
                          href="javascript:void(0)"
                          data-toggle="modal"
                          data-target="#apply-job"
                          className="btn advance-search app-button"
                          title="apply"
                        >
                          Apply
                        </a>
                        <div className="advance-search-job-locat">
                          <p>
                            <i className="fa fa-map-marker" />
                            QBL Park, C40
                          </p>
                          <p>7 days ago</p>
                        </div>
                      </div>
                    </div>
                    <span className="tg-themetag tg-featuretag">Premium</span>
                  </article>
                  <article className="advance-search-job">
                    <div className="row no-mrg">
                      <div className="col-md-10 col-sm-10">
                        <Link to="/job-detail" title="job Detail">
                          <div className="advance-search-img-box">
                            <img
                              src="assets/img/com-6.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </div>
                        </Link>
                        <div className="advance-search-caption">
                          <Link to="job-detail" title="Job Dtail">
                            <h4>Product Designer</h4>
                          </Link>
                          <span>Google Ltd</span>
                          <p>
                            <span className="brows-job-sallery icon_and_text">
                              <i className="fa fa-money" />
                              $110 - 200
                            </span>
                          </p>
                          <p>
                            Project DescriptionABOUT THE PROJECT: - Develop and
                            maintain embedded system for Automotive Telematics
                            Control Unit products. We are looking for...
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-2">
                        <a
                          href="javascript:void(0)"
                          data-toggle="modal"
                          data-target="#apply-job"
                          className="btn advance-search app-button"
                          title="apply"
                        >
                          Apply
                        </a>
                        <div className="advance-search-job-locat">
                          <p>
                            <i className="fa fa-map-marker" />
                            QBL Park, C40
                          </p>
                          <p>7 days ago</p>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="advance-search-job">
                    <div className="row no-mrg">
                      <div className="col-md-10 col-sm-10">
                        <Link to="/job-detail" title="job Detail">
                          <div className="advance-search-img-box">
                            <img
                              src="assets/img/com-6.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </div>
                        </Link>
                        <div className="advance-search-caption">
                          <Link to="job-detail" title="Job Dtail">
                            <h4>Product Designer</h4>
                          </Link>
                          <span>Google Ltd</span>
                          <p>
                            <span className="brows-job-sallery icon_and_text">
                              <i className="fa fa-money" />
                              $110 - 200
                            </span>
                          </p>
                          <p>
                            Project DescriptionABOUT THE PROJECT: - Develop and
                            maintain embedded system for Automotive Telematics
                            Control Unit products. We are looking for...
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-2">
                        <a
                          href="javascript:void(0)"
                          data-toggle="modal"
                          data-target="#apply-job"
                          className="btn advance-search app-button"
                          title="apply"
                        >
                          Apply
                        </a>
                        <div className="advance-search-job-locat">
                          <p>
                            <i className="fa fa-map-marker" />
                            QBL Park, C40
                          </p>
                          <p>7 days ago</p>
                        </div>
                      </div>
                    </div>
                    <span className="tg-themetag tg-featuretag">Premium</span>
                  </article>
                  <article className="advance-search-job">
                    <div className="row no-mrg">
                      <div className="col-md-10 col-sm-10">
                        <Link to="/job-detail" title="job Detail">
                          <div className="advance-search-img-box">
                            <img
                              src="assets/img/com-6.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </div>
                        </Link>
                        <div className="advance-search-caption">
                          <Link to="job-detail" title="Job Dtail">
                            <h4>Product Designer</h4>
                          </Link>
                          <span>Google Ltd</span>
                          <p>
                            <span className="brows-job-sallery icon_and_text">
                              <i className="fa fa-money" />
                              $110 - 200
                            </span>
                          </p>
                          <p>
                            Project DescriptionABOUT THE PROJECT: - Develop and
                            maintain embedded system for Automotive Telematics
                            Control Unit products. We are looking for...
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-2">
                        <a
                          href="javascript:void(0)"
                          data-toggle="modal"
                          data-target="#apply-job"
                          className="btn advance-search app-button"
                          title="apply"
                        >
                          Apply
                        </a>
                        <div className="advance-search-job-locat">
                          <p>
                            <i className="fa fa-map-marker" />
                            QBL Park, C40
                          </p>
                          <p>7 days ago</p>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="advance-search-job">
                    <div className="row no-mrg">
                      <div className="col-md-10 col-sm-10">
                        <Link to="/job-detail" title="job Detail">
                          <div className="advance-search-img-box">
                            <img
                              src="assets/img/com-6.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </div>
                        </Link>
                        <div className="advance-search-caption">
                          <Link to="job-detail" title="Job Dtail">
                            <h4>Product Designer</h4>
                          </Link>
                          <span>Google Ltd</span>
                          <p>
                            <span className="brows-job-sallery icon_and_text">
                              <i className="fa fa-money" />
                              $110 - 200
                            </span>
                          </p>
                          <p>
                            Project DescriptionABOUT THE PROJECT: - Develop and
                            maintain embedded system for Automotive Telematics
                            Control Unit products. We are looking for...
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-2">
                        <a
                          href="javascript:void(0)"
                          data-toggle="modal"
                          data-target="#apply-job"
                          className="btn advance-search app-button"
                          title="apply"
                        >
                          Apply
                        </a>
                        <div className="advance-search-job-locat">
                          <p>
                            <i className="fa fa-map-marker" />
                            QBL Park, C40
                          </p>
                          <p>7 days ago</p>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="advance-search-job">
                    <div className="row no-mrg">
                      <div className="col-md-10 col-sm-10">
                        <Link to="/job-detail" title="job Detail">
                          <div className="advance-search-img-box">
                            <img
                              src="assets/img/com-6.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </div>
                        </Link>
                        <div className="advance-search-caption">
                          <Link to="job-detail" title="Job Dtail">
                            <h4>Product Designer</h4>
                          </Link>
                          <span>Google Ltd</span>
                          <p>
                            <span className="brows-job-sallery icon_and_text">
                              <i className="fa fa-money" />
                              $110 - 200
                            </span>
                          </p>
                          <p>
                            Project DescriptionABOUT THE PROJECT: - Develop and
                            maintain embedded system for Automotive Telematics
                            Control Unit products. We are looking for...
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-2">
                        <a
                          href="javascript:void(0)"
                          data-toggle="modal"
                          data-target="#apply-job"
                          className="btn advance-search app-button"
                          title="apply"
                        >
                          Apply
                        </a>
                        <div className="advance-search-job-locat">
                          <p>
                            <i className="fa fa-map-marker" />
                            QBL Park, C40
                          </p>
                          <p>7 days ago</p>
                        </div>
                      </div>
                    </div>
                    <span className="tg-themetag tg-featuretag">Premium</span>
                  </article>
                  <article className="advance-search-job">
                    <div className="row no-mrg">
                      <div className="col-md-10 col-sm-10">
                        <Link to="/job-detail" title="job Detail">
                          <div className="advance-search-img-box">
                            <img
                              src="assets/img/com-6.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </div>
                        </Link>
                        <div className="advance-search-caption">
                          <Link to="job-detail" title="Job Dtail">
                            <h4>Product Designer</h4>
                          </Link>
                          <span>Google Ltd</span>
                          <p>
                            <span className="brows-job-sallery icon_and_text">
                              <i className="fa fa-money" />
                              $110 - 200
                            </span>
                          </p>
                          <p>
                            Project DescriptionABOUT THE PROJECT: - Develop and
                            maintain embedded system for Automotive Telematics
                            Control Unit products. We are looking for...
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-2">
                        <a
                          href="javascript:void(0)"
                          data-toggle="modal"
                          data-target="#apply-job"
                          className="btn advance-search app-button"
                          title="apply"
                        >
                          Apply
                        </a>
                        <div className="advance-search-job-locat">
                          <p>
                            <i className="fa fa-map-marker" />
                            QBL Park, C40
                          </p>
                          <p>7 days ago</p>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="advance-search-job">
                    <div className="row no-mrg">
                      <div className="col-md-10 col-sm-10">
                        <Link to="/job-detail" title="job Detail">
                          <div className="advance-search-img-box">
                            <img
                              src="assets/img/com-6.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </div>
                        </Link>
                        <div className="advance-search-caption">
                          <Link to="job-detail" title="Job Dtail">
                            <h4>Product Designer</h4>
                          </Link>
                          <span>Google Ltd</span>
                          <p>
                            <span className="brows-job-sallery icon_and_text">
                              <i className="fa fa-money" />
                              $110 - 200
                            </span>
                          </p>
                          <p>
                            Project DescriptionABOUT THE PROJECT: - Develop and
                            maintain embedded system for Automotive Telematics
                            Control Unit products. We are looking for...
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-2">
                        <a
                          href="javascript:void(0)"
                          data-toggle="modal"
                          data-target="#apply-job"
                          className="btn advance-search app-button"
                          title="apply"
                        >
                          Apply
                        </a>
                        <div className="advance-search-job-locat">
                          <p>
                            <i className="fa fa-map-marker" />
                            QBL Park, C40
                          </p>
                          <p>7 days ago</p>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="advance-search-job">
                    <div className="row no-mrg">
                      <div className="col-md-10 col-sm-10">
                        <Link to="/job-detail" title="job Detail">
                          <div className="advance-search-img-box">
                            <img
                              src="assets/img/com-6.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </div>
                        </Link>
                        <div className="advance-search-caption">
                          <Link to="job-detail" title="Job Dtail">
                            <h4>Product Designer</h4>
                          </Link>
                          <span>Google Ltd</span>
                          <p>
                            <span className="brows-job-sallery icon_and_text">
                              <i className="fa fa-money" />
                              $110 - 200
                            </span>
                          </p>
                          <p>
                            Project DescriptionABOUT THE PROJECT: - Develop and
                            maintain embedded system for Automotive Telematics
                            Control Unit products. We are looking for...
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-2">
                        <a
                          href="javascript:void(0)"
                          data-toggle="modal"
                          data-target="#apply-job"
                          className="btn advance-search app-button"
                          title="apply"
                        >
                          Apply
                        </a>
                        <div className="advance-search-job-locat">
                          <p>
                            <i className="fa fa-map-marker" />
                            QBL Park, C40
                          </p>
                          <p>7 days ago</p>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="advance-search-job">
                    <div className="row no-mrg">
                      <div className="col-md-10 col-sm-10">
                        <Link to="/job-detail" title="job Detail">
                          <div className="advance-search-img-box">
                            <img
                              src="assets/img/com-6.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </div>
                        </Link>
                        <div className="advance-search-caption">
                          <Link to="job-detail" title="Job Dtail">
                            <h4>Product Designer</h4>
                          </Link>
                          <span>Google Ltd</span>
                          <p>
                            <span className="brows-job-sallery icon_and_text">
                              <i className="fa fa-money" />
                              $110 - 200
                            </span>
                          </p>
                          <p>
                            Project DescriptionABOUT THE PROJECT: - Develop and
                            maintain embedded system for Automotive Telematics
                            Control Unit products. We are looking for...
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-2">
                        <a
                          href="javascript:void(0)"
                          data-toggle="modal"
                          data-target="#apply-job"
                          className="btn advance-search app-button"
                          title="apply"
                        >
                          Apply
                        </a>
                        <div className="advance-search-job-locat">
                          <p>
                            <i className="fa fa-map-marker" />
                            QBL Park, C40
                          </p>
                          <p>7 days ago</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="row">
                <ul className="pagination">
                  <li>
                    <a href="#">«</a>
                  </li>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-ellipsis-h" />
                    </a>
                  </li>
                  <li>
                    <a href="#">»</a>
                  </li>
                </ul>
              </div>
              {/* Ad banner */}
              <div className="row">
                <div className="ad-banner">
                  <img
                    src="http://via.placeholder.com/728x90"
                    className="img-responsive"
                    alt
                  />
                </div>
              </div>
            </div>
            {/* Sidebar Start */}
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
                        alt
                      />
                    </div>
                  </div>
                </div>
                <div className="side-widget">
                  <h2 className="side-widget-title">Compensation</h2>
                  <div className="widget-text padd-0">
                    <ul>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={1} />
                          <label htmlFor={1} />
                        </span>
                        Under $10,000
                        <span className="pull-right">102</span>
                      </li>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={2} />
                          <label htmlFor={2} />
                        </span>
                        $10,000 - $15,000
                        <span className="pull-right">78</span>
                      </li>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={3} />
                          <label htmlFor={3} />
                        </span>
                        $15,000 - $20,000
                        <span className="pull-right">12</span>
                      </li>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={4} />
                          <label htmlFor={4} />
                        </span>
                        $20,000 - $30,000
                        <span className="pull-right">85</span>
                      </li>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={5} />
                          <label htmlFor={5} />
                        </span>
                        $30,000 - $40,000
                        <span className="pull-right">307</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="side-widget">
                  <h2 className="side-widget-title">
                    <a href="#designation" data-toggle="collapse">
                      Designation
                      <i
                        className="pull-right fa fa-angle-double-down"
                        aria-hidden="true"
                      />
                    </a>
                  </h2>
                  <div className="widget-text padd-0 collapse" id="designation">
                    <ul>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={1} />
                          <label htmlFor={1} />
                        </span>
                        Web Designer
                        <span className="pull-right">102</span>
                      </li>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={2} />
                          <label htmlFor={2} />
                        </span>
                        Php Developer
                        <span className="pull-right">78</span>
                      </li>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={3} />
                          <label htmlFor={3} />
                        </span>
                        Project Manager
                        <span className="pull-right">12</span>
                      </li>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={4} />
                          <label htmlFor={4} />
                        </span>
                        Human Resource
                        <span className="pull-right">85</span>
                      </li>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={5} />
                          <label htmlFor={5} />
                        </span>
                        CMS Developer
                        <span className="pull-right">307</span>
                      </li>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={6} />
                          <label htmlFor={6} />
                        </span>
                        App Developer
                        <span className="pull-right">256</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="side-widget">
                  <h2 className="side-widget-title">
                    <a href="#job-location" data-toggle="collapse">
                      Location
                      <i
                        className="pull-right fa fa-angle-double-down"
                        aria-hidden="true"
                      />
                    </a>
                  </h2>
                  <div
                    className="widget-text padd-0 collapse"
                    id="job-location"
                  >
                    <ul>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={1} />
                          <label htmlFor={1} />
                        </span>
                        Mohali
                        <span className="pull-right">102</span>
                      </li>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={2} />
                          <label htmlFor={2} />
                        </span>
                        Chandigarh
                        <span className="pull-right">78</span>
                      </li>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={3} />
                          <label htmlFor={3} />
                        </span>
                        Chennai
                        <span className="pull-right">12</span>
                      </li>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={4} />
                          <label htmlFor={4} />
                        </span>
                        Delhi
                        <span className="pull-right">85</span>
                      </li>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={5} />
                          <label htmlFor={5} />
                        </span>
                        Noida
                        <span className="pull-right">307</span>
                      </li>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={6} />
                          <label htmlFor={6} />
                        </span>
                        Chhatisgarh
                        <span className="pull-right">256</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="side-widget">
                  <h2 className="side-widget-title">
                    <a href="#job-type" data-toggle="collapse">
                      Job type
                      <i
                        className="pull-right fa fa-angle-double-down"
                        aria-hidden="true"
                      />
                    </a>
                  </h2>
                  <div className="widget-text padd-0 collapse" id="job-type">
                    <ul>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={1} />
                          <label htmlFor={1} />
                        </span>
                        Full Time
                        <span className="pull-right">102</span>
                      </li>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={2} />
                          <label htmlFor={2} />
                        </span>
                        Part Time
                        <span className="pull-right">78</span>
                      </li>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={3} />
                          <label htmlFor={3} />
                        </span>
                        Internship
                        <span className="pull-right">12</span>
                      </li>
                      <li>
                        <span className="custom-checkbox">
                          <input type="checkbox" id={4} />
                          <label htmlFor={4} />
                        </span>
                        Freelancer
                        <span className="pull-right">85</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar End */}
          </div>
        </section>
      </Fragment>
    );
  }
}
