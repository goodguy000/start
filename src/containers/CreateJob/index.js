import React, { Fragment } from 'react';

export default class CreateJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    $('.textarea').wysihtml5();
  }

  render() {
    return (
      <Fragment>
        <section className="inner-header-title blank">
          <div className="container">
            <h1>Create Job</h1>
          </div>
        </section>
        <div className="clearfix" />

        <div className="detail-desc section">
          <div className="container white-shadow">

            <div className="row">
              <div className="detail-pic js">
                <div className="box">
                  <input type="file" name="upload-pic[]" id="upload-pic" className="inputfile" />
                  <label htmlFor="upload-pic"><i className="fa fa-upload" aria-hidden="true" /><span /></label>
                </div>
              </div>
            </div>

            <div className="row bottom-mrg">
              <form className="add-feild">
                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Job Title" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Your Email" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <select className="form-control input-lg">
                      <option>Job Type</option>
                      <option>Full Time</option>
                      <option>Part Time</option>
                      <option>Freelancer</option>
                      <option>Internship</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Location,e.g. London Quel Mark" />
                  </div>
                </div>

                <div className="col-md-12 col-sm-12">
                  <textarea className="form-control" placeholder="Job Description" />
                </div>

              </form>
            </div>

            <div className="row no-padd">
              <div className="detail pannel-footer">
                <div className="col-md-12 col-sm-12">
                  <div className="detail-pannel-footer-btn pull-right">
                    <a href="#" className="footer-btn choose-cover">Choose Cover Image</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <section className="full-detail">
          <div className="container">
            <div className="row bottom-mrg extra-mrg">
              <form>
                <h2 className="detail-title">Company Information</h2>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-flag" /></span>
                    <input type="text" className="form-control" placeholder="Company Name" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-pencil" /></span>
                    <input type="text" className="form-control" placeholder="Company Tagline" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-envelope" /></span>
                    <input type="text" className="form-control" placeholder="Company Email" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-map-marker" /></span>
                    <input type="text" className="form-control" placeholder="Local E.g. It Park New" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-globe" /></span>
                    <input type="text" className="form-control" placeholder="Website" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-birthday-cake" /></span>
                    <input type="text" id="company-dob" data-lang="en" data-large-mode="true" data-min-year="2017" data-max-year="2020" data-disabled-days="08/17/2017,08/18/2017" data-id="datedropper-0" data-theme="my-style" className="form-control" readOnly="" />
                  </div>
                </div>

              </form>
            </div>

            <div className="row bottom-mrg extra-mrg">
              <form>
                <h2 className="detail-title">Social Profile</h2>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-facebook" /></span>
                    <input type="text" className="form-control" placeholder="Profile Link" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-google-plus" /></span>
                    <input type="text" className="form-control" placeholder="Profile Link" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-twitter" /></span>
                    <input type="text" className="form-control" placeholder="Profile Link" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-instagram" /></span>
                    <input type="text" className="form-control" placeholder="Profile Link" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-linkedin" /></span>
                    <input type="text" className="form-control" placeholder="Profile Link" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-dribbble" /></span>
                    <input type="text" className="form-control" placeholder="Profile Link" />
                  </div>
                </div>

              </form>
            </div>

            <div className="row bottom-mrg extra-mrg">
              <form>
                <h2 className="detail-title">Job Responsibilities</h2>
                <div className="col-md-12 col-sm-12">
                  <textarea className="form-control textarea" />
                </div>

                <div className="clearfix" />

                <h2 className="detail-title">Job Requirement</h2>
                <div className="col-md-12 col-sm-12">
                  <textarea className="form-control textarea" />
                </div>

                <div className="clearfix" />

                <h2 className="detail-title">Benefits</h2>
                <div className="col-md-12 col-sm-12">
                  <textarea className="form-control textarea" />
                </div>

                <div className="col-md-12 col-sm-12 m-t-10 justify-c">
                  <button className="btn btn-success small-btn">Create Job</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
