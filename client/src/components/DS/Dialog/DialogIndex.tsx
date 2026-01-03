import { deleteProductoRequest } from "../../../api/productos.api";
import { useDialogStore } from "../../../stores/dialogStore";
import { useLoader } from "../../../stores/loaderStore";
import { useModal } from "../../../stores/modalStore";

const DialogIndex = () => {
  const { setModal } = useModal();
  const { setLoader } = useLoader();
  const { dialog, setDialog } = useDialogStore();

  const deleteProducto = async (id: number) => {
    setDialog({
      pregunta: "",
      show: false,
      identificador: 0,
      request: "",
      navegarA: "",
    });
    try {
      const { data } = await dialog.request(id);

      return setModal({
        mensaje: data.message,
        errorColor: false,
        activo: true,
        navegarA: dialog.navegarA,
      });
    } catch (error: any) {
      console.log(error);
      setModal({
        mensaje: error.response.data.message,
        errorColor: true,
        activo: true,
      });
    } finally {
      setLoader(false);
    }
  };

  return (
    <div>
      {dialog.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/10 bg-opacity-50">
          <div className="bg-red-500 rounded-xl p-5 flex flex-col gap-5 w-80 text-center shadow-lg">
            <h2 className="font-semibold text-white">{dialog.pregunta}</h2>

            <button
              className="cursor-pointer bg-white text-red-500 font-semibold px-4 py-2 rounded"
              onClick={() => deleteProducto(dialog.identificador)}
            >
              Sí, de acuerdo
            </button>
            <button
              className="cursor-pointer bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded"
              onClick={() =>
                setDialog({
                  pregunta: "",
                  show: false,
                  identificador: 0,
                  request: "",
                  navegarA: "",
                })
              }
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DialogIndex;
