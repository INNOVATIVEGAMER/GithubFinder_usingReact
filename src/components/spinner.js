import React from "react";

const Spinner = ({ showSpinner }) => {
  if (showSpinner) {
    return (
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border text-success m-5"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Spinner;
