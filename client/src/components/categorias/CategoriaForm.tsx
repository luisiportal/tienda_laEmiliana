import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useModal } from "../../stores/modalStore";
import { useLoader } from "../../stores/loaderStore";
import type {
  Categoria,
} from "../../types/General.type";
import {
  getProductobyIdRequest,
} from "../../api/productos.api";
import GeneralButton from "../../DesingSystem/GeneralButton";
import InputImage from "../../DesingSystem/InputImage";
import TituloModulo from "../../DesingSystem/TituloModulo";
import InputText from "../DS/InputText";
import InputTextArea from "../DS/InputTextArea";
import { createCategoriaRequest,  updateCategoriaRequest } from "../../api/categorias.api";

const CategoriaForm = ({id}:{id:string}) => {
  const [file, setFile] = useState<Blob | File>();
  const { setModal } = useModal();
  const { setLoader } = useLoader();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  

  const cargar = async (id: string) => {
    const response = await getProductobyIdRequest(Number(id));

    setCategoria(response);
  };

  useEffect(() => {
    if (id) cargar(id);
  }, []);

  const onSubmit = async (values: Categoria) => {
    const formData = new FormData();
    formData.append("nombre", values.nombre);
    formData.append("description", values.description);
    if (file) {
      formData.append("image", file);
    }

    try {
      setLoader(true);

      const { data } = categoria.id
        ? await updateCategoriaRequest(formData, Number(categoria.id) || 0)
        : await createCategoriaRequest(formData);

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
    categoria ? "Editar Categoría" : "Agregar un Nueva Categoría"
  }`;
  return (
    <section className="mx-auto max-w-4xl -mt-20">
      <TituloModulo titulo={titulo} />
      <Formik
        initialValues={categoria}
        onSubmit={onSubmit}
        //validationSchema={autorSchema}
        enableReinitialize
      >
        {({ handleChange, errors, touched, values }) => (
          <Form className="-mt-10">
            <InputText
              values={values}
              campo="nombre"
              nombre="Nombre Categoría"
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

            <InputImage
              label="Imagen de Categoría"
              errors={errors}
              file={file}
              setFile={setFile}
              touched={touched}
              setModal={setModal}
              image_url={categoria.image}
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

export default CategoriaForm;
