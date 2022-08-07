import React from "react";
import { CSSTransition } from "react-transition-group";
import animationTypes from "./animationTypes";

const Animate = ({
  showsIn,
  onEnter,
  onExit,
  timeout = 200,
  animationType,
  children,
  switchTransition = false,
}) => {
  return (
    <CSSTransition
      onEnter={onEnter}
      onExit={onExit}
      timeout={timeout}
      in={showsIn}
      unmountOnExit
      classNames={animationTypes[animationType]}
      addEndListener={(node, done) => {
        return switchTransition
          ? node.addEventListener("transitionend", done, false)
          : null;
      }}
    >
      {children}
    </CSSTransition>
  );
};

export default Animate;
