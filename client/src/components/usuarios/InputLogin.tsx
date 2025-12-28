import { ErrorMessage, type FormikErrors, type FormikTouched, } from "formik";
import type { User } from "../../types/General.type";

const InputLogin = ({
  values,
  handleChange,
  campo,
  nombre,
  errors,
  touched,
  type,
}: {
  values: User;
  handleChange: any;
  campo: string;
  nombre: string;
  errors: FormikErrors<User>;
  touched: FormikTouched<User>;
  type: string;
}) => {
  return (
    <div className="bg-white shadow flex flex-col  m-6 p-2 rounded-lg border-2 border-white hover:border-AzulUCM transition-all duration-300">
      <label className="text-xs text-slate-800" htmlFor={campo.toLowerCase()}>
        {nombre || campo}:
      </label>
      <input
        className="font-bold pl-1 outline-0"
        title={campo}
        type={type}
        name={campo}
        value={values[campo]}
        onChange={handleChange}
      />

      {errors[campo] && touched[campo] && (
        <div className="bg-red-500 w-fit text-white font-semibold text-sm  p-2 m-2 mb-0 rounded-lg">
          <ErrorMessage name={campo} className="" />
        </div>
      )}
    </div>
  );
};

export default InputLogin;
