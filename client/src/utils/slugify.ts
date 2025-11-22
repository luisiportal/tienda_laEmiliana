export const slugify = (alias: string): string => {
  return alias
    .toLowerCase() // todo en minúsculas
    .normalize("NFD") // separa acentos
    .replace(/[\u0300-\u036f]/g, "") // elimina acentos
    .replace(/[^a-z0-9\s-]/g, "") // elimina caracteres no válidos
    .trim() // quita espacios al inicio/fin
    .replace(/\s+/g, "-") // reemplaza espacios por guiones
    .replace(/-+/g, "-"); // evita guiones repetidos
};
