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
            } flex gap-2 py-4 rounded px-10 text-neutral-50 font-semibold `}
          >
            <h3 title="Mensaje Modal">{modal.mensaje}</h3>
            <button
              className="cursor-pointer w-5"
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
             <img src="/svg/close.svg" alt="Cerrar" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
