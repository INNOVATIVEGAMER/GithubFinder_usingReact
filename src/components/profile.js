import React from "react";

const Profile = ({ user, isLoaded }) => {
  if (isLoaded) {
    return (
      <div>
        <hr className="bg-white" />
        <div className="card border-success">
          <div
            className="card-header text-center text-white display-3 font-italic"
            id="UsernameHeading"
          >
            {user.name}
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={user.avatar_url}
                  alt="profile image"
                  className="img-fluid w-100 mb-3 border border-white rounded"
                />
                <a
                  href={user.html_url}
                  target="_blank"
                  className="btn btn-block btn-outline-success mb-3"
                >
                  View Profile
                </a>
              </div>
              <div className="col-md-9">
                <div className="mb-4">
                  <span className="badge badge-primary mr-3">
                    Public Repos: {user.public_repos}
                  </span>
                  <span className="badge badge-secondary mr-3">
                    Public Gists: {user.public_gists}
                  </span>
                  <span className="badge badge-danger mr-3">
                    Followers: {user.followers}
                  </span>
                  <span className="badge badge-warning mr-3">
                    Following: {user.following}
                  </span>
                </div>
                <div className="mt-3 border border-success rounded align-self-center">
                  <ul className="list-group">
                    <li className="list-group-item text-white text-capitalize">
                      Company: {user.company}
                    </li>
                    <li className="list-group-item bg-success text-light">
                      Email: {user.email}
                    </li>
                    <li className="list-group-item text-white text-capitalize">
                      Location: {user.location}
                    </li>
                    <li className="list-group-item bg-success text-light">
                      Member Since: {user.created_at}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Profile;
