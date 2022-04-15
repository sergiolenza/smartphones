import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  cursor: pointer;
  outline: none;
  padding: 8px;
  border: 2px solid #132337;
  border-radius: 4px;
  font-size: 16px;
  background: white;
  color: #132337;
  font-weight: 800;
  height: 40px;
  :hover {
    border: 2px solid #132337;
  }
`;

const Select = ({ name, options, value, onChange }) => {
  const handleChange = (ev) => {
    onChange(Number(ev.target.value));
  };
  return (
    <StyledSelect
      name={name}
      value={value}
      onChange={handleChange}
      role="listbox"
      aria-label={`select-${name}`}
    >
      {options.map(({ code, name: label }) => {
        return (
          <option key={code} value={code}>
            {label}
          </option>
        );
      })}
    </StyledSelect>
  );
};

export default Select;
