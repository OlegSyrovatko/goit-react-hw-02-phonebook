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

export default Filter;
