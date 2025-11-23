import { useState } from "react";
import type { Entrega } from "../../types/General.type";
import { Field, Form, Formik } from "formik";

const Entregar = () => {
  const [entrega, setEntrega] = useState<Entrega>({} as Entrega);

  return (
    <section className="bg-neutral-200 rounded-xl p-3 mx-3 min-h-40">
      <h2 className="flex justify-center font-bold text-2xl">Entregar a :</h2>
      <Formik
        initialValues={entrega}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="beneficiario">Beneficiario</label>
          <Field id="beneficiario" name="beneficiario" placeholder="" />

          <label htmlFor="tel-beneficiario">Teléfono</label>
          <Field id="tel-beneficiario" name="tel-beneficiario" />
        
        </Form>
      </Formik>
    </section>
  );
};

export default Entregar;
