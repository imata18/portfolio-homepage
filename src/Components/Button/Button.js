import React from "react";
import { Button } from "@material-ui/core";
const Button = () => {
  return (
    <Button
      className="custom_btn"
      endIcon={icon ? <div className="btn_icon_ctner">{icon}</div> : null}>
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default Button;
