import type { Categoria } from "../types/General.type";
import { ErrorMessage, type FormikErrors, type FormikTouched } from "formik";

const InputSelect = ({
  values,
  handleChange,
  campo,
  errors,
  touched,
  label,
  opciones,
  disabled,
  catActual,
}: {
  catActual?: string;
  values?:Categoria
  handleChange: any;
  campo: string;
  errors: FormikErrors<Categoria>;
  touched: FormikTouched<Categoria>;
  label: string;
  opciones: string[];
  disabled?: boolean;
}) => {
  return (
    <div className="bg-white shadow flex flex-col  m-6 p-2 rounded-lg border-2 border-white hover:border-AzulUCM transition-all duration-300">
      <label className="text-xs text-slate-800" htmlFor={campo}>
        {label}
      </label>
      <select
        className="font-bold pl-1 outline-0"
        title={label}
        name={campo}
        value={values ? values[campo] ?? "" : ""}
        onChange={handleChange}
        disabled={disabled}
      >
        <option value="---">---</option>

        {catActual && (
          <option disabled value={catActual}>
            {`Actual: ${catActual}`}
          </option>
        )}
        {opciones.map((opcion) => (
          <option key={opcion} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
      {errors[campo] && touched[campo] && (
        <div className="bg-red-500 w-fit text-white font-semibold text-sm  p-2 m-2 mb-0 rounded-lg">
          <ErrorMessage name={campo} />
        </div>
      )}
    </div>
  );
};

export default InputSelect;
