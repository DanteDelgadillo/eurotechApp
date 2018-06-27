import React from "react";

const FormPanel = ({ children, title, color, ...rest }) => {
  return (
    <div className={`panel panel-${color || "info"}`}>
      <div className="panel-heading">
        <div className="panel-title" />
        {title}
      </div>
      <div className="panel-body">{children}</div>
    </div>
  );
};

export default FormPanel;
