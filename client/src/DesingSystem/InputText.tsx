import { ErrorMessage, type FormikErrors, type FormikTouched } from "formik";

import type { Articulo, Autor, DeviceInfo, Programa, User, VistaVideo } from "../types/General.type";

const InputText = ({
  values,
  handleChange,
  campo,
  nombre,
  errors,
  touched,
  disabled,
  type = "text",
  placeholderText,
}: {
  values?: Programa | Articulo | Autor | VistaVideo | DeviceInfo | User;
  handleChange: any;
  campo: string;
  nombre: string;
  errors: FormikErrors<Programa>;
  touched: FormikTouched<Programa>;
  disabled?: boolean;
  type?: string;
  placeholderText?: string;
}) => {
  return (
    <div className="bg-white shadow flex flex-col p-2 rounded-xl border-2 border-white hover:border-AzulUCM transition-all duration-300">
      <label className="text-xs text-slate-800" htmlFor={campo}>
        {nombre || campo}:
      </label>
      <input
        id={campo}
        placeholder={placeholderText}
        disabled={disabled}
        className="font-bold pl-1 outline-0"
        title={campo}
        type={type}
        name={campo}
        value={values ? values[campo] ?? "" : ""}
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

export default InputText;
