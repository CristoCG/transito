import { Button } from "antd";
import React from "react";

const ButtonsEE = ({ onClick }) => {
  return (
    <>
      <Button type="default" shape="round" size="large" onClick={onClick}>
        Eliminar
      </Button>
    </>
  );
};

export default ButtonsEE;
