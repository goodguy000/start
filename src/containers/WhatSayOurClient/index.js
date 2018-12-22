import React from 'react';

export default class WhatSayOurClient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="testimonial" id="testimonial">
        <div className="container">
          <div className="row">
            <div className="main-heading">
              <p>What Say Our Client</p>
              <h2>Our Success <span>Stories</span></h2>
            </div>
          </div>
          {/* <!--/row--> */}
          <div className="row">
            <div id="client-testimonial-slider" className="owl-carousel">
              <div className="client-testimonial">
                <div className="pic">
                  <img src="assets/img/client-1.jpg" alt="" />
                </div>
                <p className="client-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore magna aliqua.
                </p>
                <h3 className="client-testimonial-title">Lacky Mole</h3>
                <ul className="client-testimonial-rating">
                  <li className="fa fa-star-o" />
                  <li className="fa fa-star-o" />
                  <li className="fa fa-star" />
                </ul>
              </div>

              <div className="client-testimonial">
                <div className="pic">
                  <img src="assets/img/client-2.jpg" alt="" />
                </div>
                <p className="client-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore magna aliqua.
                </p>
                <h3 className="client-testimonial-title">Karan Wessi</h3>
                <ul className="client-testimonial-rating">
                  <li className="fa fa-star-o" />
                  <li className="fa fa-star" />
                  <li className="fa fa-star" />
                </ul>
              </div>

              <div className="client-testimonial">
                <div className="pic">
                  <img src="assets/img/client-3.jpg" alt="" />
                </div>
                <p className="client-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore magna aliqua.
                </p>
                <h3 className="client-testimonial-title">Roul Pinchai</h3>
                <ul className="client-testimonial-rating">
                  <li className="fa fa-star-o" />
                  <li className="fa fa-star-o" />
                  <li className="fa fa-star" />
                </ul>
              </div>

              <div className="client-testimonial">
                <div className="pic">
                  <img src="assets/img/client-1.jpg" alt="" />
                </div>
                <p className="client-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore magna aliqua.
                </p>
                <h3 className="client-testimonial-title">Adam Jinna</h3>
                <ul className="client-testimonial-rating">
                  <li className="fa fa-star-o" />
                  <li className="fa fa-star-o" />
                  <li className="fa fa-star" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
