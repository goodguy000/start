import React, { Fragment } from 'react';

export default class BrowseResume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <section className="inner-header-title" style={{ backgroundImage: 'url(assets/img/banner-10.jpg)' }}>
          <div className="container">
            <h1>Browse Resume</h1>
          </div>
        </section>
        <div className="clearfix" />
        {/* Title Header End */}
        {/* Browse Resume List Start */}
        <section className="manage-company">
          <div className="container">
            {/* Company Searrch Filter Start */}
            <div className="row extra-mrg">
              <div className="wrap-search-filter">
                <form>
                  <div className="col-md-4 col-sm-4">
                    <input type="text" className="form-control" placeholder="Keyword: Name, Tag" />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <input type="text" className="form-control" placeholder="Location: City, State, Zip" />
                  </div>
                  <div className="col-md-3 col-sm-3">
                    <select className="selectpicker form-control" multiple title="All Categories">
                      <option>Information Technology</option>
                      <option>Mechanical</option>
                      <option>Hardware</option>
                    </select>
                  </div>
                  <div className="col-md-2 col-sm-2">
                    <button type="submit" className="btn btn-success full-width">Filter</button>
                  </div>
                </form>
              </div>
            </div>
            {/* Company Searrch Filter End */}
            <a href="resume-detail" className="item-click">
              <article>
                <div className="brows-resume">
                  <div className="row no-mrg">
                    <div className="col-md-2 col-sm-2">
                      <div className="brows-resume-pic">
                        <img src="assets/img/can-1.png" className="img-responsive" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="brows-resume-name">
                        <h4>Charles Hopman</h4>
                        <span className="brows-resume-designation">App Developer</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="brows-resume-location">
                        <p><i className="fa fa-map-marker" /> Street #210, Make New London</p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <div className="browse-resume-rate">
                        <span><i className="fa fa-money" />$15/hour</span>
                      </div>
                    </div>
                  </div>
                  <div className="row extra-mrg row-skill">
                    <div className="browse-resume-skills">
                      <div className="col-md-9 col-sm-8">
                        <div className="br-resume">
                          <span>css</span><span>html</span><span>photoshop</span><span>wordpress</span>
                          <span>css</span>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="browse-resume-exp">
                          <span className="resume-exp">Exp. 3 Year</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </a>
            <a href="resume-detail" className="item-click">
              <article>
                <div className="brows-resume">
                  <div className="row no-mrg">
                    <div className="col-md-2 col-sm-2">
                      <div className="brows-resume-pic">
                        <img src="assets/img/can-2.png" className="img-responsive" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="brows-resume-name">
                        <h4>Alexander Weir</h4>
                        <span className="brows-resume-designation">IOS Developer</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="brows-resume-location">
                        <p><i className="fa fa-map-marker" /> Saint Paul, MN 55102</p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <div className="browse-resume-rate">
                        <span><i className="fa fa-money" />$14/hour</span>
                      </div>
                    </div>
                  </div>
                  <div className="row extra-mrg row-skill">
                    <div className="browse-resume-skills">
                      <div className="col-md-9 col-sm-8">
                        <div className="br-resume">
                          <span>css</span><span>html</span><span>photoshop</span><span>wordpress</span>
                          <span>css</span>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="browse-resume-exp">
                          <span className="resume-exp">Exp. 2.5 Year</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </a>
            <a href="resume-detail" className="item-click">
              <article>
                <div className="brows-resume">
                  <div className="row no-mrg">
                    <div className="col-md-2 col-sm-2">
                      <div className="brows-resume-pic">
                        <img src="assets/img/can-3.png" className="img-responsive" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="brows-resume-name">
                        <h4>Zara Clow</h4>
                        <span className="brows-resume-designation">Web Designer</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="brows-resume-location">
                        <p><i className="fa fa-map-marker" /> MOLESWORTH VIC 3718</p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <div className="browse-resume-rate">
                        <span><i className="fa fa-money" />$16/hour</span>
                      </div>
                    </div>
                  </div>
                  <div className="row extra-mrg row-skill">
                    <div className="browse-resume-skills">
                      <div className="col-md-9 col-sm-8">
                        <div className="br-resume">
                          <span>css</span><span>html</span><span>photoshop</span><span>wordpress</span>
                          <span>css</span>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="browse-resume-exp">
                          <span className="resume-exp">Exp. 4 Year</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </a>
            <a href="resume-detail" className="item-click">
              <article>
                <div className="brows-resume">
                  <div className="row no-mrg">
                    <div className="col-md-2 col-sm-2">
                      <div className="brows-resume-pic">
                        <img src="assets/img/can-4.png" className="img-responsive" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="brows-resume-name">
                        <h4>Finn Osman</h4>
                        <span className="brows-resume-designation">App Developer</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="brows-resume-location">
                        <p><i className="fa fa-map-marker" /> JOHANNA VIC 3238</p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <div className="browse-resume-rate">
                        <span><i className="fa fa-money" />$15.5/hour</span>
                      </div>
                    </div>
                  </div>
                  <div className="row extra-mrg row-skill">
                    <div className="browse-resume-skills">
                      <div className="col-md-9 col-sm-8">
                        <div className="br-resume">
                          <span>css</span><span>html</span><span>photoshop</span><span>wordpress</span>
                          <span>css</span>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="browse-resume-exp">
                          <span className="resume-exp">Exp. 3.2 Year</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </a>
            <a href="resume-detail" className="item-click">
              <article>
                <div className="brows-resume">
                  <div className="row no-mrg">
                    <div className="col-md-2 col-sm-2">
                      <div className="brows-resume-pic">
                        <img src="assets/img/can-5.png" className="img-responsive" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="brows-resume-name">
                        <h4>Zane Joyner</h4>
                        <span className="brows-resume-designation">PHP Developer</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="brows-resume-location">
                        <p><i className="fa fa-map-marker" /> DOYLES CREEK NSW 2330</p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <div className="browse-resume-rate">
                        <span><i className="fa fa-money" />$16/hour</span>
                      </div>
                    </div>
                  </div>
                  <div className="row extra-mrg row-skill">
                    <div className="browse-resume-skills">
                      <div className="col-md-9 col-sm-8">
                        <div className="br-resume">
                          <span>css</span><span>html</span><span>photoshop</span><span>wordpress</span>
                          <span>css</span>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="browse-resume-exp">
                          <span className="resume-exp">Exp. 4 Year</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </a>
            <a href="resume-detail" className="item-click">
              <article>
                <div className="brows-resume">
                  <div className="row no-mrg">
                    <div className="col-md-2 col-sm-2">
                      <div className="brows-resume-pic">
                        <img src="assets/img/can-1.png" className="img-responsive" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="brows-resume-name">
                        <h4>Henry Crooks</h4>
                        <span className="brows-resume-designation">UI/UX Designer</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="brows-resume-location">
                        <p><i className="fa fa-map-marker" /> SOUTHERN BROOK WA 6401</p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <div className="browse-resume-rate">
                        <span><i className="fa fa-money" />$18/hour</span>
                      </div>
                    </div>
                  </div>
                  <div className="row extra-mrg row-skill">
                    <div className="browse-resume-skills">
                      <div className="col-md-9 col-sm-8">
                        <div className="br-resume">
                          <span>css</span><span>html</span><span>photoshop</span><span>wordpress</span>
                          <span>css</span>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="browse-resume-exp">
                          <span className="resume-exp">Exp. 5 Year</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </a>
            <a href="resume-detail" className="item-click">
              <article>
                <div className="brows-resume">
                  <div className="row no-mrg">
                    <div className="col-md-2 col-sm-2">
                      <div className="brows-resume-pic">
                        <img src="assets/img/can-2.png" className="img-responsive" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="brows-resume-name">
                        <h4>Taylah Axon</h4>
                        <span className="brows-resume-designation">Html Expert</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="brows-resume-location">
                        <p><i className="fa fa-map-marker" /> WATERLOO QLD 4673</p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <div className="browse-resume-rate">
                        <span><i className="fa fa-money" />$18/hour</span>
                      </div>
                    </div>
                  </div>
                  <div className="row extra-mrg row-skill">
                    <div className="browse-resume-skills">
                      <div className="col-md-9 col-sm-8">
                        <div className="br-resume">
                          <span>css</span><span>html</span><span>photoshop</span><span>wordpress</span>
                          <span>css</span>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="browse-resume-exp">
                          <span className="resume-exp">Exp. 4.5 Year</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </a>
            <a href="resume-detail" className="item-click">
              <article>
                <div className="brows-resume">
                  <div className="row no-mrg">
                    <div className="col-md-2 col-sm-2">
                      <div className="brows-resume-pic">
                        <img src="assets/img/can-3.png" className="img-responsive" alt="" />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="brows-resume-name">
                        <h4>Adam Gillwist</h4>
                        <span className="brows-resume-designation">App Developer</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                      <div className="brows-resume-location">
                        <p><i className="fa fa-map-marker" /> Street #210, Make New London</p>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <div className="browse-resume-rate">
                        <span><i className="fa fa-money" />$15/hour</span>
                      </div>
                    </div>
                  </div>
                  <div className="row extra-mrg row-skill">
                    <div className="browse-resume-skills">
                      <div className="col-md-9 col-sm-8">
                        <div className="br-resume">
                          <span>css</span><span>html</span><span>photoshop</span><span>wordpress</span>
                          <span>css</span>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4">
                        <div className="browse-resume-exp">
                          <span className="resume-exp">Exp. 3 Year</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </a>
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
        </section>
      </Fragment>
    );
  }
}
