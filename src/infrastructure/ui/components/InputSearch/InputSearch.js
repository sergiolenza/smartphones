import React from 'react';
import styled from 'styled-components';

const SearchBar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.input`
  outline: none;
  height: 40px;
  padding: 0 8px;
  border-radius: 4px;
  font-size: 16px;
  background: #fbfbfb;
  border: 2px solid #132337;
  border-radius: 4px;
  :focus {
    border: 2px solid #132337;
  }
  ::placeholder {
    color: #132337;
  }
`;

const InputSearch = ({ onChange }) => (
  <SearchBar>
    <Input role="searchbox" type="search" placeholder="Search…" onChange={onChange} autoFocus />
  </SearchBar>
);

export default InputSearch;
