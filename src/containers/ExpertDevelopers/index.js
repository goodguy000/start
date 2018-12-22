import React from 'react';

export default class ExpertDevelopers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="pricing">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-heading">
                <p>Top Freelancer</p>
                <h2>Hire Expert <span>Freelancer</span></h2>
              </div>
            </div>
          </div>
          {/* <!--/row--> */}

          <div className="row">

            {/* <!-- Single Freelancer Style 2 --> */}
            <div className="col-md-4 col-sm-6">
              <div className="freelance-container style-2">
                <div className="freelance-box">
                  <span className="freelance-status">Available</span>
                  <h4 className="flc-rate">$17/hr</h4>
                  <div className="freelance-inner-box">
                    <div className="freelance-box-thumb">
                      <img src="assets/img/can-5.jpg" className="img-responsive img-circle" alt="" />
                    </div>
                    <div className="freelance-box-detail">
                      <h4>Agustin L. Smith</h4>
                      <span className="location">Australia</span>
                    </div>
                    <div className="rattings">
                      <i className="fa fa-star fill" />
                      <i className="fa fa-star fill" />
                      <i className="fa fa-star fill" />
                      <i className="fa fa-star-half fill" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                  <div className="freelance-box-extra">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui.</p>
                    <ul>
                      <li>Php</li>
                      <li>Android</li>
                      <li>Html</li>
                      <li className="more-skill bg-primary">+3</li>
                    </ul>
                  </div>
                  <a href="freelancer-detail" className="btn btn-freelance-two bg-default">View Detail</a>
                  <a href="freelancer-detail" className="btn btn-freelance-two bg-info">View Detail</a>
                </div>
              </div>
            </div>

            {/* <!-- Single Freelancer Style 2 --> */}
            <div className="col-md-4 col-sm-6">
              <div className="freelance-container style-2">
                <div className="freelance-box">
                  <span className="freelance-status bg-warning">At Work</span>
                  <h4 className="flc-rate">$22/hr</h4>
                  <div className="freelance-inner-box">
                    <div className="freelance-box-thumb">
                      <img src="assets/img/can-5.jpg" className="img-responsive img-circle" alt="" />
                    </div>
                    <div className="freelance-box-detail">
                      <h4>Delores R. Williams</h4>
                      <span className="location">United States</span>
                    </div>
                    <div className="rattings">
                      <i className="fa fa-star fill" />
                      <i className="fa fa-star fill" />
                      <i className="fa fa-star fill" />
                      <i className="fa fa-star-half fill" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                  <div className="freelance-box-extra">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui.</p>
                    <ul>
                      <li>Php</li>
                      <li>Android</li>
                      <li>Html</li>
                      <li className="more-skill bg-primary">+3</li>
                    </ul>
                  </div>
                  <a href="freelancer-detail" className="btn btn-freelance-two bg-default">View Detail</a>
                  <a href="freelancer-detail" className="btn btn-freelance-two bg-info">View Detail</a>
                </div>
              </div>
            </div>

            {/* <!-- Single Freelancer Style 2 --> */}
            <div className="col-md-4 col-sm-6">
              <div className="freelance-container style-2">
                <div className="freelance-box">
                  <span className="freelance-status">Available</span>
                  <h4 className="flc-rate">$19/hr</h4>
                  <div className="freelance-inner-box">
                    <div className="freelance-box-thumb">
                      <img src="assets/img/can-5.jpg" className="img-responsive img-circle" alt="" />
                    </div>
                    <div className="freelance-box-detail">
                      <h4>Daniel Disroyer</h4>
                      <span className="location">Bangladesh</span>
                    </div>
                    <div className="rattings">
                      <i className="fa fa-star fill" />
                      <i className="fa fa-star fill" />
                      <i className="fa fa-star fill" />
                      <i className="fa fa-star-half fill" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                  <div className="freelance-box-extra">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui.</p>
                    <ul>
                      <li>Php</li>
                      <li>Android</li>
                      <li>Html</li>
                      <li className="more-skill bg-primary">+3</li>
                    </ul>
                  </div>
                  <a href="freelancer-detail" className="btn btn-freelance-two bg-default">View Detail</a>
                  <a href="freelancer-detail" className="btn btn-freelance-two bg-info">View Detail</a>
                </div>
              </div>
            </div>

          </div>

          {/* <!-- Single Freelancer --> */}
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="text-center">
                <a href="freelancers-2" className="btn btn-primary">Load More</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
