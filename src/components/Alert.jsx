import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className=" absolute top-10 left-0 right-0 flex flex-col justify-center items-center">
      <div
        className={`${
          type === "danger" ? "bg-red-500" : "bg-blue-800"
        } p-2 text-indigo-100  leading-non lg:rounded-full flexlg:inline-flex items-center`}
        role="alret"
      >
        <div className="m-3 text-left">
          <p
            className={`${
              type === "danger" ? "bg-red-500" : "bg-blue-500"
            } flex justify-center  rounded-full uppercase p-2 font-bold m-2 text-xs`}
          >
            {type === "danger" ? "Failed" : "Success"}
          </p>
          
          {text}
        </div>
      </div>
    </div>
  );
};

export default Alert;
