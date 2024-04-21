import styles from "./perekrut.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Navbar1 from "@/components/Navbar/Navbar";
import Image from "next/image"; // Import Image dari next/image
import miniprofile from "@/assets/img/miniprofile.png";
import pp from "@/assets/img/Harry.png";
import Footer from "@/components/Footer/Footer";
import { Button } from "react-bootstrap";

function ProfilePerekrut() {
  const fallbackImage = "/Make Your Day.jpg";

  // Inisialisasi data lokal
  const [userData, setUserData] = useState({
    // foto_perusahaan: "/path/to/foto_perusahaan.jpg",
    nama_perusahaan: "PT PIJAR CAMP ",
    jabatan: "Jabatan",
    bidang_perusahaan: "Bidang Perusahaan",
    provinsi: "Provinsi",
    kota: "Kota",
    info_perusahaan: "Informasi Perusahaan",
    email_perusahaan: "email@perusahaan.com",
    phone_perusahaan: "1234567890",
    linkedin: "https://www.linkedin.com/company/perusahaan",
  });

  return (
    <>
      <Navbar1/>
      <div className="container border border-danger mt-4 d-flex flex-column align-items-center ">
      <div
        className="rounded"
        style={{
          backgroundColor: "#5E50A1",
          width: "100%",
          height: "30vh",
          zIndex: "0",
          position: "relative",
        }}
      />
      <Image src={pp} alt="pp" className="my-3 img-fluid border border-danger position-relative  " 
      style={{
      top:"-80px"
      }}/>

      <div className=" w-75 border border-danger d-flex flex-column  align-items-center ">
        <h3 className=" d-block ">PT.MARTABAT JAYA ABADI</h3>
        <p className=" d-block">Financial</p>
        <p className=" d-block">Alamat</p>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi molestias sed in voluptatum voluptate repellat magnam minima pariatur beatae!</p>

        <Button className="w-25 BgSecondaryColor">Edit Profile</Button>
      </div>

      </div>
      
      <Footer/>
    </>
  );
}

export default ProfilePerekrut;
