import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputSearch = () => {
    this.props.onSearch(this.state.term);
  };

  render() {
    return (
      <div className="card border-info text-white search">
        <div className="card-header">
          <h4>Search Github Users</h4>
        </div>
        <div className="card-body">
          <p className="lead">
            Enter username to fetch profile and repos of user
          </p>
          <input
            type="text"
            id="UserName"
            className="form-control border border-primary"
            placeholder="Enter Username..."
            value={this.state.term}
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
            onKeyUp={() => {
              this.onInputSearch();
            }}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
