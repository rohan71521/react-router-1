import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const goHome = useNavigate();

    const handleGoHome = () =>{
        goHome("/")
    }
    return (
        <div className="flex justify-center items-center h-screen">
             <div className=" bg-gray-900 text-white p-20 flex flex-col
              justify-center items-center">
             <h1 className="text-4xl">Oops!</h1>
         <p className="py-5 ">Sorry, an unexpected error has occurred.</p>
          <p>
           <i className="bg-red-900 p-2">{error.statusText || error.message}</i>
           </p>
           <button onClick={handleGoHome} className="my-5 bg-green-700 p-2">Go Home</button>
             </div>
        </div>
    );
};

export default ErrorPage;