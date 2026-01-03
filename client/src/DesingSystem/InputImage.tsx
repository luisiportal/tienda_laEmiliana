import { ErrorMessage, type FormikErrors, type FormikTouched } from "formik";
import type { Modal, Producto } from "../types/General.type";

const InputImage = ({
  setFile,
  file,
  errors,
  touched,
  setModal,
  label,
  image_url,
}: {
  setModal: (estado: Modal) => void;
  file: Blob | File | undefined;
  setFile: React.Dispatch<React.SetStateAction<Blob | File | undefined>>;
  errors: FormikErrors<Producto>;
  touched: FormikTouched<Producto>;
  label: string;
  image_url: string;
}) => {
  return (
    <div className="bg-white shadow flex flex-col  m-6 p-2 rounded-lg border-2 border-white hover:border-AzulUCM transition-all duration-300">
      <label className="text-xs text-slate-800" htmlFor="image">
        {label}:
      </label>
      <input
        title="Seleccionar Imagen"
        name="image"
        type="file"
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => {
          if (e.target.files) {
            const imgPermitidas = ["image/png", "image/jpg", "image/jpeg" ,"image/webp"];
            if (imgPermitidas.includes(e.target.files[0].type)) {
              setFile(e.target.files[0]);
            } else {
              setModal({
                mensaje:
                  "Archivo no permitido. Escoja una imagen PNG , JPG o JPEG",
                errorColor: true,
                activo: true,
              });
            }
          }
        }}
      />
      {image_url && !file && (
        <img
          className="object-cover w-20 h-20  shadow-xl border-slate-50 border-spacing-2 rounded-full"
          src={`${
            import.meta.env.VITE_images_URL
          }/images/programas/${image_url}`}
          alt=""
        />
      )}

      {
        /*muestra la imagen preview */ file && (
          <img
            className="object-cover w-20 h-20  shadow-xl border-slate-50 border-spacing-2 rounded-full"
            src={URL.createObjectURL(file)}
            alt=""
          />
        )
      }
      {errors.image && touched.image && (
        <div className="bg-red-500 w-fit text-white font-semibold text-sm  p-2 m-2 mb-0 rounded-lg">
          <ErrorMessage name="image" />
        </div>
      )}
    </div>
  );
};

export default InputImage;
