import React, { useState } from "react";
import Select from "../core/Select/Select";
import colors from "../../data/lookups/colors";
import sizes from "../../data/lookups/sizes";
import categories from "../../data/lookups/categories";
import brands from "../../data/lookups/brands";

import styles from "./storeFilter.module.scss";

const { storeFilter, storeSelect, range } = styles;

const StoreFilter = ({ filterChange = () => {}, categorySelected = false }) => {
  const [filters, setFilters] = useState({});

  const onFilterChange = (value, name) => {
    const newFilter = { ...filters };
    newFilter[name] = value;
    setFilters(newFilter);
    filterChange(newFilter);
  };

  return (
    <div className={storeFilter}>
      <Select
        onChange={(value) => onFilterChange(value, "color")}
        items={colors}
        placeholder="all"
        label="Color"
        defaultValue={filters.color}
        className={storeSelect}
      />
      {!categorySelected && (
        <Select
          onChange={(value) => onFilterChange(value, "category")}
          items={categories}
          placeholder="all"
          label="Category"
          defaultValue={filters.categories}
          className={storeSelect}
        />
      )}
      <Select
        onChange={(value) => onFilterChange(value, "brand")}
        items={brands}
        placeholder="all"
        label="Brand"
        defaultValue={filters.brand}
        className={storeSelect}
      />
      <Select
        onChange={(value) => onFilterChange(value, "size")}
        items={sizes}
        placeholder="all"
        label="Size"
        defaultValue={filters.size}
        className={storeSelect}
      />
    </div>
  );
};

export default StoreFilter;
