import React from "react";
import { Button } from "react-bootstrap";
import poster1 from "../../assets/img/g1.png";
import Image from "next/image";
import Link from "next/link";

const Section1 = () => {
  return (
    <div className="row mt-4 border border-danger">
      <div className={` col-md-6 col-12  border  border-danger`}>
        {/* Talenta Terbaik */}
        <div
          style={{ marginTop: "27%", width: "70%" }}
          className=" ms-5 border border-info h-auto"
        >
          <h1 className=" fw-bolder ">Talenta Terbaik Negeri Untuk Perubahan Revolusi 4.0</h1>
        </div>
        {/* Lorem */}
        <div
          style={{ width: "80%" }}
          className=" mt-3 ms-5 border border-warning h-auto"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nisi
            esse, quod assumenda illo tempora?
          </p>
        </div>
        {/* Button */}
        <Link href={"/home"}>
          <Button className=" mt-3 ms-5 BgSecondaryColor">
            Mulai Dari Sekarang
          </Button>
        </Link>
      </div>

      <div className="col-md-6 col-12 border border-info d-flex align-items-center ">
        <Image
          src={poster1}
          className="img-fluid"
          alt="background1"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Section1;
