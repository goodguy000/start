import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <footer className="footer">
        <div className="row lg-menu">
          <div className="container">
            <div className="col-md-4 col-sm-4">
              <img src="assets/img/footer-logo.png" className="img-responsive" alt="" />
            </div>
            <div className="col-md-8 co-sm-8 pull-right">
              <ul>
                <li><Link to="/" title="">Home</Link></li>
                <li><Link to="/blog" title="">Blog</Link></li>
                <li><Link to="/404" title="">404</Link></li>
                <li><Link to="/faq" title="">FAQ</Link></li>
                <li><Link to="/contact" title="">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row no-padding">
          <div className="container">
            <div className="col-md-3 col-sm-12">
              <div className="footer-widget">
                <h3 className="widgettitle widget-title">About Job Stock</h3>
                <div className="textwidget">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                  <p>7860 North Park Place<br />
                    San Francisco, CA 94120</p>
                  <p><strong>Email:</strong> trungnetobjex@gmail.com</p>
                  <p><strong>Call:</strong> <Link to="tel:+15555555555">555-555-1234</Link></p>
                  <ul className="footer-social">
                    <li><Link to="/"><i className="fa fa-facebook" /></Link></li>
                    <li><Link to="/"><i className="fa fa-google-plus" /></Link></li>
                    <li><Link to="/"><i className="fa fa-twitter" /></Link></li>
                    <li><Link to="/"><i className="fa fa-instagram" /></Link></li>
                    <li><Link to="/"><i className="fa fa-linkedin" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <h3 className="widgettitle widget-title">All Navigation</h3>
                <div className="textwidget">
                  <div className="textwidget">
                    <ul className="footer-navigation">
                      <li><Link to="manage-company" title="">Front-end Design</Link></li>
                      <li><Link to="manage-company" title="">Android Developer</Link></li>
                      <li><Link to="manage-company" title="">CMS Development</Link></li>
                      <li><Link to="manage-company" title="">PHP Development</Link></li>
                      <li><Link to="manage-company" title="">IOS Developer</Link></li>
                      <li><Link to="manage-company" title="">Iphone Developer</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <h3 className="widgettitle widget-title">All Categories</h3>
                <div className="textwidget">
                  <ul className="footer-navigation">
                    <li><Link to="manage-company" title="">Front-end Design</Link></li>
                    <li><Link to="manage-company" title="">Android Developer</Link></li>
                    <li><Link to="manage-company" title="">CMS Development</Link></li>
                    <li><Link to="manage-company" title="">PHP Development</Link></li>
                    <li><Link to="manage-company" title="">IOS Developer</Link></li>
                    <li><Link to="manage-company" title="">Iphone Developer</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <h3 className="widgettitle widget-title">Connect Us</h3>
                <div className="textwidget">
                  <form className="footer-form">
                    <input type="text" className="form-control" placeholder="Your Name" />
                    <input type="text" className="form-control" placeholder="Email" />
                    <textarea className="form-control" placeholder="Message" />
                    <button type="submit" className="btn btn-primary">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row copyright">
          <div className="container">
            <p>Copyright Job Stock © 2018. All Rights Reserved </p>
          </div>
        </div>
      </footer>
    );
  }
}
