import React, { Component, Fragment } from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  componentDidUpdate() {
    console.log("[Modal.js] DidUpdate");
  }
  render() {
    return (
      <Fragment>
        <Backdrop
          show={this.props.show}
          backdropClicked={this.props.backdropClicked}
        />
        <div
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}
export default Modal;
