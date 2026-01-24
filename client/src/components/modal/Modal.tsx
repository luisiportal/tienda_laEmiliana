import { navigate } from "astro/virtual-modules/transitions-router.js";
import { useModal } from "../../stores/modalStore";


const Modal = () => {
  const { modal, setModal } = useModal();
  return (
    <div>
      {modal.activo && (
        <div className={`fixed flex justify-center items-center inset-0  z-50`}>
          <div
            className={`${
              modal.errorColor ? "bg-red-500" : "bg-green-500"
            } relative flex justify-between items-center gap-2 py-4 rounded px-10 min-h-20 text-neutral-50 font-semibold `}
          >
            <h3 title="Mensaje Modal">{modal.mensaje}</h3>
            <button
              className="cursor-pointer size-8 absolute right-0 top-0"
              id="cerrar-modal"
              onClick={() => {
                setModal({
                  mensaje: "",
                  activo: false,
                  navegarA: modal.navegarA,
                });
                if (modal.navegarA) {
                     navigate( modal.navegarA)
                }
              }}
            >
              {""}
             <img className="size-10" src="/svg/close.svg" alt="Cerrar"  />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
