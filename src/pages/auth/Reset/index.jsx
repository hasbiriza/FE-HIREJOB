import React from "react";
import Image from "next/image";
import bg2 from "@/assets/img/bg1.png";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";
import Banner from "@/components/Auth/Banner";
import ResetPassword from "@/components/Auth/ResetPassword";

const Reset = () => {
  return (
    <div className=" container-fluid ">
      <div className="row g-1 mt-2 ">
        <Banner />

        <ResetPassword />
      </div>
    </div>
  );
};

export default Reset;
