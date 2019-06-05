/**
 *
 * FbLoginButton
 *
 */

import React, { memo, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginError } from 'containers/App/actions';
export interface Props {
  fields: String;
  hideModal: () => void;
}

function FbLoginButton({fields, hideModal} : Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    (window as any).fbAsyncInit = function() {
      // FB.init({appId: '2380385918859184', status: true, cookie: true, xfbml: true, version: "v3.3"})
      FB.Event.subscribe('auth.statusChange', function(response){
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
        
      })
    };
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {d.getElementById(id).remove()}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.3&appId=2380385918859184";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
  }, [])
  return <div id="fb-login-button" className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-auto-logout-link="false" data-use-continue-as="true"></div>;
}

export default memo(FbLoginButton);
