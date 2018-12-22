import React, { Fragment } from 'react';

export default class CandidateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <section className="inner-header-title" style={{ backgroundImage: 'url(assets/img/banner-10.jpg)' }}>
          <div className="container">
            <h1>Candidate Profile</h1>
          </div>
        </section>
        <div className="clearfix" />
        {/* Title Header End */}
        {/* Candidate Profile Start */}
        <section className="detail-desc advance-detail-pr gray-bg">
          <div className="container white-shadow">
            <div className="row">
              <div className="detail-pic"><img src="assets/img/can-1.png" className="img" alt /><a href="#" className="detail-edit" title="edit"><i className="fa fa-pencil" /></a></div>
              <div className="detail-status"><span>Active Now</span></div>
            </div>
            <div className="row bottom-mrg">
              <div className="col-md-12 col-sm-12">
                <div className="advance-detail detail-desc-caption">
                  <h4>Daniel Declizer</h4><span className="designation">Web Designer</span>
                  <ul>
                    <li><strong className="j-view">85</strong>New Post</li>
                    <li><strong className="j-applied">110</strong>Job Applied</li>
                    <li><strong className="j-shared">120</strong>Invitation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row no-padd">
              <div className="detail pannel-footer">
                <div className="col-md-5 col-sm-5">
                  <ul className="detail-footer-social">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="#"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
                <div className="col-md-7 col-sm-7">
                  <div className="detail-pannel-footer-btn pull-right"><a href="javascript:void(0)" data-toggle="modal" data-target="#apply-job" className="footer-btn grn-btn" title>Edit Now</a><a href="#" className="footer-btn blu-btn" title>Save Draft</a></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="full-detail-description full-detail gray-bg">
          <div className="container">
            <div className="col-md-12 col-sm-12">
              <div className="full-card">
                <div className="deatil-tab-employ tool-tab">
                  <ul className="nav simple nav-tabs" id="simple-design-tab">
                    <li className="active"><a href="#about">About</a></li>
                    <li><a href="#address">Address</a></li>
                    <li><a href="#matches-job">Matches Job</a></li>
                    <li><a href="#friends">Friends</a></li>
                    <li><a href="#messages">Messages <span className="info-bar">6</span></a></li>
                    <li><a href="#settings">Settings</a></li>
                  </ul>
                  {/* Start All Sec */}
                  <div className="tab-content">
                    <div id="about" className="tab-pane fade in active">
                      <h3>About Adam Declizer</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum sed diam ac fermentum. Mauris nec pellentesque neque. Cras nec diam euismod, congue sapien eu, fermentum libero. Vestibulum quis sem.</p>
                    </div>
                    {/* End About Sec */}
                    {/* Start Address Sec */}
                    <div id="address" className="tab-pane fade">
                      <h3>Address Info</h3>
                      <ul className="job-detail-des">
                        <li><span>Address:</span>SCO 210, Neez Plaza</li>
                        <li><span>City:</span>Mohali</li>
                        <li><span>State:</span>Punjab</li>
                        <li><span>Country:</span>India</li>
                        <li><span>Zip:</span>520 548</li>
                        <li><span>Telephone:</span>+91 123 456 7854</li>
                        <li><span>Fax:</span>(622) 123 456</li>
                        <li><span>Email:</span>youremail@gmail.com</li>
                      </ul>
                    </div>
                    {/* End Address Sec */}
                    {/* Start Job List */}
                    <div id="matches-job" className="tab-pane fade">
                      <h3>Matches-job 122 new job</h3>
                      <div className="row">
                        <article className="advance-search-job">
                          <div className="row no-mrg">
                            <div className="col-md-6 col-sm-6">
                              <a href="new-job-detail" title="job Detail">
                                <div className="advance-search-img-box"><img src="assets/img/com-2.jpg" className="img-responsive" alt /></div>
                              </a>
                              <div className="advance-search-caption"><a href="new-job-detail" title="Job Dtail"><h4>Product Designer</h4></a><span>Google Ltd</span></div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="advance-search-job-locat">
                                <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-sm-2"><a href="javascript:void(0)" data-toggle="modal" data-target="#apply-job" className="btn advance-search" title="apply">Apply</a></div>
                          </div>
                          <span className="tg-themetag tg-featuretag">Premium</span>
                        </article>
                        <article className="advance-search-job">
                          <div className="row no-mrg">
                            <div className="col-md-6 col-sm-6">
                              <a href="new-job-detail" title="job Detail">
                                <div className="advance-search-img-box"><img src="assets/img/com-6.jpg" className="img-responsive" alt /></div>
                              </a>
                              <div className="advance-search-caption"><a href="new-job-detail" title="Job Dtail"><h4>Project Manager</h4></a><span>Vertue Ltd</span></div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="advance-search-job-locat">
                                <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-sm-2"><a href="javascript:void(0)" data-toggle="modal" data-target="#apply-job" className="btn advance-search" title="apply">Apply</a></div>
                          </div>
                        </article>
                        <article className="advance-search-job">
                          <div className="row no-mrg">
                            <div className="col-md-6 col-sm-6">
                              <a href="new-job-detail" title="job Detail">
                                <div className="advance-search-img-box"><img src="assets/img/com-7.jpg" className="img-responsive" alt /></div>
                              </a>
                              <div className="advance-search-caption"><a href="new-job-detail" title="Job Dtail"><h4>Database Designer</h4></a><span>Twitter Ltd</span></div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="advance-search-job-locat">
                                <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-sm-2"><a href="#" className="btn applied advance-search" title="applied"><i className="fa fa-check" aria-hidden="true" />Applied</a></div>
                          </div>
                        </article>
                        <article className="advance-search-job">
                          <div className="row no-mrg">
                            <div className="col-md-6 col-sm-6">
                              <a href="new-job-detail" title="job Detail">
                                <div className="advance-search-img-box"><img src="assets/img/com-2.jpg" className="img-responsive" alt /></div>
                              </a>
                              <div className="advance-search-caption"><a href="new-job-detail" title="Job Dtail"><h4>Product Designer</h4></a><span>Google Ltd</span></div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="advance-search-job-locat">
                                <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-sm-2"><a href="javascript:void(0)" data-toggle="modal" data-target="#apply-job" className="btn advance-search" title="apply">Apply</a></div>
                          </div>
                          <span className="tg-themetag tg-featuretag">Premium</span>
                        </article>
                        <article className="advance-search-job">
                          <div className="row no-mrg">
                            <div className="col-md-6 col-sm-6">
                              <a href="new-job-detail" title="job Detail">
                                <div className="advance-search-img-box"><img src="assets/img/com-5.jpg" className="img-responsive" alt /></div>
                              </a>
                              <div className="advance-search-caption"><a href="new-job-detail" title="Job Dtail"><h4>Human Resource</h4></a><span>Skype Ltd</span></div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="advance-search-job-locat">
                                <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-sm-2"><a href="#" className="btn applied advance-search" title="applied"><i className="fa fa-check" aria-hidden="true" />Applied</a></div>
                          </div>
                        </article>
                        <article className="advance-search-job">
                          <div className="row no-mrg">
                            <div className="col-md-6 col-sm-6">
                              <a href="new-job-detail" title="job Detail">
                                <div className="advance-search-img-box"><img src="assets/img/com-6.jpg" className="img-responsive" alt /></div>
                              </a>
                              <div className="advance-search-caption"><a href="new-job-detail" title="Job Dtail"><h4>Project Manager</h4></a><span>Vertue Ltd</span></div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="advance-search-job-locat">
                                <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-sm-2"><a href="javascript:void(0)" data-toggle="modal" data-target="#apply-job" className="btn advance-search" title="applied">Apply</a></div>
                          </div>
                          <span className="tg-themetag tg-featuretag">Premium</span>
                        </article>
                        <article className="advance-search-job">
                          <div className="row no-mrg">
                            <div className="col-md-6 col-sm-6">
                              <a href="new-job-detail" title="job Detail">
                                <div className="advance-search-img-box"><img src="assets/img/com-7.jpg" className="img-responsive" alt /></div>
                              </a>
                              <div className="advance-search-caption"><a href="new-job-detail" title="Job Dtail"><h4>CEO &amp; Manager</h4></a><span>Twitter</span></div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="advance-search-job-locat">
                                <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-sm-2"><a href="javascript:void(0)" data-toggle="modal" data-target="#apply-job" className="btn advance-search" title="apply">Apply</a></div>
                          </div>
                        </article>
                        <article className="advance-search-job">
                          <div className="row no-mrg">
                            <div className="col-md-6 col-sm-6">
                              <a href="new-job-detail" title="job Detail">
                                <div className="advance-search-img-box"><img src="assets/img/com-4.jpg" className="img-responsive" alt /></div>
                              </a>
                              <div className="advance-search-caption"><a href="new-job-detail" title="Job Dtail"><h4>Product Designer</h4></a><span>Microsoft Ltd</span></div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="advance-search-job-locat">
                                <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-sm-2"><a href="#" className="btn applied advance-search" title="applied"><i className="fa fa-check" aria-hidden="true" />Applied</a></div>
                          </div>
                        </article>
                        <article className="advance-search-job">
                          <div className="row no-mrg">
                            <div className="col-md-6 col-sm-6">
                              <a href="new-job-detail" title="job Detail">
                                <div className="advance-search-img-box"><img src="assets/img/com-3.jpg" className="img-responsive" alt /></div>
                              </a>
                              <div className="advance-search-caption"><a href="new-job-detail" title="Job Dtail"><h4>PHP Developer</h4></a><span>Honda Ltd</span></div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="advance-search-job-locat">
                                <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-sm-2"><a href="javascript:void(0)" data-toggle="modal" data-target="#apply-job" className="btn advance-search" title="apply">Apply</a></div>
                          </div>
                          <span className="tg-themetag tg-featuretag">Premium</span>
                        </article>
                        <article className="advance-search-job">
                          <div className="row no-mrg">
                            <div className="col-md-6 col-sm-6">
                              <a href="new-job-detail" title="job Detail">
                                <div className="advance-search-img-box"><img src="assets/img/com-1.jpg" className="img-responsive" alt /></div>
                              </a>
                              <div className="advance-search-caption"><a href="new-job-detail" title="Job Dtail"><h4>Web Designer</h4></a><span>Autodesk Ltd</span></div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                              <div className="advance-search-job-locat">
                                <p><i className="fa fa-map-marker" />QBL Park, C40</p>
                              </div>
                            </div>
                            <div className="col-md-2 col-sm-2"><a href="#" className="btn applied advance-search" title="applied"><i className="fa fa-check" aria-hidden="true" />Applied</a></div>
                          </div>
                        </article>
                      </div>
                      <div className="row">
                        <ul className="pagination">
                          <li><a href="#">«</a></li>
                          <li className="active"><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">4</a></li>
                          <li><a href="#"><i className="fa fa-ellipsis-h" /></a></li>
                          <li><a href="#">»</a></li>
                        </ul>
                      </div>
                    </div>
                    {/* End Job List */}
                    {/* Start Friend List */}
                    <div id="friends" className="tab-pane fade">
                      <div className="row">
                        <div className="col-md-4 col-sm-4">
                          <div className="manage-cndt">
                            <div className="cndt-status pending">Pending</div>
                            <div className="cndt-caption">
                              <div className="cndt-pic"><img src="assets/img/can-1.png" className="img-responsive" alt /></div>
                              <h4>Charles Hopman</h4><span>Web designer</span>
                              <p>Our analysis team at Megriosft use end to end innovation proces</p>
                            </div><a href="#" title className="cndt-profile-btn">View Profile</a></div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                          <div className="manage-cndt">
                            <div className="cndt-status available">Available</div>
                            <div className="cndt-caption">
                              <div className="cndt-pic"><img src="assets/img/can-2.png" className="img-responsive" alt /></div>
                              <h4>Ethan Marion</h4><span>IOS designer</span>
                              <p>Our analysis team at Megriosft use end to end innovation proces</p>
                            </div><a href="#" title className="cndt-profile-btn">View Profile</a></div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                          <div className="manage-cndt">
                            <div className="cndt-status pending">Pending</div>
                            <div className="cndt-caption">
                              <div className="cndt-pic"><img src="assets/img/can-3.png" className="img-responsive" alt /></div>
                              <h4>Zara Clow</h4><span>UI/UX designer</span>
                              <p>Our analysis team at Megriosft use end to end innovation proces</p>
                            </div><a href="#" title className="cndt-profile-btn">View Profile</a></div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                          <div className="manage-cndt">
                            <div className="cndt-status pending">Pending</div>
                            <div className="cndt-caption">
                              <div className="cndt-pic"><img src="assets/img/can-4.png" className="img-responsive" alt /></div>
                              <h4>Henry Crooks</h4><span>PHP Developer</span>
                              <p>Our analysis team at Megriosft use end to end innovation proces</p>
                            </div><a href="#" title className="cndt-profile-btn">View Profile</a></div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                          <div className="manage-cndt">
                            <div className="cndt-status available">Available</div>
                            <div className="cndt-caption">
                              <div className="cndt-pic"><img src="assets/img/can-2.png" className="img-responsive" alt /></div>
                              <h4>Joseph Macfarlan</h4><span>App Developer</span>
                              <p>Our analysis team at Megriosft use end to end innovation proces</p>
                            </div><a href="#" title className="cndt-profile-btn">View Profile</a></div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                          <div className="manage-cndt">
                            <div className="cndt-status pending">Pending</div>
                            <div className="cndt-caption">
                              <div className="cndt-pic"><img src="assets/img/can-1.png" className="img-responsive" alt /></div>
                              <h4>Zane Joyner</h4><span>Html Expert</span>
                              <p>Our analysis team at Megriosft use end to end innovation proces</p>
                            </div><a href="#" title className="cndt-profile-btn">View Profile</a></div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                          <div className="manage-cndt">
                            <div className="cndt-status pending">Pending</div>
                            <div className="cndt-caption">
                              <div className="cndt-pic"><img src="assets/img/can-3.png" className="img-responsive" alt /></div>
                              <h4>Anna Hoysted</h4><span>UI/UX Designer</span>
                              <p>Our analysis team at Megriosft use end to end innovation proces</p>
                            </div><a href="#" title className="cndt-profile-btn">View Profile</a></div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                          <div className="manage-cndt">
                            <div className="cndt-status available">Available</div>
                            <div className="cndt-caption">
                              <div className="cndt-pic"><img src="assets/img/can-4.png" className="img-responsive" alt /></div>
                              <h4>Spencer Birdseye</h4><span>SEO Expert</span>
                              <p>Our analysis team at Megriosft use end to end innovation proces</p>
                            </div><a href="#" title className="cndt-profile-btn">View Profile</a></div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                          <div className="manage-cndt">
                            <div className="cndt-status pending">Pending</div>
                            <div className="cndt-caption">
                              <div className="cndt-pic"><img src="assets/img/can-1.png" className="img-responsive" alt /></div>
                              <h4>Eden Macaulay</h4><span>Web designer</span>
                              <p>Our analysis team at Megriosft use end to end innovation proces</p>
                            </div><a href="#" title className="cndt-profile-btn">View Profile</a></div>
                        </div>
                      </div>
                      <div className="row">
                        <ul className="pagination">
                          <li><a href="#">«</a></li>
                          <li className="active"><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">4</a></li>
                          <li><a href="#"><i className="fa fa-ellipsis-h" /></a></li>
                          <li><a href="#">»</a></li>
                        </ul>
                      </div>
                    </div>
                    {/* End Friend List */}
                    {/* Start Message */}
                    <div id="messages" className="tab-pane fade">
                      <div className="inbox-body inbox-widget">
                        <div className="mail-card">
                          <header className="card-header cursor-pointer collapsed" data-toggle="collapse" data-target="#full-message" aria-expanded="false">
                            <div className="card-title flexbox">
                              <img className="img-responsive img-circle avatar" src="assets/img/can-1.png" alt="..." />
                              <div>
                                <h6>Daniel Duke</h6>
                                <small>Today at 07:34 AM</small>
                                <small><a className="text-info collapsed" href="#detail-view" data-toggle="collapse" aria-expanded="false">View Detail</a></small>
                                <div className="no-collapsing cursor-text collapse" id="detail-view" aria-expanded="false" style={{ height: 0 }}>
                                  <small className="d-inline-block">From:</small>
                                  <small>theadmin@thetheme.io</small>
                                  <br />
                                  <small className="d-inline-block">To:</small>
                                  <small>subscriber@yahoo.com</small>
                                </div>
                              </div>
                            </div>
                          </header>
                          <div className="collapse" id="full-message" aria-expanded="false" style={{ height: 0 }}>
                            <div className="card-body">
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                          </div>
                        </div>
                        <div className="mail-card unread">
                          <header className="card-header cursor-pointer collapsed" data-toggle="collapse" data-target="#meaages-2" aria-expanded="false">
                            <div className="card-title flexbox">
                              <img className="img-responsive img-circle avatar" src="assets/img/can-2.png" alt="..." />
                              <div>
                                <h6>Daniel Duke</h6>
                                <small>Today at 07:34 AM</small>
                                <small><a className="text-info collapsed" href="#detail-view1" data-toggle="collapse" aria-expanded="false">View Detail</a></small>
                                <div className="no-collapsing cursor-text collapse" id="detail-view1" aria-expanded="false" style={{ height: 0 }}>
                                  <small className="d-inline-block">From:</small>
                                  <small>theadmin@thetheme.io</small>
                                  <br />
                                  <small className="d-inline-block">To:</small>
                                  <small>subscriber@yahoo.com</small>
                                </div>
                              </div>
                            </div>
                          </header>
                          <div className="collapse" id="meaages-2" aria-expanded="false" style={{ height: 0 }}>
                            <div className="card-body">
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                          </div>
                        </div>
                        <div className="mail-card">
                          <header className="card-header cursor-pointer collapsed" data-toggle="collapse" data-target="#meaages-3" aria-expanded="false">
                            <div className="card-title flexbox">
                              <img className="img-responsive img-circle avatar" src="assets/img/can-1.png" alt="..." />
                              <div>
                                <h6>Daniel Duke</h6>
                                <small>Today at 07:34 AM</small>
                                <small><a className="text-info collapsed" href="#detail-view2" data-toggle="collapse" aria-expanded="false">View Detail</a></small>
                                <div className="no-collapsing cursor-text collapse" id="detail-view2" aria-expanded="false" style={{ height: 0 }}>
                                  <small className="d-inline-block">From:</small>
                                  <small>theadmin@thetheme.io</small>
                                  <br />
                                  <small className="d-inline-block">To:</small>
                                  <small>subscriber@yahoo.com</small>
                                </div>
                              </div>
                            </div>
                          </header>
                          <div className="collapse" id="meaages-3" aria-expanded="false" style={{ height: 0 }}>
                            <div className="card-body">
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                          </div>
                        </div>
                        <div className="mail-card">
                          <header className="card-header cursor-pointer collapsed" data-toggle="collapse" data-target="#meaages-4" aria-expanded="false">
                            <div className="card-title flexbox">
                              <img className="img-responsive img-circle avatar" src="assets/img/can-3.png" alt="..." />
                              <div>
                                <h6>Daniel Duke</h6>
                                <small>Today at 07:34 AM</small>
                                <small><a className="text-info collapsed" href="#detail-view3" data-toggle="collapse" aria-expanded="false">View Detail</a></small>
                                <div className="no-collapsing cursor-text collapse" id="detail-view3" aria-expanded="false" style={{ height: 0 }}>
                                  <small className="d-inline-block">From:</small>
                                  <small>theadmin@thetheme.io</small>
                                  <br />
                                  <small className="d-inline-block">To:</small>
                                  <small>subscriber@yahoo.com</small>
                                </div>
                              </div>
                            </div>
                          </header>
                          <div className="collapse" id="meaages-4" aria-expanded="false" style={{ height: 0 }}>
                            <div className="card-body">
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                          </div>
                        </div>
                        <div className="mail-card unread">
                          <header className="card-header cursor-pointer collapsed" data-toggle="collapse" data-target="meaages-5" aria-expanded="false">
                            <div className="card-title flexbox">
                              <img className="img-responsive img-circle avatar" src="assets/img/can-4.png" alt="..." />
                              <div>
                                <h6>Daniel Duke</h6>
                                <small>Today at 07:34 AM</small>
                                <small><a className="text-info collapsed" href="#detail-view4" data-toggle="collapse" aria-expanded="false">View Detail</a></small>
                                <div className="no-collapsing cursor-text collapse" id="detail-view4" aria-expanded="false" style={{ height: 0 }}>
                                  <small className="d-inline-block">From:</small>
                                  <small>theadmin@thetheme.io</small>
                                  <br />
                                  <small className="d-inline-block">To:</small>
                                  <small>subscriber@yahoo.com</small>
                                </div>
                              </div>
                            </div>
                          </header>
                          <div className="collapse" id="meaages-5" aria-expanded="false" style={{ height: 0 }}>
                            <div className="card-body">
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                          </div>
                        </div>
                        <div className="mail-card">
                          <header className="card-header cursor-pointer">
                            <div className="card-title flexbox">
                              <img className="img-responsive img-circle avatar" src="assets/img/can-4.png" alt="..." />
                              <div>
                                <h6>Daniel Duke</h6>
                                <small>Today at 07:34 AM</small>
                                <small><a className="text-info collapsed" href="#detail-view-6" data-toggle="collapse" aria-expanded="false">View Detail</a></small>
                                <div className="no-collapsing cursor-text collapse" id="detail-view-6" aria-expanded="false" style={{ height: 0 }}>
                                  <small className="d-inline-block">From:</small>
                                  <small>theadmin@thetheme.io</small>
                                  <br />
                                  <small className="d-inline-block">To:</small>
                                  <small>subscriber@yahoo.com</small>
                                </div>
                              </div>
                            </div>
                          </header>
                          <div className id="meaages-6">
                            <div className="card-body">
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </p>
                              <hr />
                              <h5 className="text-lighter">
                                <i className="fa fa-paperclip" />
                                <small>Attchments (3)</small>
                              </h5>
                              <div className="attachment-block">
                                <div className="thumb">
                                  <img src="assets/img/gallery1.jpg" alt="img" className="img-responsive" />
                                </div>
                                <div className="attachment-info">
                                  <h6>Profile Pic  <span>( 1.69 mb )</span></h6>
                                  <ul>
                                    <li><a href="javascript:void(0)">Download</a></li>
                                    <li><a href="javascript:void(0)">View</a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="attachment-block">
                                <div className="thumb">
                                  <img src="assets/img/gallery2.jpg" alt="img" className="img-responsive" />
                                </div>
                                <div className="attachment-info">
                                  <h6>Profile Pic  <span>( 1.69 mb )</span></h6>
                                  <ul>
                                    <li><a href="javascript:void(0)">Download</a></li>
                                    <li><a href="javascript:void(0)">View</a></li>
                                  </ul>
                                </div>
                              </div>
                              <div className="attachment-block">
                                <div className="thumb">
                                  <img src="assets/img/gallery3.jpg" alt="img" className="img-responsive" />
                                </div>
                                <div className="attachment-info">
                                  <h6>Profile Pic  <span>( 1.69 mb )</span></h6>
                                  <ul>
                                    <li><a href="javascript:void(0)">Download</a></li>
                                    <li><a href="javascript:void(0)">View</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Message */}
                    {/* Start Settings */}
                    <div id="settings" className="tab-pane fade">
                      <div className="row no-mrg">
                        <h3>Edit Profile</h3>
                        <div className="edit-pro">
                          <div className="col-md-4 col-sm-6">
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="Matthew" />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Middle Name</label>
                            <input type="text" className="form-control" placeholder="Else" />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Dana" />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="dana.mathew@gmail.com" />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Phone</label>
                            <input type="text" className="form-control" placeholder="+91 258 475 6859" />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Zip / Postal</label>
                            <input type="text" className="form-control" placeholder="258 457 528" />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Address</label>
                            <input type="text" className="form-control" placeholder="204 Lowes Alley" />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Address 2</label>
                            <input type="text" className="form-control" placeholder="Software Developer" />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Organization</label>
                            <input type="text" className="form-control" placeholder="Software Developer" />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>City</label>
                            <input type="text" className="form-control" placeholder="Chandigarh" />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>State</label>
                            <input type="text" className="form-control" placeholder="Punjab" />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Country</label>
                            <input type="text" className="form-control" placeholder="India" />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Old Password</label>
                            <input type="password" className="form-control" placeholder="*********" />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>New Password</label>
                            <input type="password" className="form-control" placeholder="*********" />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Old Password</label>
                            <input type="password" className="form-control" placeholder="*********" />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>About you</label>
                            <textarea className="form-control" placeholder="Write Something" defaultValue={""} />
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Upload Profile Pic</label>
                            <form action="http://live.themezhub.com/upload-target" className="dropzone dz-clickable profile-pic">
                              <div className="dz-default dz-message">
                                <i className="fa fa-cloud-upload" />
                                <span>Drop files here to upload</span>
                              </div>
                            </form>
                          </div>
                          <div className="col-md-4 col-sm-6">
                            <label>Upload Profile Cover</label>
                            <form action="http://live.themezhub.com/upload-target" className="dropzone dz-clickable profile-cover">
                              <div className="dz-default dz-message">
                                <i className="fa fa-cloud-upload" />
                                <span>Drop files here to upload</span>
                              </div>
                            </form>
                          </div>
                          <div className="col-sm-12">
                            <button type="button" className="update-btn">Update Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Settings */}
                  </div>
                  {/* Start All Sec */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
