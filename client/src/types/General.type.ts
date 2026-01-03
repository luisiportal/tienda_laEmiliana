export type Producto = {
  [key: string]: any;
  id: number;
  nombre: string;
  description: string;
  image: string;
  price_usd: number;
  categoria: Categoria;
  alias: string;
  agotado: boolean;
  cost: number;
  stock: number;
};
export type Movimiento = {
  [key: string]: any;
  id: number;
  cantidad: number;
  tipo: String;
  producto_id: number;
  producto: Producto;
};

export type MovimientoPaginacion = {
  data: Movimiento[];
  current_page: number;
  last_page: number;
  total: number;
  links: LinkPage[];
};
export type LinkPage = {
  label: string;
  url: string;
};

export type Dialog = {
  pregunta: string;
  identificador: number;
  show: boolean;
  request: any;
  navegarA:string
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
  [key: string]: any;

  id: number;
  nombre: string;
  description: string;
  image: string;
  alias: string;
};
export type isAuthenticated = {
  user: User;
  setUser: (estado: User) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (estado: boolean) => void;
  isAdmin: boolean;
  setIsAdmin: (estado: boolean) => void;
  dispositivoAutorizado: boolean;
  setDispositivoAutorizado: (estado: boolean) => void;
};

export type User = {
  [key: string]: any;
  id?: number;
  name: string;
  password?: string;
  password_confirmation?: string;
  role: string;
  email?: string;
  image: string;
};

export type Entrega = {
  [key: string]: any;
  ordenante: string;
  beneficiario: string;
  direccion: string;
  tel_beneficiario: string;
};
