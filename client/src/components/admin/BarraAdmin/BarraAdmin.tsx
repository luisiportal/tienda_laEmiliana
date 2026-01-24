import { useIsAuthenticated } from "../../../stores/isAuthenticatedStore";
import { navigate } from "astro/virtual-modules/transitions-router.js";

const BarraAdmin = () => {
  const { isAdmin } = useIsAuthenticated();
  
  return (
    <>
      {isAdmin && (
        <section className="bg-green-500 h-14 sticky w-full bottom-0 flex gap-3 items-center justify-center z-50 pb-5 mt-10">
          <button onClick={()=>navigate('/admin')}>
            <div className="flex flex-col items-center">
              <div className="bg-[#FFC20E] rounded-xl size-10 flex justify-center items-center">
                <img className="size-8" src="/svg/home.svg" alt="Productos" />
              </div>

              <h2 className="text-white text-xs">Panel</h2>
            </div>
          </button>
          <a href="/admin/productos">
            <div className="flex flex-col items-center">
              <div className="bg-[#FFC20E] rounded-xl size-10 flex justify-center items-center">
                <img
                  className="size-8"
                  src="/svg/productos.svg"
                  alt="Productos"
                />
              </div>

              <h2 className="text-white text-xs">Productos</h2>
            </div>
          </a>

          <a href="/admin/movimientos">
            <div className="flex flex-col items-center">
              <div className="bg-[#FFC20E] rounded-xl size-10 flex justify-center items-center">
                <img
                  className="size-8"
                  src="/svg/arrows.svg"
                  alt="Movimientos"
                />
              </div>

              <h2 className="text-white text-xs">Movimientos</h2>
            </div>
          </a>

          <a href="/admin/facturas">
            <div className="flex flex-col items-center">
              <div className="bg-[#FFC20E] rounded-xl size-10 flex justify-center items-center">
                <img
                  className="size-8"
                  src="/svg/facturas.svg"
                  alt="Facturas"
                />
              </div>

              <h2 className="text-white text-xs">Facturas</h2>
            </div>
          </a>
        </section>
      )}
    </>
  );
};

export default BarraAdmin;
