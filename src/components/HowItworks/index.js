import React from 'react';

export default class HowItWorks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="how-it-works">
        <div className="container">

          <div className="row" data-aos="fade-up">
            <div className="col-md-12">
              <div className="main-heading">
                <p>Working Process</p>
                <h2>How It <span>Works</span></h2>
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-md-4 col-sm-4">
              <div className="working-process">
                <span className="process-img">
                  <img src="assets/img/step-1.png" className="img-responsive" alt="" />
                  <span className="process-num">01</span>
                </span>
                <h4>Create An Account</h4>
                <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <div className="working-process">
                <span className="process-img">
                  <img src="assets/img/step-2.png" className="img-responsive" alt="" />
                  <span className="process-num">02</span>
                </span>
                <h4>Search Jobs</h4>
                <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <div className="working-process">
                <span className="process-img">
                  <img src="assets/img/step-3.png" className="img-responsive" alt="" />
                  <span className="process-num">03</span>
                </span>
                <h4>Save & Apply</h4>
                <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    );
  }
}
