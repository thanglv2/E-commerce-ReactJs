/**
 *
 * FbLoginButton
 *
 */

import React, { memo, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginError } from 'containers/App/actions';
import styles from './FBLoginButton.less';
import classNames from 'classnames';

export interface Props {
  fields: String;
  hideModal: () => void;
}

const handleLoginSuccess = (response, dispatch, hideModal, fields) => {
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    FB.api('/me', { fields: fields }, (me) => {
      dispatch(loginSuccess(me));
      hideModal();
      (window as any).SessionManager.user = me;
    });
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not our app.
    dispatch(loginError("Please try again"));
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    dispatch(loginError("Please try again"));
  }
}

function FbLoginButton({fields, hideModal} : Props) {
  const dispatch = useDispatch();
  
  return <div className={classNames(styles.loginBtn, styles.loginBtnFB)}
    onClick={() => {FB.login(
      response => {
        handleLoginSuccess(response, dispatch, hideModal, fields)
      }
    )}}>Đăng nhập với Facebook</div>;
}

export default memo(FbLoginButton);
