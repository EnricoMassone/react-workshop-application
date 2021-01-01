import React, { useState } from "react";

const useDropdown = (label, defaultValue, options) => {
  const [value, setValue] = useState(defaultValue);
  const id = `use-dropdown-${label.toLowerCase().replace(" ", "")}`;

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={e => setValue(e.target.value)}
        disabled={options.length === 0}
      >
        <option>All</option>
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [value, Dropdown, setValue];
};

export default useDropdown;
