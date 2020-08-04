import React from "react";
import Navbar from "./navbar";
import SearchBar from "./searchbar";
import Github from "../api/github";
import Profile from "./profile";
import ReposList from "./reposList";
import Alert from "./alert";
import Footer from "./footer";
import Spinner from "./spinner";

class App extends React.Component {
  state = {
    profile: null,
    repos: null,
    isLoaded: false,
    showAlert: false,
    alertMessage: "",
    showSpinner: false,
  };

  onSearch = async (term) => {
    if (term !== "") {
      this.setState({
        profile: null,
        repos: null,
        isLoaded: false,
        showAlert: false,
        showSpinner: true,
      });

      const ProfileResponse = await Github.get(`/${term}`).catch((e) => {
        this.setState({
          profile: null,
          repos: null,
          isLoaded: false,
          showAlert: true,
          alertMessage: JSON.stringify(e.message),
          showSpinner: false,
        });
      });

      const RepoResponse = await Github.get(`/${term}/repos`, {
        params: {
          per_page: 5,
          sort: "created: asc",
        },
      }).catch((e) => {
        console.log(e);
      });

      if (ProfileResponse && RepoResponse) {
        const Profile = await ProfileResponse.data;
        const Repos = await RepoResponse.data;

        this.setState({
          profile: Profile,
          repos: Repos,
          isLoaded: true,
          showAlert: false,
          showSpinner: false,
        });
      }
    } else {
      this.setState({
        profile: null,
        repos: null,
        isLoaded: false,
        showAlert: false,
        showSpinner: false,
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container searchContainer">
          <Alert
            message={this.state.alertMessage}
            showAlert={this.state.showAlert}
          />
          <SearchBar onSearch={this.onSearch} />
          <Spinner showSpinner={this.state.showSpinner} />
          <Profile user={this.state.profile} isLoaded={this.state.isLoaded} />
          <ReposList repos={this.state.repos} isLoaded={this.state.isLoaded} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
