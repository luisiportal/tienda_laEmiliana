export type Producto = {
  [key: string]: any;

  id: number;
  nombre: string;
  description: string;
  image: string;
  precio: number;
  categoria: string;
  alias: string;
  agotado: boolean;
};
export type Modal = {
  mensaje: string;
  errorColor?: boolean;
  activo: boolean;
  navegarA?: string;
};
export type Carrito = {
  productos: CartItem[];
  total?: number;
};
// Ítem en el carrito (producto + cantidad)
export type CartItem = Producto & {
  cantidad: number;
};

export type ReactSelectOption = { value: number; label: string };

export type Categoria = {
  id: number;
  nombre: string;
  description: string;
  image: string;
  alias: string;
};

export type Entrega = {
  [key: string]: any;
  ordenante: string;
  beneficiario: string;
  direccion: string;
  tel_beneficiario: string;
};
