import React from "react";

export default function Spinner() {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-20 z-40 "></div>
      <div className="fixed inset-0 z-50 ">
        <div className="flex items-center justify-center min-h-full">
          <LoaderIcon className="fill-blue-600 animate-spin" />
        </div>
      </div>
    </>
  );
}

function LoaderIcon({ className = null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      height="2rem"
      width="2rem"
      fill="#000"
      className={className}
    >
      <g>
        <path d="M10,1V3a7,7,0,1,1-7,7H1a9,9,0,1,0,9-9Z" />
      </g>
    </svg>
  );
}
