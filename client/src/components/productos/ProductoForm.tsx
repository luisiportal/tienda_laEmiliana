import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useModal } from "../../stores/modalStore";
import { useLoader } from "../../stores/loaderStore";
import type {
  Categoria,
  Producto,
  ReactSelectOption,
} from "../../types/General.type";
import {
  createProductoRequest,
  getProductobyIdRequest,
  updateProductoRequest,
} from "../../api/productos.api";
import GeneralButton from "../../DesingSystem/GeneralButton";
import InputImage from "../../DesingSystem/InputImage";
import TituloModulo from "../../DesingSystem/TituloModulo";
import InputText from "../DS/InputText";
import InputTextArea from "../DS/InputTextArea";
import Select, { type SingleValue } from "react-select";
import { useQuery } from "@tanstack/react-query";
import { getCategoriasRequest } from "../../api/categorias.api";
import { queryClient } from "../../stores";

const ProductoForm = () => {
  const [file, setFile] = useState<Blob | File>();
  const { setModal } = useModal();
  const { setLoader } = useLoader();
  const [producto, setProducto] = useState<Producto>({} as Producto);
  const [categoriaOption, setCategoriaOption] = useState<
    SingleValue<ReactSelectOption>
  >({
    value: 0,
    label: "",
  });
  //const { id } = useParams();
  const id = "1";

  const { data } = useQuery(
    {
      queryKey: ["categorias"],
      queryFn: getCategoriasRequest,
    },
    queryClient
  );
  const categorias = data?.map((item) => ({
    value: item.id,
    label: item.nombre,
  }));

  const cargar = async (id: string) => {
    const response = await getProductobyIdRequest(Number(id));

    setProducto(response);
  };

  useEffect(() => {
    if (id) cargar(id);
  }, []);

  const onSubmit = async (values: Producto) => {
    const formData = new FormData();
    formData.append("nombre", values.nombre);
    formData.append("description", values.description);
    formData.append("price_usd", values.price_usd);
    formData.append("cost", values.cost);
    formData.append("categoria", String(categoriaOption?.value));

    if (file) {
      formData.append("image_url", file);
    }

    try {
      setLoader(true);
      console.log(file);

      const { data } = producto.id
        ? await updateProductoRequest(formData, Number(producto.id) || 0)
        : await createProductoRequest(formData);

      return setModal({
        mensaje: data.message,
        errorColor: false,
        activo: true,
        navegarA: "/autores",
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
  const titulo = `${
    producto?.nombre ? "Editar Autor" : "Agregar un Nuevo Autor"
  }`;
  return (
    <section className="mx-auto max-w-4xl -mt-20">
      <TituloModulo titulo={titulo} />
      <Formik
        initialValues={producto}
        onSubmit={onSubmit}
        //validationSchema={autorSchema}
        enableReinitialize
      >
        {({ handleChange, errors, touched, values }) => (
          <Form className="-mt-10">
            <InputText
              values={values}
              campo="nombre"
              nombre="Nombre Producto"
              errors={errors}
              handleChange={handleChange}
              touched={touched}
            />
            <InputTextArea
              campo="description"
              nombre="Descripción"
              values={values}
              handleChange={handleChange}
              errors={errors}
              touched={touched}
              rows={10}
            />
            <InputText
              values={values}
              campo="price_usd"
              nombre="Precio USD"
              errors={errors}
              handleChange={handleChange}
              touched={touched}
            />
            <InputText
              values={values}
              campo="cost"
              nombre="Costo CUP"
              errors={errors}
              handleChange={handleChange}
              touched={touched}
            />

            <div className="bg-neutral-200 rounded-xl p-5 mt-5 h-28 flex items-center">
              {" "}
              <Select
                id="categoria"
                className="w-full rounded-xl"
                isSearchable={true}
                value={categoriaOption}
                onChange={setCategoriaOption}
                options={categorias}
              />
            </div>
            <InputImage
              label="Imagen de Producto"
              errors={errors}
              file={file}
              setFile={setFile}
              touched={touched}
              setModal={setModal}
              image_url={producto.imagen}
            />

            <div className="flex justify-center">
              {" "}
              <GeneralButton css="w-60" nombreBTN="Aceptar" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ProductoForm;
