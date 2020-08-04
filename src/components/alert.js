import React from "react";

const Alert = ({ message, showAlert }) => {
  if (message === '"Request failed with status code 404"') {
    message = '"USER NOT FOUND!!!"';
  }
  if (showAlert) {
    return (
      <div className="alert alert-danger">
        {message.substr(1, message.length - 2)}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Alert;
