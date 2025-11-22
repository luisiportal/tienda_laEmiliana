export type Producto = {
  id: number;
  nombre: string;
  description: string;
  image: string;
  precio: number;
  categoria: string;
  alias: string;
};
export type Carrito = {
  productos: CartItem[];
  total: number;
}
// Ítem en el carrito (producto + cantidad)
export type CartItem = Producto & {
  cantidad: number;
};

export type Categoria = {
  id: number;
  nombre: string;
  description: string;
  image: string;
  alias: string;
};


