import React, { Fragment } from 'react';

export default class BrowseJobsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <section className="inner-header-title" style={{ backgroundImage: 'url(assets/img/banner-10.jpg)' }}>
          <div className="container">
            <h1>Browse Jobs</h1>
          </div>
        </section>
        <div className="clearfix" />

        <section className="brows-job-category">
          <div className="container">

            <div className="row extra-mrg">
              <div className="wrap-search-filter">
                <form>
                  <div className="col-md-4 col-sm-4">
                    <input type="text" className="form-control" placeholder="Keyword: Name, Tag" />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <input type="text" className="form-control" placeholder="Location: City, State, Zip" />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <select className="selectpicker form-control" multiple title="All Categories">
                      <option>Information Technology</option>
                      <option>Mechanical</option>
                      <option>Hardware</option>
                    </select>

                  </div>
                  <div className="col-md-2 col-sm-2">
                    <button type="submit" className="btn btn-success full-width">Filter</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="row extra-mrg">

              <div className="col-md-4 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img src="assets/img/com-1.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="brows-job-position">
                    <h3><a href="job-detail">Web Developer</a></h3>
                    <p><span>Google</span></p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="full-time">Full Time</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                      </div>
                    </li>
                    <li>
                      <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
                    </li>
                  </ul>
                  <span className="tg-themetag tg-featuretag">Premium</span>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img src="assets/img/com-2.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="brows-job-position">
                    <h3><a href="job-detail">Web Developer</a></h3>
                    <p><span>Google</span></p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="part-time">Part Time</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                      </div>
                    </li>
                    <li>
                      <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img src="assets/img/com-3.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="brows-job-position">
                    <h3><a href="job-detail">Web Developer</a></h3>
                    <p><span>Google</span></p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="freelanc">Freelancer</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                      </div>
                    </li>
                    <li>
                      <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
                    </li>
                  </ul>
                  <span className="tg-themetag tg-featuretag">Premium</span>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img src="assets/img/com-4.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="brows-job-position">
                    <h3><a href="job-detail">Web Developer</a></h3>
                    <p><span>Google</span></p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="enternship">Enternship</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                      </div>
                    </li>
                    <li>
                      <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img src="assets/img/com-5.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="brows-job-position">
                    <h3><a href="job-detail">Web Developer</a></h3>
                    <p><span>Google</span></p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="full-time">Full Time</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                      </div>
                    </li>
                    <li>
                      <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img src="assets/img/com-6.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="brows-job-position">
                    <h3><a href="job-detail">Web Developer</a></h3>
                    <p><span>Google</span></p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="part-time">Part Time</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                      </div>
                    </li>
                    <li>
                      <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
                    </li>
                  </ul>
                  <span className="tg-themetag tg-featuretag">Premium</span>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img src="assets/img/com-7.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="brows-job-position">
                    <h3><a href="job-detail">Web Developer</a></h3>
                    <p><span>Google</span></p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="full-time">Full Time</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                      </div>
                    </li>
                    <li>
                      <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img src="assets/img/com-1.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="brows-job-position">
                    <h3><a href="job-detail">Web Developer</a></h3>
                    <p><span>Google</span></p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="freelanc">Freelancer</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                      </div>
                    </li>
                    <li>
                      <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="grid-view brows-job-list">
                  <div className="brows-job-company-img">
                    <img src="assets/img/com-2.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="brows-job-position">
                    <h3><a href="job-detail">Web Developer</a></h3>
                    <p><span>Google</span></p>
                  </div>
                  <div className="job-position">
                    <span className="job-num">5 Position</span>
                  </div>
                  <div className="brows-job-type">
                    <span className="enternship">Enternship</span>
                  </div>
                  <ul className="grid-view-caption">
                    <li>
                      <div className="brows-job-location">
                        <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                      </div>
                    </li>
                    <li>
                      <p><span className="brows-job-sallery"><i className="fa fa-money" />$110 - 200</span></p>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="row">
              <ul className="pagination">
                <li><a href="#">&laquo;</a></li>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#"><i className="fa fa-ellipsis-h" /></a></li>
                <li><a href="#">&raquo;</a></li>
              </ul>
            </div>

          </div>
        </section>
      </Fragment>
    );
  }
}
