import React, { Component } from 'react';

export default class SearchForm extends Component {
  state = {
    searchQuery: ''
  }

  // onSearchChange = (event) => {
  //   this.setState({
  //     searchQuery: event.target.value
  //   });
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.query.value);
    event.currentTarget.reset();
  }

  // in the input form we us a ref attribute to keep track of the query, instead of just using local state
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="search" style={{display: 'none'}}>Search</label>
        <input type="text" 
               className="search-form"
               placeholder="Search for Gifs!"
               // onChange={this.onSearchChange}
               ref={(input) => this.query = input}
               />
      </form>
    )
  }
};