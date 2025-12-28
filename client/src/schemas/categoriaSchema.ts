import { object, string } from "yup";
export const categoriaSchema = object({
  nombre: string().required("Falta el Nombre"),
  description: string().required("Falta la descripción de la categoría"),
});
