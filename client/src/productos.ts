import type { Producto } from "./types/General.type";

const usd = 415;
const margen = 0.3; // 30%

const precioFinal = (costo: number) => {
  const precioFinal = costo / (1 - margen);
  return precioFinal / usd;
};

export const productos: Producto[] = [
  {
    id: 1,
    nombre: "Flan de Leche",
    description:
      "Exquisito Flan de Leche elaborado a base de huevos, leche y azúcar.",
    precio: 5,
    image: "flan.jpeg",
    categoria: "Destacados",
    alias: "flan-de-leche",
  },
  {
    id: 2,
    nombre: "Aceite 1 Litro",
    precio: 2.6,
    description: "",
    image: "haysa1l.jpg",
    categoria: "Varios",
    alias: "aceite",
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
    nombre: "Leche 1KG",
    description: "",

    precio: 7.99,
    image: "leche1kg.jpg",
    categoria: "noLácteos",
    alias: "leche",
  },
  {
    id: 6,
    nombre: "Huevos (30)",
    precio: 7.99,
    description: "30 Huevos",

    image: "huevos.webp",
    categoria: "Destacados",
    alias: "huevos",
  },
  {
    id: 7,
    nombre: "Frijoles 1 KG",
    precio: 2.7,
    description: "",
    image: "frijoles1kg.jpg",
    categoria: "Granos",
    alias: "frijoles-1-kg",
  },
  {
    id: 8,
    nombre: "Combo2",
    precio: 40,
    description: "",

    image: "combo2.jpg",
    categoria: "agotadoGranos",
    alias: "combo2",
  },
  {
    id: 9,
    nombre: "Azúcar",
    precio: 1.99,
    description: "Paquetico sellado de azúcar de 1kg",

    image: "azucar.jpg",
    categoria: "Varios",
    alias: "azucar",
  },
  {
    id: 10,
    nombre: "Arroz",
    precio: 1.7,
    description: "Paquetico sellado de arroz de 1kg",

    image: "arroz.jpg",
    categoria: "Varios",
    alias: "arroz",
  },
  {
    id: 11,
    nombre: "Malta Perla",
    precio: 0.9,
    description: "Malta Perla producida en la Cervecería Bucanero en Holguín",

    image: "maltaperla.jpg",
    categoria: "Bebidas",
    alias: "malta-perla",
  },
  {
    id: 12,
    nombre: "Spaguettis",
    precio: 0.9,
    description: "Malta Perla producida en la Cervecería Bucanero en Holguín",

    image: "spaguettis500.jpg",
    categoria: "Varios",
    alias: "spaguettis",
  },
  {
    id: 13,
    nombre: "Leche Condensada",
    precio: 1.5,
    description: "Latica de leche condensada 390 g",

    image: "Leche-Condensada-390g.jpg",
    categoria: "Lácteos",
    alias: "leche-condensada",
  },
  {
    id: 14,
    nombre: "Leche Condensada Hervida",
    precio: 1.8,
    description: "Latica de leche condensada hervida casera 390 g",

    image: "lechehervida.jpg",
    categoria: "Lácteos",
    alias: "leche-condensada-hervida",
  },
  {
    id: 15,
    nombre: "Queso Gouda 1Lb",
    precio: 5.1,
    description:
      "Queso de primera calidad ideal para spaguettis , pizzas o bocaditos",

    image: "queso-gouda_3.webp",
    categoria: "Lácteos",
    alias: "queso-gouda-1lb",
  },
  {
    id: 16,
    nombre: "Latica Pure Vima",
    precio: 1.65,
    description: "Pure Vima buen rendimiento y calidad",

    image: "vima.webp",
    categoria: "Varios",
    alias: "pure-vima",
  },
  {
    id: 17,
    nombre: "Galletas Saltitacos",
    precio: 3.37,
    description: "El pqt trae 7 paqueticos ideales para las meriendas",

    image: "saltitacos.jpg",
    categoria: "Varios",
    alias: "saltitacos",
  },
  {
    id: 18,
    nombre: "Jugo Manzana",
    precio: 0.68,
    description: "Jugo de Manzana 200 ml Badelli",

    image: "manzanabadelli.jpg",
    categoria: "Bebidas",
    alias: "manzana-badelli",
  },
    {
    id: 19,
    nombre: "Cerveza Cristal",
    precio: 0.75,
    description: "La preferida de Cuba",

    image: "cristal.jpg",
    categoria: "Bebidas",
    alias: "cerveza-cristal",
  },
     {
    id: 20,
    nombre: "Jugo Guayaba",
    precio: 0.68,
    description: "Cajita de 200 ml",

    image: "guayaba20ml.jpg",
    categoria: "Bebidas",
    alias: "jugo-guayaba-200ml",
  },
       {
    id: 21,
    nombre: "Galletas de leche",
    precio: 2.1,
    description: "Galleticas con sabor a leche incluye 8 paqueticos",

    image: "milkRedonda.webp",
    categoria: "Confituras",
    alias: "galleticas-milk",
  },
];
