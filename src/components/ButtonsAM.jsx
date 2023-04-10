import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ButtonsAM = () => {
  return (
    <div className="buttons">
      <div>
        <Button type="default" shape="round" size="large">
          <Link to="/agregar">Agregar</Link>
        </Button>
      </div>
      <div>
        <Button type="default" shape="round" size="large">
          <Link to="/multas">Multas</Link>
        </Button>
      </div>
    </div>
  );
};

export default ButtonsAM;
