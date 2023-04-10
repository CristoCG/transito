import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ButtonInicio = () => {
  return (
    <div className="btnInicio">
      <Button type="default" shape="round" size="large">
        <Link to="/">Inicio</Link>
      </Button>
    </div>
  );
};

export default ButtonInicio;
