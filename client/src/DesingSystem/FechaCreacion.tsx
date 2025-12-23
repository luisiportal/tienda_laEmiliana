 

const FechaCreacion = ({ created }: { created: string }) => {
  return (
    <h2 className="text-[11px]">
      {new Date(created).toLocaleString("es-ES", {
        weekday: "long", // Ej: miércoles
        day: "numeric", // Ej: 13
        month: "long", // Ej: agosto
        year: "numeric", // Ej: 2025
       
      })}
    </h2>
  );
};

export default FechaCreacion;
