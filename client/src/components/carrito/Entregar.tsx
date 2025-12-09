import { Form, Formik } from "formik";
import { useEntregaStore } from "../../stores/entregaStore";
import InputText from "../DS/InputText";
import InputTextArea from "../DS/InputTextArea";
import EnviarPedido from "./EnviarPedido";
import type { Carrito, Entrega } from "../../types/General.type";
import { entregaSchema } from "../../schemas/entregaSchema";

const Entregar = ({ carrito }: { carrito: Carrito }) => {
  const { entrega } = useEntregaStore();

  const onSubmit = async (values: Entrega) => {
    const mensaje = carrito?.productos
      ?.map(
        (p) =>
          `• ${p.nombre} x${p.cantidad} = $${(p.precio * p.cantidad).toFixed(
            2
          )}`
      )
      .join("\n");

    const texto = `🛒 Hola, quiero hacer el siguiente pedido:

📦 Pedido:
${mensaje}

💰 Total: $${carrito?.total?.toFixed(2)} USD

📍 Dirección: ${values.direccion}
👤 Beneficiario: ${values.beneficiario}
📞 Teléfono: ${values.tel_beneficiario}

✉️ Enviado por: ${values.ordenante}`;

    const url = `https://wa.me/5358155198?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  return (
    <>
      {" "}
      <div id="entrega" className="relative ml-1 mt-5 flex">
        <h2 className="ml-1 font-bold text-2xl">Entregar a:</h2>
        <div className="-z-10 bg-green-500 w-16 h-10 absolute -top-1 rounded-br-xl rounded-tr-xl overflow-visible"></div>{" "}
      </div>
      <section className="bg-neutral-200 rounded-xl p-3 mx-3 min-h-40">
        <Formik
          initialValues={entrega}
          validationSchema={entregaSchema}
          onSubmit={onSubmit}
        >
          {({ handleChange, errors, touched, values }) => (
            <Form className="flex flex-col gap-5">
              <InputText
                values={values}
                campo="beneficiario"
                nombre="Nombre Beneficiario"
                errors={errors}
                handleChange={handleChange}
                touched={touched}
              />
              <InputText
                values={values}
                campo="tel_beneficiario"
                nombre="Teléfono Beneficiario"
                errors={errors}
                handleChange={handleChange}
                touched={touched}
              />

              <InputTextArea
                campo="direccion"
                nombre="Dirección"
                values={values}
                handleChange={handleChange}
                errors={errors}
                touched={touched}
                rows={4}
                placeholder="Ej: calle 5 # 11 entre 5 y 7 Reparto Vista Alegre"
              />
              <InputText
                values={values}
                campo="ordenante"
                nombre="Enviado por:"
                errors={errors}
                handleChange={handleChange}
                touched={touched}
              />
              <EnviarPedido />
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default Entregar;
