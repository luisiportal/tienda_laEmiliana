import { object, string } from 'yup';
export const productoSchema = object({
  name: string().required("Falta el nombre"),
  description: string().required("Falta la descripción"),
  price_usd: string().required("Falta el precio"),
  cost: string().required("Falta el costo"),
  category: string().required("Falta el nombre de la persona que envía el pedido"),


});

