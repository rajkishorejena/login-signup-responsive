import React from "react";
// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { MdErrorOutline } from "react-icons/md";
const Error = () => {
  const errorMessage = "Oops, something went wrong!"; // Replace with your actual error message

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <MdErrorOutline  className="text-red-500" fontSize="large"/>
      {/* <ErrorOutlineIcon className="text-red-500" fontSize="large" /> */}
      <h2 className="text-3xl font-bold my-4">{errorMessage}</h2>
      <p className="text-center mb-6">
        We're sorry for the inconvenience. Please try again later or contact us
        for further assistance.
      </p>
      <a
        href="/"
        onClick={() => {
          // Clear all items from local storage
          localStorage.clear();
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default Error;
