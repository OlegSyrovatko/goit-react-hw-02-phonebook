import React, { Component } from 'react';

class Filter extends Component {
  state = {
    filter: '',
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
    this.props.onChange(e);
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleChange}
        />
      </>
    );
  }
}

// import React from 'react';

// const Filter = ({ value, onChange }) => (
//   <>
//     Find contacts by name
//     <input
//       type="text"
//       name="filter"
//       value={value}
//       // value={this.state.filter}
//       onChange={onChange}
//       // onChange={this.handleChange}
//     ></input>
//   </>
// );

export default Filter;
