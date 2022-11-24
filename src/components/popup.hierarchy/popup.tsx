import { useState } from "react";
import { useSpring, animated } from 'react-spring';

import "./popup.scss";

const PopupHierarchy = (props: any) => {
  const modal = props.modal
  const toggleModal = props.toggleModal

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: modal ? 1 : 0,
    transform: modal ? `translateY(0%)` : `translateY(-100%)`
  });

  return (
    <>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <animated.div style={animation}>
          <div className="modal-content">
            <div className="popup-title">
              <h2 className="h2-popup-title">adding a worker </h2>
            </div>
            <div className="popup-management">
              <button className="adding-button" onClick={toggleModal}>
                -
              </button>
              <button className="adding-button">
                +
              </button>
                <input
                  className="input-popup-hierarchy"
                  type="email"
                  placeholder="email"
                />
                <input
                  className="input-popup-hierarchy"
                  type="text"
                  placeholder="position"
                />
              </div>
            </div>
            </animated.div>
          </div>
      )}
    </>
  );
}


export default PopupHierarchy;
