const Creado = ({ created }: { created: string }) => {
  return (
    <h2 className="text-[11px] text-white p-1">
      {new Date(created).toLocaleString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })}
    </h2>
  );
};

export default Creado;
