import React from "react";
import Image from "next/image";
import bg1 from "@/assets/img/bg1.png";

const Banner = () => {
  return (
    <div className="  col-6 d-flex justify-content-center align-items-center ">
      <div
        className="position-relative bannerauth"
        style={{ width: "95%", height: "100vh" }}
      >
        <Image
          src={bg1}
          // className="img-fluid"
          alt="background1"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          className=" position-absolute  top-0 start-0  "
          style={{
            background: "rgba(125, 115, 180, 0.8)",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
