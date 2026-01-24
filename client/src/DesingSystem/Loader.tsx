import { useLoader } from "../stores/loaderStore";

const Loader = () => {
  const { loader } = useLoader();
  

  return (
    <>
      {loader && (
        <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
          <span className="loader"></span>
        </div>
      )}
    </>
  );
};

export default Loader;
