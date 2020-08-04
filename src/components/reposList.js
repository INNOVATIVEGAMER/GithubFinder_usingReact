import React from "react";
import RepoListElement from "./repoListElement";

const ReposList = ({ repos, isLoaded }) => {
  if (isLoaded) {
    const FinalRepoList = repos.map((repo) => {
      return <RepoListElement repo={repo} key={repo.id} />;
    });

    return (
      <div>
        <h4 className="bg-light text-white border border-info rounded p-2 pl-3 my-3">
          Latest Repos
        </h4>
        <div id="repos" className="border border-success rounded">
          {FinalRepoList}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ReposList;
