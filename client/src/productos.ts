import type { Producto } from "./types/General.type";

export const productos = [
  {
    id: 1,
    nombre: "Combo1",
    description:"2 x chocolate ,1x Pollo 10 lb",
    precio: 80,
    image: "combo1.jpg",
    categoria: "Destacados",
  },
  {
    id: 2,
    nombre: "Combo2",
    precio: 40,
    image: "combo2.jpg",
    categoria: "Destacados",
  },
  {
    id: 3,
    nombre: "Pollo 10 LB",
    description: "",
    precio: 12,
    image: "pollo10lb.jpg",
    categoria: "Carnícos",
  },
  {
    id: 4,
    nombre: "Salchicha 3KG",
    description: "",
    precio: 9,
    image: "salchicha3kg.jpg",
    categoria: "Carnícos",
  },
  {
    id: 5,
    nombre: "Combo2",
    precio: 40,
    image: "combo2.jpg",
    categoria: "Carnícos",
  },
    {
    id: 6,
    nombre: "Combo2",
    precio: 40,
    image: "combo2.jpg",
    categoria: "Carnícos",
  },
      {
    id: 7,
    nombre: "Frijoles 1 KG",
    precio: 2.7,
    image: "combo2.jpg",
    categoria: "Granos",
  },
      {
    id: 8,
    nombre: "Combo2",
    precio: 40,
    image: "combo2.jpg",
    categoria: "Granos",
  },

] as Producto[];
