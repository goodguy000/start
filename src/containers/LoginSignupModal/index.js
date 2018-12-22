import React from 'react';

export default class LoginSignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="modal fade" id="signup" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="tab" role="tabpanel">
                {/* <!-- Nav tabs --> */}
                <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" className="active"><a href="#login" role="tab" data-toggle="tab">Sign In</a></li>
                  <li role="presentation"><a href="#register" role="tab" data-toggle="tab">Sign Up</a></li>
                </ul>
                {/* <!-- Tab panes --> */}
                <div className="tab-content" id="myModalLabel2">
                  <div role="tabpanel" className="tab-pane fade in active" id="login">
                    <img src="assets/img/logo.png" className="img-responsive" alt="" />
                    <div className="subscribe wow fadeInUp">
                      <form className="form-inline" method="post">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="Username" required="" />
                            <input type="password" name="password" className="form-control" placeholder="Password" required="" />
                            <div className="center">
                              <button type="submit" id="login-btn" className="submit-btn"> Login </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div role="tabpanel" className="tab-pane fade" id="register">
                    <img src="assets/img/logo.png" className="img-responsive" alt="" />
                    <form className="form-inline" method="post">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input type="text" name="email" className="form-control" placeholder="Your Name" required="" />
                          <input type="email" name="email" className="form-control" placeholder="Your Email" required="" />
                          <input type="email" name="email" className="form-control" placeholder="Username" required="" />
                          <input type="password" name="password" className="form-control" placeholder="Password" required="" />
                          <div className="center">
                            <button type="submit" id="subscribe" className="submit-btn"> Create Account </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
