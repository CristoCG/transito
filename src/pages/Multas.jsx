import React, { useEffect, useState } from "react";
import { getMultas } from "../firebase/bdd";
import { Link } from "react-router-dom";
import { Button } from "antd";
import ButtonInicio from "../components/ButtonInicio";

const Multas = () => {
  const [multas, setMultas] = useState([]);

  useEffect(() => {
    getMultas(setMultas);
  }, []);

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h1>Multas</h1>
      </div>

      <div style={{ display: "inline-flex" }}>
        <div style={{ padding: "10px" }}>
          <ButtonInicio />
        </div>

        <div style={{ padding: "10px" }}>
          <Button type="default" shape="round" size="large">
            <Link to="/agregarMultas">Agregar</Link>
          </Button>
        </div>
      </div>
      <table className="table">
        <thead className="theader">
          <tr>
            <th>Fecha</th>
            <th>Placa</th>
            <th>Hecha por:</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {multas?.map((multa) => (
            <tr>
              <td>{multa?.fecha}</td>

              <td>{multa?.placa}</td>

              <td>{multa?.realizada}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Multas;
