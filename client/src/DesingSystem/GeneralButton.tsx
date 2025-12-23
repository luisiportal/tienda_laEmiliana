const GeneralButton = ({
  nombreBTN,
  onClick,
  type,
  css = "bg-azulPortal text-white",
}: {
  nombreBTN: string;
  onClick: any;
  type: "submit" | "reset" | "button";
  css?: string;
}) => {

  return (
    <button
      id="aceptar-btn"
      className={`${css} cursor-pointer rounded-lg p-2 px-5 font-bold bg-azulPortal text-white`}
      type={type}
      onClick={() => onClick()}
    >
      {nombreBTN}
    </button>
  );
};

export default GeneralButton;
