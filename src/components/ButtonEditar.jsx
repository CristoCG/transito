import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ButtonEditar = ({ placa }) => {
  return (
    <Button type="default" shape="round" size="large">
      <Link to={`/editar?${placa}`}>Editar</Link>
    </Button>
  );
};

export default ButtonEditar;
