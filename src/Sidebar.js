import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src="theindex.svg" className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <button>AUTHORS</button>
          </h4>
          <h4 className="menu-item">
            <button onClick={() => this.props.addAuthorHandler()}>
              + ADD AUTHOR
            </button>
          </h4>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      new_author_id: state.new_author_id
  }
}
export default connect() Sidebar;
