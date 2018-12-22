import React, { Fragment } from 'react';

export default class CreateResume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    $('.textarea').wysihtml5();
  }

  render() {
    require('../../../static/assets/plugins/date-dropper/datedropper.css');

    return (
      <Fragment>
        <section className="inner-header-title blank">
          <div className="container">
            <h1>Create Resume</h1>
          </div>
        </section>
        <div className="clearfix" />

        <div className="section detail-desc">
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
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Professional Title" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <select className="form-control input-lg">
                      <option>All Categories</option>
                      <option>Software</option>
                      <option>Hardware</option>
                      <option>Machanical</option>
                      <option>HR/Manager</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-12 col-sm-12">
                  <textarea className="form-control" placeholder="About Notes" />
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
                <h2 className="detail-title">General Information</h2>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-envelope" /></span>
                    <input type="text" className="form-control" placeholder="Email Address" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-phone" /></span>
                    <input type="text" className="form-control" placeholder="Phone Number" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-globe" /></span>
                    <input type="text" className="form-control" placeholder="Website Address" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-map-marker" /></span>
                    <input type="text" className="form-control" placeholder="Location: London UK, Newyork.." />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-birthday-cake" /></span>
                    <input type="text" id="dob" data-lang="en" data-large-mode="true" data-min-year="2017" data-max-year="2020" data-disabled-days="08/17/2017,08/18/2017" data-id="datedropper-0" data-theme="my-style" className="form-control" readonly="" />
                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-flag" /></span>
                    <select className="form-control input-lg">
                      <option>Select Region</option>
                      <option>United Kingdom</option>
                      <option>United State</option>
                      <option>India</option>
                      <option>More Other</option>
                    </select>
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
                <h2 className="detail-title">Resume Content</h2>
                <div className="col-md-12 col-sm-12">
                  <textarea className="form-control textarea" placeholder="About Company" />
                </div>

              </form>
            </div>
            <div className="row bottom-mrg extra-mrg">
              <form>
                <h2 className="detail-title">Add Education</h2>
                <div className="extra-field-box">
                  <div className="multi-box">
                    <div className="dublicat-box">
                      <div className="col-md-12 col-sm-12">
                        <input type="text" className="form-control" placeholder="School Name, e.g. Master Of Technology" />
                      </div>

                      <div className="col-md-12 col-sm-12">
                        <input type="text" className="form-control" placeholder="Qualification, e.g. Master Of Arts" />
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="input-group">
                          <span className="input-group-addon">Date From</span>
                          <input type="text" id="edu-start" data-lang="en" data-large-mode="true" data-min-year="2017" data-max-year="2020" data-disabled-days="08/17/2017,08/18/2017" data-id="datedropper-0" data-theme="my-style" className="form-control" readonly="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="input-group">
                          <span className="input-group-addon">Date To</span>
                          <input type="text" id="edu-end" data-lang="en" data-large-mode="true" data-min-year="2017" data-max-year="2020" data-disabled-days="08/17/2017,08/18/2017" data-id="datedropper-0" data-theme="my-style" className="form-control" readonly="" />
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12">
                        <textarea className="form-control textarea" placeholder="Notes" />
                      </div>

                      <button type="button" className="btn remove-field app-button">Remove</button>
                    </div>
                  </div>
                  <button type="button" className="add-field app-button">Add field</button>
                </div>
              </form>
            </div>

            <div className="row bottom-mrg extra-mrg">
              <form>
                <h2 className="detail-title">Add Experience</h2>
                <div className="extra-field-box">
                  <div className="multi-box">
                    <div className="dublicat-box">
                      <div className="col-md-12 col-sm-12">
                        <input type="text" className="form-control" placeholder="Employer" />
                      </div>

                      <div className="col-md-12 col-sm-12">
                        <input type="text" className="form-control" placeholder="Position, e.g. Web Designer" />
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="input-group">
                          <span className="input-group-addon">Date From</span>
                          <input type="text" id="exp-start" data-lang="en" data-large-mode="true" data-min-year="2017" data-max-year="2020" data-disabled-days="08/17/2017,08/18/2017" data-id="datedropper-0" data-theme="my-style" className="form-control" readonly="" />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="input-group">
                          <span className="input-group-addon">Date To</span>
                          <input type="text" id="exp-end" data-lang="en" data-large-mode="true" data-min-year="2017" data-max-year="2020" data-disabled-days="08/17/2017,08/18/2017" data-id="datedropper-0" data-theme="my-style" className="form-control" readonly="" />
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12">
                        <textarea className="form-control textarea" placeholder="Notes" />
                      </div>

                      <button type="button" className="btn remove-field app-button">Remove</button>
                    </div>
                  </div>
                  <button type="button" className="add-field app-button">Add field</button>
                </div>
              </form>
            </div>

            <div className="row bottom-mrg extra-mrg">
              <form>
                <h2 className="detail-title">Add Skills</h2>
                <div className="extra-field-box">
                  <div className="multi-box">
                    <div className="dublicat-box">

                      <div className="col-md-12 col-sm-12">
                        <input type="text" className="form-control" placeholder="Skills, e.g. Css, Html..." />
                      </div>

                      <div className="col-md-12 col-sm-12">
                        <div className="input-group">
                          <span className="input-group-addon">%</span>
                          <input type="text" className="form-control" placeholder="85%" />
                        </div>
                      </div>

                      <button type="button" className="btn remove-field app-button">Remove</button>
                    </div>
                  </div>
                  <button type="button" className="add-field app-button">Add field</button>
                </div>
              </form>
            </div>
            <div className="row bottom-mrg extra-mrg">
              <form>
                <div className="col-md-12 text-center">
                  <button className="btn btn-success app-button button-style small-btn">Submit your company</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
