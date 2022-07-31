import fadeTopBottom from "../../../animations/fadeTopBottom.module.scss";

const animationTypes = {
  fadeTopBottom: {
    enter: fadeTopBottom.fadeTopBottomEnter,
    enterActive: fadeTopBottom.fadeTopBottomEnterActive,
    exit: fadeTopBottom.fadeTopBottomExit,
    exitActive: fadeTopBottom.fadeTopBottomExitActive,
  },
};

export default animationTypes;
