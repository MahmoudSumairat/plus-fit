import React, { useRef, useState } from "react";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./select.module.scss";
import { ChevronDown } from "../../../svg";
const { selectContainer, selectDropdown, selectLabel, selectButton, opened } =
  styles;

const getSelectButtonText = (items, defaultValue, placeholder) => {
  if (!defaultValue) {
    return placeholder;
  }

  const buttonText = items.find((item) => item.id === defaultValue);

  return buttonText.title;
};

const Select = ({
  label = "select",
  items = [],
  defaultValue = null,
  placeholder = "select",
  onChange = () => {},
  className = "",
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [selectButtonText, setSelectButtonText] = useState(
    getSelectButtonText(items, value, placeholder)
  );
  const parentRef = useRef();

  const onSelectionChange = (e) => {
    const { id, title } = e;
    setValue(id);
    setSelectButtonText(title);
    onChange(id);
  };

  return (
    <div className={`${selectContainer} ${className} `}>
      <label className={selectLabel}>{label}:</label>
      <Button
        className={`${selectButton} ${showDropdown ? opened : ""} `}
        onClick={() => setShowDropdown(!showDropdown)}
        buttonType="borderDark"
        ref={parentRef}
        icon={<ChevronDown />}
      >
        {selectButtonText}
      </Button>
      <Dropdown
        setShowDropdown={setShowDropdown}
        parentRef={parentRef}
        showDropdown={showDropdown}
        className={selectDropdown}
        options={items}
        onChange={onSelectionChange}
      />
    </div>
  );
};

export default Select;
