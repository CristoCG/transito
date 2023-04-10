import React, { useEffect, useState } from "react";
import { Form, Input, Button, message, Select, Card } from "antd"; // Importamos componentes de la librería antd para crear el formulario
import {
  getPropietarios,
  getVehiculos,
  setProp,
  setVeh,
} from "../firebase/bdd";
import ButtonInicio from "../components/ButtonInicio";

const Agregar = () => {
  // Definimos el estado del formulario
  const [form] = Form.useForm();

  const [vehiculos, setVehiculos] = useState([]);
  const [propietarios, setPropietarios] = useState([]);

  // Función que se ejecuta al enviar el formulario

  const handleSubmit = (values) => {
    const propietario = {
      placa: values.placa.toUpperCase(),
      nombre: values.nombre.toLocaleUpperCase(),
      identificacion: values.identificacion,
      direccion: values.direccion,
      tipo: values.tipo,
    };

    const vehiculo = {
      placa: values.placa.toUpperCase(),
      marca: values.marca,
      fechaMatricula: values.fechaMatricula,
      tipoVehiculo: values.tipoVehiculo.toLocaleUpperCase(),
    };

    //Validar si la placa existe
    const placaExiste = vehiculos.find(
      (vehiculo) => vehiculo.placa === values.placa.toUpperCase()
    );

    if (placaExiste) {
      message.error("La placa ya existe.");
      return;
    } else {
      setProp(propietario);
      setVeh(vehiculo);
      message.success("El propietario ha sido registrado exitosamente.");
      form.resetFields(); // Reseteamos el formulario
    }
  };

  useEffect(() => {
    getVehiculos(setVehiculos);
    getPropietarios(setPropietarios);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Card>
        <ButtonInicio />
        <h1>Agregar</h1>

        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            name="placa"
            label="Placa"
            rules={[
              {
                required: true,
                message: "Por favor ingrese la placa del vehiculo.",
              },
            ]}
          >
            <Input placeholder="ABC123" />
          </Form.Item>
          <Form.Item
            name="marca"
            label="Marca"
            rules={[
              {
                required: true,
                message: "Por favor ingrese la marca del vehiculo.",
              },
            ]}
          >
            <Input placeholder="Marca" />
          </Form.Item>

          <Form.Item
            name="fechaMatricula"
            label="Fecha de la matricula"
            rules={[
              {
                required: true,
                message: "Por favor ingrese la Fecha de la matricula.",
              },
            ]}
          >
            <Input type="date" placeholder="Fecha" />
          </Form.Item>

          <Form.Item
            name="tipoVehiculo"
            label="Tipo de vehiculo"
            rules={[
              {
                required: true,
                message: "Por favor seleccione el tipo de vehiculo.",
              },
            ]}
          >
            <Select>
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
                required: true,
                message: "Por favor ingrese el nombre del propietario.",
              },
            ]}
          >
            <Input placeholder="Nombre" />
          </Form.Item>

          <Form.Item
            name="tipo"
            label="Tipo"
            rules={[
              {
                required: true,
                message: "Por favor seleccione el tipo de propietario.",
              },
            ]}
          >
            <Select>
              <Select.Option value="Persona">Persona</Select.Option>
              <Select.Option value="Empresa">Empresa</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="identificacion"
            label="Identificación"
            rules={[
              {
                required: true,
                message: "Por favor ingrese la identificación del propietario.",
              },
            ]}
          >
            <Input placeholder="12345678" />
          </Form.Item>
          <Form.Item
            name="direccion"
            label="Dirección"
            rules={[
              {
                required: true,
                message: "Por favor ingrese la dirección del propietario.",
              },
            ]}
          >
            <Input placeholder="Calle 123" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Registrar propietario
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Agregar;
