export type Producto = {
  id: number;
  nombre: string;
  description:string;
  image: string;
  precio: number;
  categoria: string;
  alias:string;
};

export type Categoria = {
  id: number;
  nombre: string;
  description:string;
  image: string;
  alias:string;
};
