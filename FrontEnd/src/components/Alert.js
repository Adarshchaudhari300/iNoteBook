import React from "react";

const Alert = (props) => {
  return (
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      {props.message}
    </div>
  );
};

export default Alert;
