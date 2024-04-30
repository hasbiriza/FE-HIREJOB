import React from "react";
import pp from "@/assets/img/Harry.png";
import Navbar1 from "@/components/Navbar/Navbar"; // Import Navbar1
import { Button, Card, Nav, Row, Tab } from "react-bootstrap";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import axios from "axios";
import { format, differenceInDays } from "date-fns";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const ProfilePerekrut = ({ user }) => {
  return (
    <>
      <Navbar1 />
      <div
        className="container d-flex flex-column align-items-center"
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
          }}
        />
        <Image
          src={pp}
          alt="Profile Picture"
          className="mt-3 mb-5 img-fluid position-absolute"
          style={{ top: "27vh" }}
        />
        <div
          style={{ marginTop: "12vh" }}
          className="w-75 d-flex flex-column align-items-center"
        >
          <h3>{user.Name}</h3>
          <div>
            <small>
              <FaMapMarkerAlt /> {user.Address}
            </small>
          </div>
          <div className="my-2">
            <small>{user.Description}</small>
          </div>

          <Button className="editprofilebutton w-25 BgSecondaryColor mt-2">
            Edit Profile
          </Button>

          <div className="mb-5">
            <div className="text-secondary mt-4">
              <FaRegEnvelope /> <small>{user.Email}</small>
            </div>

            <div className="text-secondary mt-1">
              <FaInstagram /> <small>{user.Instagram}</small>
            </div>

            <div className="text-secondary mt-1">
              <FaPhoneAlt /> <small>{user.PhoneNumber}</small>
            </div>

            <div className="text-secondary mt-1 mb-5">
              <FaLinkedin /> <small>{user.LinkedIn}</small>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  let user = {};

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`
    );
    user = response.data.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }

  return {
    props: {
      user,
    },
  };
};

export default ProfilePerekrut;
