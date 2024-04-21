import React from "react";
import Image from "next/image";
import bg1 from "@/assets/img/bg1.png";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import Banner from "@/components/Auth/Banner";
import RegisterFormPekerja from "@/components/Auth/RegisterFormPekerja";

const RegisterPekerja = () => {
  return (
   
     <div className=" container-fluid ">
        <div class="row g-1 mt-2 ">
          <Banner/>

          <RegisterFormPekerja/>
        </div>
      </div>
  );
};

export default RegisterPekerja;
