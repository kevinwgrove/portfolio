import React from "react";
import { ScaleLoader } from "react-spinners";
import "./Loading.css";
export const Loading = () => {
  return (
    <>
      <div id="loader">
        <ScaleLoader
          id="loader"
          color={"#FFFFFF"}
          height={90}
          width={20}
          radius={20}
          margin={10}
        />
      </div>
    </>
  );
};
