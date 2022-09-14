import fadeTopBottom from "../../../animations/fadeTopBottom.module.scss";
import fadeInOut from "../../../animations/fadeInOut.module.scss";

const animationTypes = {
  fadeTopBottom: {
    enter: fadeTopBottom.fadeTopBottomEnter,
    enterActive: fadeTopBottom.fadeTopBottomEnterActive,
    exit: fadeTopBottom.fadeTopBottomExit,
    exitActive: fadeTopBottom.fadeTopBottomExitActive,
  },

  fadeInOut: {
    enter: fadeInOut.fadeInOutEnter,
    enterActive: fadeInOut.fadeInOutEnterActive,
    exit: fadeInOut.fadeInOutExit,
    exitActive: fadeInOut.fadeInOutExitActive,
  },
};

export default animationTypes;
