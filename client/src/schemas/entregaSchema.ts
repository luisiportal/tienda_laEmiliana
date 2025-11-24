import { object, string } from 'yup';
export const entregaSchema = object({
  beneficiario: string().required("Falta el beneficiario"),
  tel_beneficiario: string().required("Falta el teléfono beneficiario"),
  direccion: string().required("Falta la dirección del beneficiario"),
  ordenante: string().required("Falta el nombre de la persona que envía el pedido"),

});