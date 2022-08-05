import React, { useRef, useState } from "react";
import styles from "./range.module.scss";

const { rangeContainer, rangeWrapper, rangeValue } = styles;

const Range = ({ valueFactor = 100, onChange = () => {} }) => {
  const containerRef = useRef();
  const firstThumbRef = useRef();
  const lastThumbRef = useRef();

  const [firstValue, setFirstValue] = useState(0);
  const [lastValue, setLastValue] = useState(valueFactor);

  let moveTarget;
  const onMouseDown = ({ target, nativeEvent }) => {
    const { id } = target;
    const { current } = firstThumbRef;
    const { width } = current.getBoundingClientRect();
    moveTarget = id === "rangeContainer" ? current : target;
    if (id === "rangeContainer") {
      current.style.left = `${nativeEvent.x - width}px`;
    }
    containerRef.current.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onMouseUp = () => {
    document.removeEventListener("mouseup", onMouseUp);
    containerRef.current.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e) => {
    const { left, width } = containerRef.current.getBoundingClientRect();
    const { width: targetWidth, left: targetLeft } =
      moveTarget.getBoundingClientRect();
    const value = (((targetLeft - left) / width) * valueFactor).toFixed(0);

    console.log(e.x);

    if (
      e.x >= left + targetWidth / 2 &&
      e.x <= left + width + targetWidth / 2
    ) {
      const factor = -0.5;
      moveTarget.style.left = `${e.x + targetWidth * factor - left}px`;
    }

    if (moveTarget.id === "firstThumb") {
      setFirstValue(value);
      onChange({ value, lastValue });
    } else {
      setLastValue(value);
      onChange({ firstValue, value });
    }
  };

  const getLowestValue = () => {
    return +firstValue < +lastValue ? firstValue : lastValue;
  };
  const getHighestValue = () => {
    return +firstValue > +lastValue ? firstValue : lastValue;
  };

  return (
    <div className={rangeWrapper}>
      <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        className={rangeContainer}
        id="rangeContainer"
      >
        <span id="firstThumb" ref={firstThumbRef}></span>
        <span id="lastThumb" ref={lastThumbRef}></span>
      </div>
      <span className={rangeValue}>
        from ${getLowestValue()} to ${getHighestValue()}
      </span>
    </div>
  );
};

export default Range;
