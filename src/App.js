import React, { Component } from "react";

// Data
import authors from "./data";

import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
// Components

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: authors,
      new_author_id: 1
    };
    this.addAuthor = this.addAuthor.bind(this);
  }

  addAuthor() {
    let new_author = {
      first_name: "Author",
      last_name: `${this.state.new_author_id}`,
      books: [
        {
          title: "New Book",
        }
      ]
    };
    this.setState({
      authors: this.state.authors.concat(new_author),
      new_author_id: this.state.new_author_id + 1
    });
  }
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar addAuthorHandler={this.addAuthor} />
          </div>
          <div className="content col-10">
            <AuthorsList authors={this.state.authors} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auths: state.authors
  };
};
export default connect(mapStateToProps)(App);
