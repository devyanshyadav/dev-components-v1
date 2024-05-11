"use client";
import React, { useState } from "react";

const AsyncButton = () => {
  const [Fetching, setFetching] = useState([false, "Submit"]);

  const Submitting = async () => {
    setFetching([true, "Submitting..."]);
    try {
      const res = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => console.log(json));
      console.log("response: ", res, "fetching_status: ", Fetching);
      setTimeout(() => {
        setFetching([false, "Submitted"]);
      }, 2000);
    } catch (error) {
      setFetching([false, "Submit"]);
      console.log("error :", error, "fetching_status: ", Fetching);
    }
  };

  return (
    <button
      className="bg-cyan-500 flex items-center justify-center gap-1 text-white fill-white p-2 px-4 rounded-full select-none"
      disabled={Fetching[1] == "Submitted" ? true : false}
      type="button"
      onClick={() => Submitting()}
    >
      {Fetching[1]}
      {Fetching[0] && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            opacity={0.25}
          ></path>
          <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
            <animateTransform
              attributeName="transform"
              dur="0.75s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            ></animateTransform>
          </path>
        </svg>
      )}
    </button>
  );
};

export default AsyncButton;
