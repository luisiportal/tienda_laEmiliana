import * as Yup from "yup";

export const MovimientoSchema = Yup.object().shape({
  cantidad: Yup.number()
    .typeError("La cantidad debe ser un número")
    .required("La cantidad es obligatoria")
    .positive("Debe ser mayor que 0"),
    
  producto: Yup.number()
    .required("El producto es obligatorio")
    .integer("Debe ser un número entero"),
});
