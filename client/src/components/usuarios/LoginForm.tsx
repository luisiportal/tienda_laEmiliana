import { Form, Formik } from "formik";
import InputLogin from "./InputLogin";
import { useModal } from "../../stores/modalStore";
import { useLoader } from "../../stores/loaderStore";
import { useEffect } from "react";
import type { User } from "../../types/General.type";
import { usuarioSchema } from "../../schemas/UsuarioSchema";
import GeneralButton from "../../DesingSystem/GeneralButton";
import { loginRequest } from "../../api/auth.api";
import { useIsAuthenticated } from "../../stores/isAuthenticatedStore";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { setIsAuthenticated, setUser, setIsAdmin } = useIsAuthenticated();
  const { setLoader } = useLoader();
  const { setModal } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    setLoader(false);
  }, []);

  const onsubmit = async (values: User) => {
    try {
      setLoader(true);
      const { data } = await loginRequest(values);

      //writeLocalStorage({ key: "token", value: data.token });
      setIsAuthenticated(true);
      setUser(data.user);
      if (data.user.role === "admin") {
        setIsAdmin(true);
      }
      navigate("/admin/dashboard");
      setLoader(false);
    } catch (error: any) {
      setModal({
        mensaje: error.response.data.message,
        errorColor: true,
        activo: true,
      });
      setIsAuthenticated(false);
    } finally {
      setLoader(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        password: "",
        role: "",
        image: "",
        email: "",
      }}
      onSubmit={onsubmit}
      validationSchema={usuarioSchema}
    >
      {({ handleChange, values, errors, touched }) => (
        <Form className="w-80  bg-neutral-200/80 rounded-2xl h-64 m-4 overflow-hidden mx-auto">
          <InputLogin
            nombre="Usuario"
            campo="name"
            type="text"
            errors={errors}
            values={values}
            handleChange={handleChange}
            touched={touched}
          />
          <InputLogin
            nombre="Contraseña"
            campo="password"
            type="password"
            errors={errors}
            values={values}
            handleChange={handleChange}
            touched={touched}
          />
          <div className="flex justify-center">
            {" "}
            <div className="w-60 flex justify-center items-center">
              <GeneralButton nombreBTN="Iniciar Sesión" type="submit" />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
