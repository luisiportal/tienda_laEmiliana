
import type { CartItem } from "../../types/General.type";

const Cantidad = ({ producto }: { producto: CartItem }) => {




  

  return (
    <>
      {producto?.cantidad >= 1 && (
        <div className="bg-neutral-500 rounded-full flex justify-center items-center text-white font-semibold size-7 absolute top-2 left-2">
          {producto?.cantidad}
        </div>
      )}
    </>
  );
};

export default Cantidad;
