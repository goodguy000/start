import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getAllCompanies } from 'redux/modules/browseCompany';
import Loading from 'components/Loading';

@connect(
  state => ({
    user: state.auth.user,
    browseCompany: state.browseCompany
  }),
  { getAllCompanies }
)
@withRouter
export default class BrowseCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllCompanies();
  }

  render() {
    const { browseCompany } = this.props;

    if (browseCompany && browseCompany.loading) {
      return <Loading />;
    }

    if (browseCompany && browseCompany.data) {
      const companies = browseCompany.data;

      return (
        <Fragment>
          <section className="inner-header-title" style={{ backgroundImage: 'url(assets/img/banner-10.jpg)' }}>
            <div className="container">
              <h1>Browse Company</h1>
            </div>
          </section>
          <div className="clearfix" />

          <section className="browse-company">
            <div className="container">

              <div className="row extra-mrg">
                <div className="wrap-search-filter">
                  <form>
                    <div className="col-md-4 col-sm-4">
                      <input type="text" className="form-control" placeholder="Keyword: Name, Tag" />
                    </div>
                    <div className="col-md-3 col-sm-3">
                      <input type="text" className="form-control" placeholder="Location: City, State, Zip" />
                    </div>
                    <div className="col-md-2 col-sm-2">
                      <button type="submit" className="btn btn-success full-width app-button">Filter</button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="row extra-mrg">
                {companies.map(company => (
                  <div className="col-md-3 col-sm-6">
                    <Link className="grid-view brows-job-list shadow-item" to={`/company-detail?company=${company.slug}`}>
                      <div className="brows-job-company-img">
                        <img src={company.logo} className="img-responsive" alt="" />
                      </div>
                      <div className="brows-job-position">
                        <h3><a href="job-detail">{company.name}</a></h3>
                        <div className="job-position"><span className="job-num">5 Jobs</span></div>
                      </div>
                      <div className="job-position">
                        <p className="icon_and_text"><i className="fa fa-map-marker" />{company.address[0].city}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="text-center">
                    <Link to="/search-job" className="btn btn-primary app-button button-style">Load More</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      );
    }

    return <h5>Something went wrong, please try again later.</h5>;
  }
}
