/**
 *
 * FbLoginButton
 *
 */

import React, { memo, useEffect } from 'react';
import { Modal } from 'react-bootstrap'
import FbLoginButton from 'components/FbLoginButton';
import styles from './LoginModal.less';

export interface Props {
  showLoginModal: boolean;
  setShowLoginModal: (showModal: boolean) => void;
}

let RederStatic = null

function LoginModal({ showLoginModal, setShowLoginModal }: Props) {
  
  return <Modal className={styles.loginModal} show={showLoginModal} onHide={() => {setShowLoginModal(false)}}>
    <Modal.Header className={styles.modalContent}>Đăng nhập với Facebook</Modal.Header>
    <Modal.Body className={styles.modalContent}>
      <FbLoginButton hideModal={() => setShowLoginModal(false)} fields="first_name,email,picture" />
      {RederStatic}
    </Modal.Body>
  </Modal>;
}

export default memo(LoginModal);
