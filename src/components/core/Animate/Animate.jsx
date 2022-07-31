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
}) => {
  return (
    <CSSTransition
      onEnter={onEnter}
      onExit={onExit}
      timeout={timeout}
      in={showsIn}
      unmountOnExit
      classNames={animationTypes[animationType]}
    >
      {children}
    </CSSTransition>
  );
};

export default Animate;
