import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class BrowseJobs extends React.Component {
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
                    <button type="submit" className="btn btn-primary">Filter</button>
                  </div>
                </form>
              </div>
            </div>


            <div className="item-click">
              <article>
                <div className="brows-job-list">
                  <div className="col-md-1 col-sm-2 small-padding">
                    <div className="brows-job-company-img">
                      <a href="job-detail"><img src="assets/img/com-1.jpg" className="img-responsive" alt="" /></a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-5">
                    <div className="brows-job-position">
                      <a href="job-apply-detail"><h3>Digital Marketing Manager</h3></a>
                      <p>
                        <span>Autodesk</span><span className="brows-job-sallery"><i className="fa fa-money" />$750 - 800</span>
                        <span className="job-type cl-success bg-trans-success">Full Time</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="brows-job-location">
                      <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <div className="brows-job-link">
                      <a href="job-apply-detail" className="btn btn-default">Apply Now</a>
                    </div>
                  </div>
                </div>
                <span className="tg-themetag tg-featuretag">Premium</span>
              </article>
            </div>

            <div className="item-click">
              <article>
                <div className="brows-job-list">
                  <div className="col-md-1 col-sm-2 small-padding">
                    <div className="brows-job-company-img">
                      <a href="job-detail"><img src="assets/img/com-2.jpg" className="img-responsive" alt="" /></a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-5">
                    <div className="brows-job-position">
                      <a href="job-apply-detail"><h3>Compensation Analyst</h3></a>
                      <p>
                        <span>Google</span><span className="brows-job-sallery"><i className="fa fa-money" />$810 - 900</span>
                        <span className="job-type bg-trans-warning cl-warning">Part Time</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="brows-job-location">
                      <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <div className="brows-job-link">
                      <a href="job-apply-detail" className="btn btn-default">Apply Now</a>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="item-click">
              <article>
                <div className="brows-job-list">
                  <div className="col-md-1 col-sm-2 small-padding">
                    <div className="brows-job-company-img">
                      <a href="job-detail"><img src="assets/img/com-3.jpg" className="img-responsive" alt="" /></a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-5">
                    <div className="brows-job-position">
                      <a href="job-apply-detail"><h3>Investment Banker</h3></a>
                      <p>
                        <span>Honda</span><span className="brows-job-sallery"><i className="fa fa-money" />$800 - 910</span>
                        <span className="job-type bg-trans-primary cl-primary">Freelancer</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="brows-job-location">
                      <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <div className="brows-job-link">
                      <a href="job-apply-detail" className="btn btn-default">Apply Now</a>
                    </div>
                  </div>
                </div>
                <span className="tg-themetag tg-featuretag">Premium</span>
              </article>
            </div>

            <div className="item-click">
              <article>
                <div className="brows-job-list">
                  <div className="col-md-1 col-sm-2 small-padding">
                    <div className="brows-job-company-img">
                      <a href="job-detail"><img src="assets/img/com-3.jpg" className="img-responsive" alt="" /></a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-5">
                    <div className="brows-job-position">
                      <a href="job-apply-detail"><h3>Financial Analyst</h3></a>
                      <p>
                        <span>Microsoft</span><span className="brows-job-sallery"><i className="fa fa-money" />$580 - 600</span>
                        <span className="job-type bg-trans-success cl-success">Full Time</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="brows-job-location">
                      <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <div className="brows-job-link">
                      <a href="job-apply-detail" className="btn btn-default">Apply Now</a>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="item-click">
              <article>
                <div className="brows-job-list">
                  <div className="col-md-1 col-sm-2 small-padding">
                    <div className="brows-job-company-img">
                      <a href="job-detail"><img src="assets/img/com-4.jpg" className="img-responsive" alt="" /></a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-5">
                    <div className="brows-job-position">
                      <a href="job-apply-detail"><h3>Service Representative</h3></a>
                      <p>
                        <span>Autodesk</span><span className="brows-job-sallery"><i className="fa fa-money" />$800 - 900</span>
                        <span className="job-type bg-trans-denger cl-danger">Enternship</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="brows-job-location">
                      <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <div className="brows-job-link">
                      <a href="job-apply-detail" className="btn btn-default">Apply Now</a>
                    </div>
                  </div>
                </div>
                <span className="tg-themetag tg-featuretag">Premium</span>
              </article>
            </div>

            <div className="item-click">
              <article>
                <div className="brows-job-list">
                  <div className="col-md-1 col-sm-2 small-padding">
                    <div className="brows-job-company-img">
                      <a href="job-detail"><img src="assets/img/com-5.jpg" className="img-responsive" alt="" /></a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-5">
                    <div className="brows-job-position">
                      <a href="job-apply-detail"><h3>Chief Executive Officer</h3></a>
                      <p>
                        <span>Google</span><span className="brows-job-sallery"><i className="fa fa-money" />$510 - 700</span>
                        <span className="job-type bg-trans-success cl-success">Full Time</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="brows-job-location">
                      <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <div className="brows-job-link">
                      <a href="job-apply-detail" className="btn btn-default">Apply Now</a>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="item-click">
              <article>
                <div className="brows-job-list">
                  <div className="col-md-1 col-sm-2 small-padding">
                    <div className="brows-job-company-img">
                      <a href="job-detail"><img src="assets/img/com-6.jpg" className="img-responsive" alt="" /></a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-5">
                    <div className="brows-job-position">
                      <a href="job-apply-detail"><h3>Administrative Manager</h3></a>
                      <p>
                        <span>Honda</span><span className="brows-job-sallery"><i className="fa fa-money" />$700 - 800</span>
                        <span className="job-type bg-trans-warning cl-warning">Part Time</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <div className="brows-job-location">
                      <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                    </div>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <div className="brows-job-link">
                      <a href="job-apply-detail" className="btn btn-default">Apply Now</a>
                    </div>
                  </div>
                </div>
                <span className="tg-themetag tg-featuretag">Premium</span>
              </article>
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
