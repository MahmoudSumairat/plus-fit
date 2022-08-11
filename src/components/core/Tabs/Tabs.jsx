import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import styles from "./tabs.module.scss";
import animationTypes from "../Animate/animationTypes";
const { tabsContainer, tabsHeader, tabContent, tabItem, activeTab } = styles;

const Tabs = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [animationState, setAnimationState] = useState(true);

  return (
    <div className={tabsContainer}>
      <div className={tabsHeader}>
        {tabs.map((tab, index) => {
          const activeTabClass = activeTabIndex === index ? activeTab : "";
          return (
            <span
              key={tab.title}
              onClick={() => {
                setAnimationState(!animationState);
                setActiveTabIndex(index);
              }}
              className={`${tabItem} ${activeTabClass} `}
            >
              {tab.title}
            </span>
          );
        })}
      </div>
      <div className={tabContent}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={animationState}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames={animationTypes.fadeTopBottom}
            unmountOnExit
          >
            {tabs[activeTabIndex].component}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default Tabs;
