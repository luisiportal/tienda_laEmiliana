import CardCortaDashboard from "./CardCortaDashboard";
import CardLargaItem from "./CardLargaItem";

const Dashboard = () => {
  return (
    <section>
      {" "}
      <div className="relative ml-1 mt-5">
        <h2 className="ml-1 font-bold text-2xl">Panel Administrativo</h2>
        <div className="-z-10 bg-green-500 w-40 h-10 absolute -top-1 rounded-br-xl rounded-tr-xl overflow-visible"></div>
      </div>
      <div className="mt-5 flex flex-col gap-5">
        {" "}
        <CardLargaItem />
        <div className="grid gap-3 grid-cols-2">
          <CardCortaDashboard
            titulo="Categorías"
            description="Administrar las categorías de productos"
            image="categorias.svg"
            alias="categorias"
          />
          <CardCortaDashboard
            titulo="Productos"
            description="Agregar y editar productos"
            image="productos.svg"
            alias="productos"

          />
          <CardCortaDashboard
            titulo="Movimientos"
            description="Entradas y Salidas del sistema "
            image="arrows.svg"
            alias="movimientos"

          />
          <CardCortaDashboard
            titulo="Comentarios"
            description="Aprobar y gestionar comentarios"
            image="coment.svg"
            alias="comentarios"

          />
          <CardCortaDashboard
            titulo="Usuarios"
            description="Agregar y quitar usuarios"
            image="users.svg"
            alias="usuarios"

          />
            <CardCortaDashboard
            titulo="Clientes"
            description="Listado de Clientes"
            image="users.svg"
            alias="clientes"

          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
