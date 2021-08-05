import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './styles/Modal.module.css';


const Backdrop = ({ onClose }) => (<div className={classes.backdrop} onClick={onClose}></div>);

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.context}>{children}</div>
    </div>
  );
};


const Modal = ({ onClose, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, document.getElementById('overlays'))}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, document.getElementById('overlays'))}
    </Fragment>
  );
};

export default Modal;