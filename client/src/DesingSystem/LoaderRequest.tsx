import PrincipalLayout from "../Layout/PrincipalLayout";

const LoaderRequest = () => {
  return (
    <PrincipalLayout titulo="">
      <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
        <span className="cargar"></span>
      </div>
    </PrincipalLayout>
  );
};

export default LoaderRequest;
