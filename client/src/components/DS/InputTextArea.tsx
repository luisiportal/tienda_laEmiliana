import { ErrorMessage, type FormikErrors, type FormikTouched } from "formik";
import type { Categoria, Entrega, Producto } from "../../types/General.type";

const InputTextArea = ({
  values,
  handleChange,
  campo,
  nombre,
  errors,
  touched,
  disabled,
  rows = 3,
  placeholder,
}: {
  values:Producto | Categoria | Entrega;
  handleChange: any;
  campo: string;
  nombre: string;
  errors: FormikErrors<Entrega>;
  touched: FormikTouched<Entrega>;
  disabled?: boolean;
  rows?: number;
  placeholder?: string;
}) => {
  return (
    <div className="bg-neutral-200 w-full shadow flex flex-col  p-2 rounded-lg border-2 border-white hover:border-AzulUCM transition-all duration-300">
      <label className="text-xs text-slate-800" htmlFor={campo}>
        {nombre || campo}:
      </label>
      <textarea
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        className="font-bold pl-1 outline-0 placeholder:font-light"
        title={campo}
        name={campo}
        value={values[campo] || ""}
        onChange={handleChange}
      />

  {typeof errors[campo] === "string" && (
        <div className="bg-red-500 w-fit text-white font-semibold text-sm p-2 m-2 mb-0 rounded-lg">
          {errors[campo]}
        </div>
      )}
    </div>
  );
};

export default InputTextArea;
