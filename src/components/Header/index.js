import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed navbar-transparent white bootsnav">
        <div className="container">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
            <i className="fa fa-bars" />
          </button>

          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <img src="assets/img/logo-white.png" className="logo logo-display" alt="" />
              <img src="assets/img/logo-white.png" className="logo logo-scrolled" alt="" />
            </Link>
          </div>


          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li className="left-br"><a href="javascript:void(0)" data-toggle="modal" data-target="#signup" className="signin app-button">Sign In</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li className="dropdown megamenu-fw"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Brows</a>
                <ul className="dropdown-menu megamenu-content" role="menu">
                  <li>
                    <div className="row">
                      <div className="col-menu col-md-4">
                        <h6 className="title">Main Pages</h6>
                        <div className="content">
                          <ul className="menu-col">
                            <li><Link to="/">Home Page</Link></li>
                            <li><Link to="search-job">Search Job</Link></li>
                            <li><Link to="contact">Contact Us</Link></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-menu col-md-4">
                        <h6 className="title">For Candidate</h6>
                        <div className="content">
                          <ul className="menu-col">
                            <li><Link to="/browse-company">Browse Companies</Link></li>
                            <li><Link to="create-resume">Create Resume</Link></li>
                            <li><Link to="resume-detail">Resume Detail</Link></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-menu col-md-4">
                        <h6 className="title">For Employer</h6>
                        <div className="content">
                          <ul className="menu-col">
                            <li><Link to="create-job">Create Job</Link></li>
                            <li><Link to="create-company">Create Company</Link></li>
                            <li><Link to="manage-company">Manage Company</Link></li>
                            <li><Link to="browse-resume">Browse Resume</Link></li>
                            <li><Link to="employer-profile">Employer Profile</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
