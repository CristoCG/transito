import React, { useEffect, useState } from "react";
import { deleteVehiculo, getPropietarios, getVehiculos } from "../firebase/bdd";

import ButtonsAM from "../components/ButtonsAM";
import CabeceraTabla from "../components/CabeceraTabla";
import ButtonsEE from "../components/ButtonsEE";
import ButtonEditar from "../components/ButtonEditar";

const Home = () => {
  const [vehiculos, setVehiculos] = useState([]);

  const [propietarios, setPropietarios] = useState([]);

  const handleRemove = (placa) => {
    const newVehiculos = vehiculos.filter(
      (vehiculo) => vehiculo.placa !== placa
    );
    setVehiculos(newVehiculos);
    deleteVehiculo(placa);
  };

  useEffect(() => {
    getVehiculos(setVehiculos);
    getPropietarios(setPropietarios);
  }, []);

  return (
    <>
      <div className="container">
        <ButtonsAM />
        <table className="table">
          <thead className="theader">
            <CabeceraTabla />
          </thead>
          <tbody className="tbody">
            {vehiculos?.map((vehiculo) => (
              <tr className="trow">
                <td>{vehiculo?.placa}</td>
                <td>{vehiculo?.marca}</td>
                <td>{vehiculo?.fechaMatricula}</td>
                <td>{vehiculo?.tipoVehiculo}</td>
                <td>
                  {
                    propietarios.find(
                      (propietario) => propietario.placa === vehiculo?.placa
                    )?.nombre
                  }
                </td>
                <td>
                  {
                    propietarios.find(
                      (propietario) => propietario.placa === vehiculo?.placa
                    )?.tipo
                  }
                </td>
                <td>
                  {
                    propietarios.find(
                      (propietario) => propietario.placa === vehiculo?.placa
                    )?.identificacion
                  }
                </td>
                <td>
                  {
                    propietarios.find(
                      (propietario) => propietario.placa === vehiculo?.placa
                    )?.direccion
                  }
                </td>

                <td>
                  <ButtonEditar placa={vehiculo.placa} />
                  <ButtonsEE onClick={() => handleRemove(vehiculo.placa)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
