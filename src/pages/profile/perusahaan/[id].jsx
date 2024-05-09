
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
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
import axios from "axios";
import { useRouter } from "next/router";
import AuthenticatedNavbar from "@/components/AuthenticatedNavbar/AuthenticatedNavbar";

const ProfilePerekrut = () => {
  const router = useRouter();
  const [user, setUser] = useState([]);
  const { id } = router.query;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/user/${router.query.id}`)
      .then((res) => {
        const perusahaanData = res.data.data;
        setUser(perusahaanData);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.query.id]); // Empty dependency array to run once on mount

  return (
    <>
       <AuthenticatedNavbar/>
      <div
        className="container d-flex flex-column align-items-center "
        style={{
          marginBottom: "20vh",
          marginTop: "10vh",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        }}
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
          style={{ marginTop: "12vh" }}
          className=" w-75 d-flex flex-column align-items-center "
        >
          <h3 className=" d-block ">{user.Name}</h3>

          <div>
            <small>
              <FaMapMarkerAlt /> {user.Address}
            </small>
          </div>

          <div className="my-2">
            <small>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              consectetur natus quo nihil illum ea!
            </small>
          </div>

          <Button className="editprofilebutton w-25 BgSecondaryColor mt-2">
            Edit Profile
          </Button>

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
};

export default ProfilePerekrut;
