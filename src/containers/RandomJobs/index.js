import React from 'react';
import { Link } from 'react-router-dom';

export default class RandomJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="main-heading">
              <p>200 New Jobs</p>
              <h2>New & Random <span>Jobs</span></h2>
            </div>
          </div>

          <div className="row extra-mrg">
            <div className="col-md-3 col-sm-6">
              <Link className="grid-view brows-job-list shadow-item" to="/job-detail?job=web-developer">
                <div className="brows-job-company-img">
                  <img src="assets/img/com-1.jpg" className="img-responsive" alt="" />
                </div>
                <div className="brows-job-position">
                  <h3><a href="job-detail">Web Developer</a></h3>
                  <h4>Google</h4>
                </div>
                <div className="job-position">
                  <p className="icon_and_text"><i className="fa fa-map-marker" />QBL Park, C40</p>
                </div>
                <div className="brows-job-type">
                  <span className="part-time">Part Time</span>
                </div>
                <p><span className="brows-job-sallery icon_and_text"><i className="fa fa-money" />$110 - 200</span></p>
              </Link>
            </div>

            <div className="col-md-3 col-sm-6">
              <Link className="grid-view brows-job-list shadow-item" to="/job-detail?job=web-developer">
                <div className="brows-job-company-img">
                  <img src="assets/img/com-2.jpg" className="img-responsive" alt="" />
                </div>
                <div className="brows-job-position">
                  <h3><a href="job-detail">Web Developer</a></h3>
                  <h4>Google</h4>
                </div>
                <div className="job-position">
                  <p className="icon_and_text"><i className="fa fa-map-marker" />QBL Park, C40</p>
                </div>
                <div className="brows-job-type">
                  <span className="freelanc">Freelancer</span>
                </div>
                <div className="brows-job-type">
                  <span className="part-time">Part Time</span>
                </div>
                <p><span className="brows-job-sallery icon_and_text"><i className="fa fa-money" />$110 - 200</span></p>
                <span className="tg-themetag tg-featuretag">Premium</span>
              </Link>
            </div>


            <div className="col-md-3 col-sm-6">
              <Link className="grid-view brows-job-list shadow-item" to="/job-detail?job=web-developer">
                <div className="brows-job-company-img">
                  <img src="assets/img/com-3.jpg" className="img-responsive" alt="" />
                </div>
                <div className="brows-job-position">
                  <h3><a href="job-detail">Web Developer</a></h3>
                  <h4>Google</h4>
                </div>
                <div className="job-position">
                  <p className="icon_and_text"><i className="fa fa-map-marker" />QBL Park, C40</p>
                </div>
                <div className="brows-job-type">
                  <span className="enternship">Enternship</span>
                </div>
                <p><span className="brows-job-sallery icon_and_text"><i className="fa fa-money" />$110 - 200</span></p>
              </Link>
            </div>

            <div className="col-md-3 col-sm-6">
              <Link className="grid-view brows-job-list shadow-item" to="/job-detail?job=web-developer">
                <div className="brows-job-company-img">
                  <img src="assets/img/com-4.jpg" className="img-responsive" alt="" />
                </div>
                <div className="brows-job-position">
                  <h3><a href="job-detail">Web Developer</a></h3>
                  <h4>Google</h4>
                </div>
                <div className="job-position">
                  <p className="icon_and_text"><i className="fa fa-map-marker" />QBL Park, C40</p>
                </div>
                <div className="brows-job-type">
                  <span className="full-time">Full Time</span>
                </div>
                <p><span className="brows-job-sallery icon_and_text"><i className="fa fa-money" />$110 - 200</span></p>
              </Link>
            </div>

            <div className="col-md-3 col-sm-6">
              <Link className="grid-view brows-job-list shadow-item" to="/job-detail?job=web-developer">
                <div className="brows-job-company-img">
                  <img src="assets/img/com-5.jpg" className="img-responsive" alt="" />
                </div>
                <div className="brows-job-position">
                  <h3><a href="job-detail">Web Developer</a></h3>
                  <h4>Google</h4>
                </div>
                <div className="job-position">
                  <p className="icon_and_text"><i className="fa fa-map-marker" />QBL Park, C40</p>
                </div>
                <div className="brows-job-type">
                  <span className="part-time">Part Time</span>
                </div>
                <p><span className="brows-job-sallery icon_and_text"><i className="fa fa-money" />$110 - 200</span></p>
                <span className="tg-themetag tg-featuretag">Premium</span>
              </Link>
            </div>

            <div className="col-md-3 col-sm-6">
              <Link className="grid-view brows-job-list shadow-item" to="/job-detail?job=web-developer">
                <div className="brows-job-company-img">
                  <img src="assets/img/com-6.jpg" className="img-responsive" alt="" />
                </div>
                <div className="brows-job-position">
                  <h3><a href="job-detail">Web Developer</a></h3>
                  <h4>Google</h4>
                </div>
                <div className="job-position">
                  <p className="icon_and_text"><i className="fa fa-map-marker" />QBL Park, C40</p>
                </div>
                <div className="brows-job-type">
                  <span className="full-time">Full Time</span>
                </div>
                <p><span className="brows-job-sallery icon_and_text"><i className="fa fa-money" />$110 - 200</span></p>
              </Link>
            </div>

            <div className="col-md-3 col-sm-6">
              <Link className="grid-view brows-job-list shadow-item" to="/job-detail?job=web-developer">
                <div className="brows-job-company-img">
                  <img src="assets/img/com-7.jpg" className="img-responsive" alt="" />
                </div>
                <div className="brows-job-position">
                  <h3><a href="job-detail">Web Developer</a></h3>
                  <h4>Google</h4>
                </div>
                <div className="job-position">
                  <p className="icon_and_text"><i className="fa fa-map-marker" />QBL Park, C40</p>
                </div>
                <div className="brows-job-type">
                  <span className="freelanc">Freelancer</span>
                </div>
                <p><span className="brows-job-sallery icon_and_text"><i className="fa fa-money" />$110 - 200</span></p>
              </Link>
            </div>

            <div className="col-md-3 col-sm-6">
              <Link className="grid-view brows-job-list shadow-item" to="/job-detail?job=web-developer">
                <div className="brows-job-company-img">
                  <img src="assets/img/com-1.jpg" className="img-responsive" alt="" />
                </div>
                <div className="brows-job-position">
                  <h3><a href="job-detail">Web Developer</a></h3>
                  <h4>Google</h4>
                </div>
                <div className="job-position">
                  <p className="icon_and_text"><i className="fa fa-map-marker" />QBL Park, C40</p>
                </div>
                <div className="brows-job-type">
                  <span className="enternship">Enternship</span>
                </div>
                <p><span className="brows-job-sallery icon_and_text"><i className="fa fa-money" />$110 - 200</span></p>
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
    );
  }
}
