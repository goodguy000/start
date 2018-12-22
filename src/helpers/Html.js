import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';
import config from 'config';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
const Html = ({
  assets, store, content, bundles
}) => {
  const head = Helmet.renderStatic();

  /* eslint-disable react/no-danger */
  return (
    <html lang="en-US">
      <head>
        {head.base.toComponent()}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {head.script.toComponent()}

        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="React Hot" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="React Hot" />
        <meta name="theme-color" content="#3677dd" />
        {/* styles (will be present only in production with webpack extract text plugin) */}
        {assets.styles &&
          Object.keys(assets.styles).map(style => (
            <link
              href={assets.styles[style]}
              key={style}
              media="screen, projection"
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
            />
          ))}

        {/* (will be present only in development mode) */}
        {assets.styles && Object.keys(assets.styles).length === 0 ? (
          <style dangerouslySetInnerHTML={{ __html: '#content{display:none}' }} />
        ) : null}

        <script src="/assets/js/jquery.min.js" />
        <script src="/assets/plugins/bootstrap/js/bootstrap.min.js" />
        <script src="/assets/js/bootsnav.js" />
        <script src="/assets/js/viewportchecker.js" />
        <script src="/assets/plugins/bootstrap/js/bootstrap-select.min.js" />
        <script src="/assets/plugins/bootstrap/js/wysihtml5-0.3.0.js" />
        <script src="/assets/plugins/bootstrap/js/bootstrap-wysihtml5.js" />
        <script src="/assets/plugins/slick-slider/slick.js" />
        <script src="/assets/plugins/date-dropper/datedropper.js" />
        <script src="/assets/plugins/dropzone/js/dropzone.js" />
        <script src="/assets/js/jquery.metisMenu.js" />
        <script src="/assets/js/jquery.slimscroll.js" />
        <script src="/assets/plugins/map/js/gmap3.min.js" />
        <script src="/assets/plugins/owl-carousel/js/owl.carousel.min.js" />
        {/* <script src="/assets/js/custom.js" /> */}
        <script src="/assets/js/jQuery.style.switcher.js" />
      </head>
      <body>
        <div id="content" dangerouslySetInnerHTML={{ __html: content }} />

        {__DLLS__ && <script key="dlls__vendor" src="/dist/dlls/dll__vendor.js" charSet="UTF-8" />}
        {assets.javascript && <script src={assets.javascript.main} charSet="UTF-8" />}
        {bundles.map(bundle => bundle && <script src={config.assetsPath + bundle.file} key={bundle.id} />)}

        {/* (will be present only in development mode) */}
        {assets.styles && Object.keys(assets.styles).length === 0 ? (
          <script dangerouslySetInnerHTML={{ __html: 'document.getElementById("content").style.display="block";' }} />
        ) : null}
      </body>
    </html>
  );
  /* eslint-enable react/no-danger */
};

Html.propTypes = {
  assets: PropTypes.shape({
    styles: PropTypes.object,
    javascript: PropTypes.object
  }),
  bundles: PropTypes.arrayOf(PropTypes.any),
  content: PropTypes.string,
  store: PropTypes.shape({
    getState: PropTypes.func
  }).isRequired
};

Html.defaultProps = {
  assets: {},
  bundles: [],
  content: ''
};

export default Html;
