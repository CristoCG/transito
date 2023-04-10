import React, { useEffect, useState } from "react";
import { Form, Input, Button, message, Select, Card } from "antd"; // Importamos componentes de la librería antd para crear el formulario
import {
  getOnePropietario,
  getOneVehiculo,
  updatePropietario,
  updateVehiculo,
} from "../firebase/bdd";
import ButtonInicio from "../components/ButtonInicio";
import { useLocation } from "react-router-dom";

const Editar = (props) => {
  const { search } = useLocation();

  const placa = search.split("?")[1];

  const [loading, setLoading] = useState(false);

  // Definimos el estado del formulario
  const [form] = Form.useForm();
  const [vehiculo, setVehiculo] = useState({});
  const [propietario, setPropietario] = useState({});

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (values) => {
    const newPropietario = {
      placa: values?.placa?.toUpperCase() || vehiculo?.placa,
      nombre: values?.nombre?.toLocaleUpperCase() || propietario?.nombre,
      identificacion: values?.identificacion || propietario?.identificacion,
      direccion: values?.direccion || propietario?.direccion,
      tipo: values?.tipo || propietario?.tipo,
    };

    const newVehiculo = {
      placa: values?.placa?.toUpperCase() || vehiculo?.placa,
      marca: values?.marca || vehiculo?.marca,
      fechaMatricula: values?.fechaMatricula || vehiculo?.fechaMatricula,
      tipoVehiculo:
        values?.tipoVehiculo?.toLocaleUpperCase() || vehiculo?.tipoVehiculo,
    };

    // Aquí podríamos hacer la lógica para guardar los datos en una base de datos u otro tipo de almacenamiento
    updateVehiculo(vehiculo.id, newVehiculo, setLoading);
    updatePropietario(propietario.id, newPropietario, setLoading);
    message.success("El propietario ha sido editado exitosamente.");
    form.resetFields(); // Reseteamos el formulario
  };

  useEffect(() => {
    getOneVehiculo(setVehiculo, placa, setLoading);
    getOnePropietario(setPropietario, placa, setLoading);
  }, [placa]);

  if (loading) return <h1>Cargando...</h1>;

  console.log(vehiculo);
  return (
    <div style={{ display: "flex" }}>
      <Card>
        <ButtonInicio />
        <h1>Editar</h1>

        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            name="placa"
            label="Placa"
            rules={[
              {
                message: "Por favor ingrese la placa del vehiculo.",
              },
            ]}
          >
            <Input placeholder="ABC123" defaultValue={vehiculo?.placa} />
          </Form.Item>
          <Form.Item
            name="marca"
            label="Marca"
            rules={[
              {
                message: "Por favor ingrese la marca del vehiculo.",
              },
            ]}
          >
            <Input placeholder="Marca" defaultValue={vehiculo?.marca} />
          </Form.Item>

          <Form.Item
            name="fechaMatricula"
            label="Fecha de la matricula"
            rules={[
              {
                message: "Por favor ingrese la Fecha de la matricula.",
              },
            ]}
          >
            <Input
              type="date"
              placeholder="Fecha"
              defaultValue={vehiculo?.fechaMatricula}
            />
          </Form.Item>

          <Form.Item
            name="tipoVehiculo"
            label="Tipo de vehiculo"
            rules={[
              {
                message: "Por favor seleccione el tipo de vehiculo.",
              },
            ]}
          >
            <Select defaultValue={vehiculo?.tipoVehiculo}>
              <Select.Option value="Automovil">Automóvil</Select.Option>
              <Select.Option value="Moto">Moto</Select.Option>
              <Select.Option value="Carro pesado">Carro pesado</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="nombre"
            label="Nombre"
            rules={[
              {
                message: "Por favor ingrese el nombre del propietario.",
              },
            ]}
          >
            <Input placeholder="Nombre" defaultValue={propietario?.nombre} />
          </Form.Item>

          <Form.Item
            name="tipo"
            label="Tipo"
            rules={[
              {
                message: "Por favor seleccione el tipo de propietario.",
              },
            ]}
          >
            <Select defaultValue={propietario?.tipo}>
              <Select.Option value="Persona">Persona</Select.Option>
              <Select.Option value="Empresa">Empresa</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="identificacion"
            label="Identificación"
            rules={[
              {
                message: "Por favor ingrese la identificación del propietario.",
              },
            ]}
          >
            <Input
              placeholder="12345678"
              defaultValue={propietario?.identificacion}
            />
          </Form.Item>
          <Form.Item
            name="direccion"
            label="Dirección"
            rules={[
              {
                message: "Por favor ingrese la dirección del propietario.",
              },
            ]}
          >
            <Input
              placeholder="Calle 123"
              defaultValue={propietario?.direccion}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Editar propietario
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Editar;
