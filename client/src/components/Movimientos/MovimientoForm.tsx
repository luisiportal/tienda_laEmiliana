import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useModal } from "../../stores/modalStore";
import { useLoader } from "../../stores/loaderStore";
import type {
  Categoria,
  Movimiento,
  Producto,
  ReactSelectOption,
} from "../../types/General.type";
import Select from "react-select";

import { getAllproductos } from "../../api/productos.api";
import GeneralButton from "../../DesingSystem/GeneralButton";

import { useParams } from "react-router-dom";
import type { SingleValue } from "react-select";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../../stores";
import { createMovimientoRequest } from "../../api/movimientos";
import { MovimientoSchema } from "../../schemas/MovimientoSchema";
import InputText from "../DS/InputText";

const MovimientoForm = () => {
  const [movimiento, setMovimiento] = useState({} as Movimiento);
  const [productoOption, setProductoOption] = useState<
    SingleValue<ReactSelectOption>
  >({
    value: 0,
    label: "",
  });

  const { setModal } = useModal();
  const { setLoader } = useLoader();
  const { tipo } = useParams();

  const { data } = useQuery(
    {
      queryKey: ["productosAll"],
      queryFn: getAllproductos,
    },
    queryClient
  );

  const productos = data?.map((item) => ({
    value: item.id,
    label:` ${item.nombre} (${item.stock > 0 ? item.stock : "Agotado"})`,
  }));

  const onSubmit = async (values: Movimiento) => {
    console.log(values);

    const movimiento = {
      cantidad: values.cantidad,
      producto_id: productoOption?.value,
      tipo,
      producto: {} as Producto,
      id: 0,
    } as Movimiento;

    try {
      setLoader(true);

      const { data } = await createMovimientoRequest(movimiento);

      return setModal({
        mensaje: data.message,
        errorColor: false,
        activo: true,
        navegarA: "/admin/movimientos",
      });
    } catch (error: any) {
      console.log(error);
      setModal({
        mensaje: error.response.data.message,
        errorColor: true,
        activo: true,
      });
    } finally {
      setLoader(false);
    }
  };

  return (
    <section className="mx-auto max-w-4xl mt-5">
      <div className="relative ml-1 mt-5">
        <h2 className="ml-1 font-bold text-2xl">
          {`Agregar un Nuevo Movimiento de ${tipo} `}
        </h2>
        <div className="-z-10 bg-green-500 w-40 h-10 absolute -top-1 rounded-br-xl rounded-tr-xl overflow-visible"></div>
      </div>
      <Formik
        initialValues={movimiento}
        onSubmit={onSubmit}
        // validationSchema={MovimientoSchema}
        enableReinitialize
      >
        {({ handleChange, errors, touched, values }) => (
          <Form className="mt-5 flex flex-col gap-5">
            <div className="bg-neutral-200 rounded-xl  p-2 h-28">
              <label className="text-xs text-slate-800">Producto:</label>{" "}
              <div className=" flex items-center">
                <Select
                  id="producto"
                  className="w-full rounded-xl"
                  isSearchable={true}
                  value={productoOption}
                  onChange={setProductoOption}
                  options={productos}
                />
              </div>
            </div>

            <InputText
              values={values}
              campo="cantidad"
              nombre="Cantidad"
              type="number"
              errors={errors}
              handleChange={handleChange}
              touched={touched}
            />

            <div className="flex justify-center">
              {" "}
              <GeneralButton
                css="w-60 bg-green-500"
                nombreBTN="Aceptar"
                type="submit"
              />
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default MovimientoForm;
