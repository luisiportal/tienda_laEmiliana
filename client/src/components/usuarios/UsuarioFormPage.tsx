import { Form, Formik } from "formik";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import InputText from "../DS/InputText";
import {
  getUnUserRequest,
  createUserRequest,
  updateUserRequest,
} from "../../api/user.api";
import GeneralButton from "../../DesingSystem/GeneralButton";
import { useLoader } from "../../stores/loaderStore";
import { useModal } from "../../stores/modalStore";
import type { User } from "../../types/General.type";
import LoaderTanStack from "../../DesingSystem/LoaderTanStack";
import { queryClient } from "../../stores";

const UsuarioFormPage = ({ id }: { id: string }) => {
  const { setModal } = useModal();
  const { setLoader } = useLoader();

  const id_usuario = Number(id) || 0;
  const [user] = useState<User>({} as User);

  const { data, isLoading } = useQuery(
    {
      queryKey: ["usuario", id_usuario],
      queryFn: () => getUnUserRequest(id_usuario),
    },
    queryClient
  );

  const userStore = data ?? ({} as User);

  if (isLoading) return <LoaderTanStack />;

  const onSubmit = async (values: User) => {
    try {
      setLoader(true);
      const { data } = !id_usuario
        ? await createUserRequest(values)
        : await updateUserRequest(id_usuario, values);
      setLoader(false);
      setModal({
        mensaje: data.message,
        errorColor: false,
        activo: true,
        navegarA: "/",
      });
    } catch (error: any) {
      console.log(error);
      setLoader(false);
      setModal({
        mensaje: error.response.data.message,
        errorColor: true,
        activo: true,
      });
    }
  };
  const titulo = `${
    id ? "Editar Usuario" : "Agregar un Nuevo Usuario"
  }`;

  return (
    <>
      {" "}
      <div className="relative ml-1 mt-5">
        <h2 className="ml-1 font-bold text-2xl">{titulo} </h2>
        <div className="-z-10 bg-green-500 w-40 h-10 absolute -top-1 rounded-br-xl rounded-tr-xl overflow-visible"></div>
      </div>{" "}
      <Formik
        initialValues={id_usuario ? userStore : user}
        enableReinitialize={true}
        onSubmit={onSubmit}
        // validationSchema={id_usuario ? updateUserFormSchema : usuarioFormSchema}
      >
        {({ handleChange, values, errors, touched }) => (
          <Form className="mx-auto w-80 flex flex-col gap-5 mt-10">
            <InputText
              values={values}
              campo="name"
              nombre="Usuario"
              errors={errors}
              handleChange={handleChange}
              touched={touched}
            />

            <InputText
              values={values}
              type="password"
              campo="password"
              nombre="Contraseña"
              errors={errors}
              handleChange={handleChange}
              touched={touched}
            />
            <InputText
              values={values}
              type="password"
              campo="password_confirmation"
              placeholderText="sin modificar"
              nombre="Confirmar contraseña"
              errors={errors}
              handleChange={handleChange}
              touched={touched}
            />

            <div className="flex justify-center">
              {" "}
              <div className="w-72 flex justify-center items-center pb-10">
                <GeneralButton nombreBTN="Aceptar" type="submit" />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default UsuarioFormPage;
