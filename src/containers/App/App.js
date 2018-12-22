import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { push } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import { provideHooks } from 'redial';
import Helmet from 'react-helmet';
import qs from 'qs';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import config from 'config';
import Header from 'components/Header';
import LoginSignupModal from 'containers/LoginSignupModal';
import Footer from 'containers/Footer';

@provideHooks({
  fetch: async ({ store: { dispatch, getState } }) => {
    if (!isAuthLoaded(getState())) {
      await dispatch(loadAuth()).catch(() => null);
    }
    if (!isInfoLoaded(getState())) {
      await dispatch(loadInfo()).catch(() => null);
    }
  }
})
@connect(
  state => ({
    notifs: state.notifs,
    user: state.auth.user
  }),
  { logout, pushState: push }
)
@withRouter
export default class App extends Component {
  static propTypes = {
    route: PropTypes.objectOf(PropTypes.any).isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired,
    user: PropTypes.shape({
      email: PropTypes.string
    }),
    notifs: PropTypes.shape({
      global: PropTypes.array
    }).isRequired,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static defaultProps = {
    user: null
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  static getDerivedStateFromProps(props, state) {
    const { prevProps } = state;
    // Compare the incoming prop to previous prop
    const user = !_.isEqual(prevProps.user, props.user) ? props.user : state.user;

    if (!prevProps.user && props.user) {
      const query = qs.parse(props.location.search, { ignoreQueryPrefix: true });
      props.pushState(query.redirect || '/login-success');
    } else if (prevProps.user && !props.user) {
      // logout
      props.pushState('/');
    }

    return {
      // Store the previous props in state
      prevProps: props,
      user
    };
  }

  state = {
    prevProps: this.props, // eslint-disable-line react/no-unused-state
  };

  componentDidMount() {
    $('#company-brands').owlCarousel({
      items: 5,
      itemsDesktop: [1199, 5],
      itemsDesktopSmall: [979, 4],
      itemsTablet: [768, 3],
      itemsMobile: [600, 2],
      loop: true,
      pagination: false,
      navigation: false,
      navigationText: ['', ''],
      autoPlay: true
    });

    /* --- Client Story testimonial -- */
    $('#client-testimonial-slider').owlCarousel({
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 2],
      itemsTablet: [768, 1],
      pagination: false,
      navigation: false,
      navigationText: ['', ''],
      autoPlay: true
    });

    /* ---Bootstrap wysihtml5 editor -- */
    // $('.textarea').wysihtml5();

    /* ------ Grid Slider ---- */
    $('.grid-slide').slick({
      slidesToShow: 3,
      arrows: false,
      autoplay: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });

    /* ------ Grid Slider ---- */
    $('.grid-slide-2').slick({
      slidesToShow: 2,
      arrows: false,
      autoplay: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });

    /* ---Tab Js -- */
    $('#simple-design-tab a').on('click', e => {
      e.preventDefault();
      $(this).tab('show');
    });

    /* -----Add field Script------ */
    $('.extra-field-box').each(() => {
      const $wrapp = $('.multi-box', this);

      $('.add-field', $(this)).on('click', () => {
        $('.dublicat-box:first-child', $wrapp).clone(true).appendTo($wrapp).find('input').val('').focus();
      });

      $('.dublicat-box .remove-field', $wrapp).on('click', () => {
        if ($('.dublicat-box', $wrapp).length > 1) {
          $(this).parent('.dublicat-box').remove();
        }
      });
    });

    //   Background image ------------------
    const a = $('.bg');
    a.each(a => {
      if ($(this).attr('data-bg')) {
        $(this).css('background-image', 'url(' + $(this).data('bg') + ')');
      }
    });

    $('.slideshow-container').slick({
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      fade: true,
      cssEase: 'ease-in',
      infinite: true,
      speed: 2000
    });


    $('.slideshow-container .slideshow-item').css({
      height: $('.slideshow-container').outerHeight(true)
    });

    $('.slider-container .slider-item').css({
      height: $('.slider-container').outerHeight(true)
    });

    /* ------------Tooltip----------- */
    $('[data-toggle="tooltip"]').tooltip({
      placement: 'top'
    });

    /* ------------Scroll Bar----------- */
    $('#friend-scroll').slimscroll({
      disableFadeOut: true,
      color: '#07b107',
      height: 505
    });

    $('#chat-scroll').slimscroll({
      disableFadeOut: true,
      color: '#07b107',
      height: 400
    });

    // $(window).bind("load resize", function () {
    //   if ($(this).width() < 768) {
    //     $('div.sidebar-collapse').addClass('collapse')
    //   } else {
    //     $('div.sidebar-collapse').removeClass('collapse')
    //   }
    // });

    $('#main-menu').metisMenu();

    // $(window).bind('load resize', () => {
    //   if ($(this).width() < 768) {
    //     $('div.sidebar-collapse').addClass('collapse');
    //   } else {
    //     $('div.sidebar-collapse').removeClass('collapse');
    //   }
    // });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const { route } = this.props;

    require('../../../static/assets/plugins/bootstrap/css/bootstrap.min.css');
    require('../../../static/assets/plugins/bootstrap/css/bootstrap-theme.min.css');
    require('../../../static/assets/plugins/bootstrap/css/bootstrap-select.min.css');
    require('../../../static/assets/plugins/slick-slider/slick.css');
    require('../../../static/assets/plugins/bootstrap/css/bootstrap-wysihtml5.css');
    require('../../../static/assets/plugins/owl-carousel/css/owl.carousel.css');
    require('../../../static/assets/plugins/owl-carousel/css/owl.theme.css');
    require('../../../static/assets/plugins/font-awesome/font-awesome.css');
    require('../../../static/assets/plugins/line-font/line-font.css');
    require('../../../static/assets/plugins/animate/animate.css');
    require('../../../static/assets/css/bootsnav.css');
    require('../../../static/assets/css/style.css');
    require('../../../static/assets/css/responsiveness.css');
    require('../../../static/assets/css/colors/green-style.css');

    return (
      <div>
        <Helmet {...config.app.head} />
        <Header />
        {renderRoutes(route.routes)}
        <Footer />
        <LoginSignupModal />
      </div>
    );
  }
}
