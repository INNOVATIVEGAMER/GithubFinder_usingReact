import React from "react";

const RepoElement = ({ repo }) => {
  return (
    <div className="card card-body">
      <div className="row">
        <div className="col-md-6 mt-2">
          <a
            href={repo.html_url}
            target="_blank"
            className="text-decoration-none"
          >
            {repo.name}
          </a>
        </div>
        <div className="col-md-6 mt-2">
          <span className="badge badge-secondary mr-3">
            Forks: {repo.forks}
          </span>
          <span className="badge badge-danger mr-3">
            Watchers: {repo.watchers}
          </span>
          <span className="badge badge-warning mr-3">
            Stars: {repo.startgazers_count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RepoElement;
