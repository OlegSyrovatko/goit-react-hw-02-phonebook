import React from 'react';

const Filter = ({ value, onChange }) => (
  <>
    Find contacts by name
    <input
      type="text"
      name="filter"
      value={value}
      // value={this.state.filter}
      onChange={onChange}
      // onChange={this.handleChange}
    ></input>
  </>
);

export default Filter;
