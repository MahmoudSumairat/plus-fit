import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import Animate from "../Animate/Animate";
import styles from "./dropdown.module.scss";

const { dropdownContainer, dropdownList, dropdownItem, dropdownOptionIcon } =
  styles;

const Dropdown = ({
  options,
  showDropdown,
  setShowDropdown,
  parentRef,
  className,
  onChange,
}) => {
  const navigate = useNavigate();

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        parentRef.current &&
        !parentRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    /* eslint-disable */
  }, [wrapperRef]);

  const onItemClick = (option) => {
    setShowDropdown(false);

    if (onChange) {
      return onChange(option);
    }

    if (option.onClick) {
      return option.onClick;
    }

    navigate(option.linkTo, { replace: true });
  };

  return (
    <Animate animationType="fadeTopBottom" showsIn={showDropdown}>
      <div ref={wrapperRef} className={`${dropdownContainer} ${className} `}>
        <ul className={dropdownList}>
          {options.map((option) => {
            return (
              <li
                onClick={() => onItemClick(option)}
                className={dropdownItem}
                key={option.title}
              >
                {!!option.icon && (
                  <option.icon className={dropdownOptionIcon} />
                )}
                {option.title}
              </li>
            );
          })}
        </ul>
      </div>
    </Animate>
  );
};

export default Dropdown;
