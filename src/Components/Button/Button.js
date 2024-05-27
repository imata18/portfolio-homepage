import React from "react";
import Button from  '@mui/material/Button';

import "./Button.css";
const CustomButton = ({text, icon, onClick}) => {
  return (
    <Button
      className="custom_btn"
      endIcon={icon ? <div className="btn_icon_ctner">{icon}</div> : null}
      onClick={onClick}>
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default CustomButton;
