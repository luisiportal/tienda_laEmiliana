import type { Producto } from "./types/General.type";

export const productos: Producto[] = [
  {
    id: 1,
    nombre: "Combo1",
    description: "2 x chocolate ,1x Pollo 10 lb",
    precio: 80,
    image: "combo1.jpg",
    categoria: "Destacados",
    alias: "combo1",
  },
  {
    id: 2,
    nombre: "Combo2",
    precio: 40,
    description: "",
    image: "combo2.jpg",
    categoria: "Destacados",
    alias: "combo2",
  },
  {
    id: 3,
    nombre: "Pollo 10 LB",
    description: "",
    precio: 12,
    image: "pollo10lb.jpg",
    categoria: "Carnícos",
    alias: "pollo-10-lb",
  },
  {
    id: 4,
    nombre: "Salchicha 3KG",
    description: "",
    precio: 9,
    image: "salchicha3kg.jpg",
    categoria: "Carnícos",
    alias: "salchicha-3kg",
  },
  {
    id: 5,
    nombre: "Combo2",
    description: "",

    precio: 40,
    image: "combo2.jpg",
    categoria: "Carnícos",
    alias: "combo2",
  },
  {
    id: 6,
    nombre: "Combo2",
    precio: 40,
    description: "",

    image: "combo2.jpg",
    categoria: "Carnícos",
    alias: "combo2",
  },
  {
    id: 7,
    nombre: "Frijoles 1 KG",
    precio: 2.7,
    description: "",

    image: "combo2.jpg",
    categoria: "Granos",
    alias: "frijoles-1-kg",
  },
  {
    id: 8,
    nombre: "Combo2",
    precio: 40,
    description: "",

    image: "combo2.jpg",
    categoria: "Granos",
    alias: "combo2",
  },
];
