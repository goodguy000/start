import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalVideo from 'react-modal-video';

@connect(state => ({
  online: state.online
}))

export default class VideoIntro extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    require('../../../static/assets/css/modal-video.css');

    return (
      <section className="video-sec dark" id="video" style={{ backgroundImage: 'url(assets/img/banner-10.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="main-heading">
              <p>Best For Your Projects</p>
              <h2>Watch Our <span>video</span></h2>
            </div>
          </div>

          <div className="video-part">
            <a href="javascript:void(0)" className="video-btn" onClick={this.openModal}><i className="fa fa-play" /></a>
          </div>
          <ModalVideo channel="youtube" isOpen={this.state.isOpen} videoId="cUmpJ2zwfVU" onClose={() => this.setState({ isOpen: false })} />
        </div>
      </section>
    );
  }
}
