import { useNavigate } from "react-router-dom";
import { useModal } from "../../stores/modalStore";
import CerrarSVG from "../../svg/CerrarSVG";

const Modal = () => {
  const { modal, setModal } = useModal();
  const navigate = useNavigate();
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
              className="cursor-pointer"
              id="cerrar-modal"
              onClick={() => {
                setModal({
                  mensaje: "",
                  activo: false,
                  navegarA: modal.navegarA,
                });
                if (modal.navegarA) {
                  //window.location.href = `${modal.navegarA}`;
                  if (typeof modal.navegarA === "number") {
                    navigate(modal.navegarA); // go back/forward in history
                  } else {
                    navigate(modal.navegarA); // navigate to a path
                  }
                }
              }}
            >
              {""}
              <CerrarSVG />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
