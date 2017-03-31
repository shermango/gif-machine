import React, { Component } from 'react';
import axios from 'axios';

import GifList from './GifList';
import SearchForm from './SearchForm';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      fetched: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  // property initializer syntax allows for not having to explicitly bind this in constructor for class methods
  // need babel-plugin-transform-class-properties package, included natively in create-react-app
  fetchData = (query = 'doge') => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        this.setState({
          gifs: response.data.data,
          fetched: true
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return(
      <section className="container">
        <header>
          <section className="heading">
            <h1>GIFS RULE EVERYTHING AROUND ME</h1>
            <SearchForm onSearch={this.fetchData} />
          </section>
        </header>
        <main>
          {this.state.fetched &&
          <GifList gifs={this.state.gifs} />           
          }
        </main>
        <footer>
          <p>Made by Shermango Industries</p>
        </footer>
      </section>
    )
  }
};
