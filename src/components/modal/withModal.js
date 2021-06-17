import React from "react";
import ReactDOM from "react-dom";

const WithModal = (Modal) => (Component) => (props) =>
  ReactDOM.createPortal(
    <Modal component={Component} {...props} />,
    document.body
  );

export default WithModal;
