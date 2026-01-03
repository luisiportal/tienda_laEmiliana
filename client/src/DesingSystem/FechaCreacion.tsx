const FechaCreacion = ({ created }: { created: string }) => {
  return (
    <h2 className="text-[11px]">
      {new Date(created).toLocaleString("es-ES", {
        weekday: "long",   // Ej: miércoles
        day: "numeric",    // Ej: 13
        month: "long",     // Ej: agosto
        year: "numeric",   // Ej: 2025
        hour: "2-digit",   // Ej: 21
        minute: "2-digit", // Ej: 43
        second: "2-digit", // Ej: 05
        hour12: true      // formato 24h
      })}
    </h2>
  );
};

export default FechaCreacion;
