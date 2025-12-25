const GeneralButton = ({
  nombreBTN,
  type,
  css = "bg-green-500 text-white",
}: {
  nombreBTN: string;
  type: "submit" | "reset" | "button";
  css?: string;
}) => {
  return (
    <button
      id="aceptar-btn"
      className={`${css} cursor-pointer rounded-lg p-2 px-5 font-bold bg-azulPortal text-white`}
      type={type}
    >
      {nombreBTN}
    </button>
  );
};

export default GeneralButton;
