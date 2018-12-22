import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class BrowseCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <section className="inner-header-title" style={{ backgroundImage: 'url(assets/img/banner-10.jpg)' }}>
          <div className="container">
            <h1>Browse Company</h1>
          </div>
        </section>
        <div className="clearfix" />

        <section className="browse-company">
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
                  <div className="col-md-2 col-sm-2">
                    <button type="submit" className="btn btn-success full-width app-button">Filter</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="row extra-mrg">
              <div className="col-md-3 col-sm-6">
                <Link className="grid-view brows-job-list shadow-item" to="/company-detail/netobjex">
                  <div className="brows-job-company-img">
                    <img src="assets/img/com-1.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="brows-job-position">
                    <h3><a href="job-detail">Google</a></h3>
                    <div className="job-position"><span className="job-num">5 Jobs</span></div>
                  </div>
                  <div className="job-position">
                    <p className="icon_and_text"><i className="fa fa-map-marker" />QBL Park, C40</p>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-6">
                <Link className="grid-view brows-job-list shadow-item" to="/company-detail/netobjex">
                  <div className="brows-job-company-img">
                    <img src="assets/img/com-2.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="brows-job-position">
                    <h3><a href="job-detail">Google</a></h3>
                    <div className="job-position"><span className="job-num">5 Position</span></div>
                  </div>
                  <div className="job-position">
                    <p className="icon_and_text"><i className="fa fa-map-marker" />QBL Park, C40</p>
                  </div>
                  <span className="tg-themetag tg-featuretag">Premium</span>
                </Link>
              </div>


              <div className="col-md-3 col-sm-6">
                <Link className="grid-view brows-job-list shadow-item" to="/company-detail/netobjex">
                  <div className="brows-job-company-img">
                    <img src="assets/img/com-3.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="brows-job-position">
                    <h3><a href="job-detail">Google</a></h3>
                    <div className="job-position"><span className="job-num">5 Position</span></div>
                  </div>
                  <div className="job-position">
                    <p className="icon_and_text"><i className="fa fa-map-marker" />QBL Park, C40</p>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-6">
                <Link className="grid-view brows-job-list shadow-item" to="/company-detail/netobjex">
                  <div className="brows-job-company-img">
                    <img src="assets/img/com-4.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="brows-job-position">
                    <h3><a href="job-detail">Google</a></h3>
                    <div className="job-position"><span className="job-num">5 Position</span></div>
                  </div>
                  <div className="job-position">
                    <p className="icon_and_text"><i className="fa fa-map-marker" />QBL Park, C40</p>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-6">
                <Link className="grid-view brows-job-list shadow-item" to="/company-detail/netobjex">
                  <div className="brows-job-company-img">
                    <img src="assets/img/com-5.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="brows-job-position">
                    <h3><a href="job-detail">Google</a></h3>
                    <div className="job-position"><span className="job-num">5 Position</span></div>
                  </div>
                  <div className="job-position">
                    <p className="icon_and_text"><i className="fa fa-map-marker" />QBL Park, C40</p>
                  </div>
                  <span className="tg-themetag tg-featuretag">Premium</span>
                </Link>
              </div>

              <div className="col-md-3 col-sm-6">
                <Link className="grid-view brows-job-list shadow-item" to="/company-detail/netobjex">
                  <div className="brows-job-company-img">
                    <img src="assets/img/com-6.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="brows-job-position">
                    <h3><a href="job-detail">Google</a></h3>
                    <div className="job-position"><span className="job-num">5 Position</span></div>
                  </div>
                  <div className="job-position">
                    <p className="icon_and_text"><i className="fa fa-map-marker" />QBL Park, C40</p>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-6">
                <Link className="grid-view brows-job-list shadow-item" to="/company-detail/netobjex">
                  <div className="brows-job-company-img">
                    <img src="assets/img/com-7.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="brows-job-position">
                    <h3><a href="job-detail">Google</a></h3>
                    <div className="job-position"><span className="job-num">5 Position</span></div>
                  </div>
                  <div className="job-position">
                    <p className="icon_and_text"><i className="fa fa-map-marker" />QBL Park, C40</p>
                  </div>
                </Link>
              </div>

              <div className="col-md-3 col-sm-6">
                <Link className="grid-view brows-job-list shadow-item" to="/company-detail/netobjex">
                  <div className="brows-job-company-img">
                    <img src="assets/img/com-1.jpg" className="img-responsive" alt="" />
                  </div>
                  <div className="brows-job-position">
                    <h3><a href="job-detail">Google</a></h3>
                    <div className="job-position"><span className="job-num">5 Position</span></div>
                  </div>
                  <div className="job-position">
                    <p className="icon_and_text"><i className="fa fa-map-marker" />QBL Park, C40</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="text-center">
                  <Link to="/search-job" className="btn btn-primary app-button button-style">Load More</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
