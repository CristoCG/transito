import React from "react";
import { Form, Input, Button, message, Select, Card } from "antd"; // Importamos componentes de la librería antd para crear el formulario
import { setMultas } from "../firebase/bdd";
import ButtonInicio from "../components/ButtonInicio";

const AgregarMultas = () => {
  // Definimos el estado del formulario
  const [form] = Form.useForm();

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (values) => {
    const Multas = {
      fecha: values.fecha,
      placa: values.placa.toUpperCase(),
      realizada: values.realizada,
    };

    // Aquí podríamos hacer la lógica para guardar los datos en una base de datos u otro tipo de almacenamiento
    setMultas(Multas);
    message.success("La multa ha sido registrada exitosamente.");
    form.resetFields(); // Reseteamos el formulario
  };

  return (
    <div style={{ display: "flex" }}>
      <Card>
        <ButtonInicio />
        <h1>Multas</h1>

        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            name="fecha"
            label="Fecha"
            rules={[
              {
                required: true,
                message: "Por favor ingrese la fecha de la infracción.",
              },
            ]}
          >
            <Input placeholder="Fecha" type="date" />
          </Form.Item>

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
            name="realizada"
            label="Multa realizada por:"
            rules={[
              {
                required: true,
                message: "Por favor seleccione quién realizó la multa.",
              },
            ]}
          >
            <Select>
              <Select.Option value="Agente de transito">
                Agente de tránsito
              </Select.Option>
              <Select.Option value="Camara de deteccion">
                Cámara de detección
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Registrar multa
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AgregarMultas;
