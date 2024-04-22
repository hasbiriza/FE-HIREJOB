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
      <div
        className="container d-flex flex-column align-items-center "
        style={{ marginBottom: "20vh", marginTop: "10vh",border:"1px solid #ccc",borderRadius:"10px", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}
      >
        <div
          className="rounded"
          style={{
            backgroundColor: "#5E50A1",
            width: "101.95%",
            height: "20vh",
            zIndex: "0",
            position: "",
          }}
        />
        <Image
          src={pp}
          alt="pp"
          className="mt-3 mb-5 img-fluid position-absolute "
          style={{
            top: "27vh", 
          }}
        />
        <div 
        style={{ marginTop:"12vh" }}
        className=" w-75 d-flex flex-column align-items-center ">
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

          <Button className="editprofilebutton  w-25 BgSecondaryColor mt-2">Edit Profile</Button>

          {/* Bagian2 Logo */}
          <div className="mb-5">
            <div className="text-secondary mt-4 ">
              <FaRegEnvelope /> <small className="ms-1">Email</small>
            </div>

            <div className="text-secondary mt-1">
              <FaInstagram /> <small className="ms-1">Instagram</small>
            </div>

            <div className="text-secondary mt-1">
              <FaPhoneAlt /> <small className="ms-1">Phone Number</small>
            </div>

            <div className="text-secondary mt-1 mb-5">
              <FaLinkedin /> <small className="ms-1">LinkedIn</small>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfilePerekrut;
