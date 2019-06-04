/**
 *
 * Section
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSection from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Section() {
  useInjectReducer({ key: 'section', reducer });
  useInjectSaga({ key: 'section', saga, mode: null });

  return (
    <div className="section">
      {/* <!-- container --> */}
      <div className="container">
        {/* <!-- row --> */}
        <div className="row">
          {/* <!-- banner --> */}
          <div className="col-md-4 col-sm-6">
            <a className="banner banner-1" href="#">
              <img src="https://colorlib.com/etc/e-shop/img/banner10.jpg" alt=""></img>
              <div className="banner-caption text-center">
                <h2 className="white-color">NEW COLLECTION</h2>
              </div>
            </a>
          </div>
          {/* <!-- /banner --> */}

          {/* <!-- banner --> */}
          <div className="col-md-4 col-sm-6">
            <a className="banner banner-1" href="#">
              <img src="https://colorlib.com/etc/e-shop/img/banner11.jpg" alt=""></img>
              <div className="banner-caption text-center">
                <h2 className="white-color">NEW COLLECTION</h2>
              </div>
            </a>
          </div>
          {/* <!-- /banner --> */}

          {/* <!-- banner --> */}
          <div className="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
            <a className="banner banner-1" href="#">
              <img src="https://colorlib.com/etc/e-shop/img/banner12.jpg" alt=""></img>
              <div className="banner-caption text-center">
                <h2 className="white-color">NEW COLLECTION</h2>
              </div>
            </a>
          </div>
          {/* <!-- /banner --> */}

        </div>
        {/* <!-- /row --> */}
      </div>
      {/* <!-- /container --> */}
    </div>
  );
}

Section.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  section: makeSelectSection(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Section);
