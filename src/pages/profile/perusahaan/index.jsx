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

import {
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

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
      <Navbar1 />
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
        <Image
          src={pp}
          alt="pp"
          className="my-3 img-fluid border border-danger position-relative  "
          style={{
            top: "-80px",
          }}
        />

        <div className=" w-75 border border-danger d-flex flex-column  align-items-center ">
          <h3 className=" d-block ">PT.MARTABAT JAYA ABADI</h3>
          
          <div>
            <small>
              <FaMapMarkerAlt /> Alamat
            </small>
          </div>

          <div className="my-2">
            <small>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              consectetur natus quo nihil illum ea!
            </small>
          </div>

          <Button className="w-25 BgSecondaryColor mt-2">Edit Profile</Button>

          {/* Bagian2 Logo */}
          <div className="text-secondary mt-4 ">
            <FaRegEnvelope /> <small className="ms-1">Cek123</small>
          </div>

          <div className="text-secondary mt-1">
            <FaInstagram /> <small className="ms-1">asdasd</small>
          </div>

          <div className="text-secondary mt-1">
            <FaPhoneAlt /> <small className="ms-1">Github</small>
          </div>

          <div className="text-secondary mt-1">
            <FaLinkedin /> <small className="ms-1">LINKEDIN</small>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ProfilePerekrut;
