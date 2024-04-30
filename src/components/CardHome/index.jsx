import React from "react";
import Image from "next/image";
import Link from "next/link";
import miniprofile from "@/assets/img/miniprofile.png";
import pinmap from "@/assets/img/pinmap.png";
import { Button } from "react-bootstrap";

const CardHome = ({ name, skills, address, id, photo }) => {
  const imageWidth = 100;
  const imageHeight = 100;

  return (
    <div className="row">
      {/* Left Section */}
      <div className="col-lg-1 col-md-2 col-sm-2">
        <Image
          src={photo || miniprofile}
          alt="Profile"
          className="me-2"
          style={{ marginTop: "30px" }}
          width={imageWidth}
          height={imageHeight}
        />
      </div>
      {/* Middle Section */}
      <div
        className="col-lg-8 col-md-7 col-sm-6"
        style={{ paddingLeft: "50px", paddingTop: "10px" }}
      >
        <h4>{name}</h4>
        <p>Web Developer</p>
        <Image src={pinmap} alt="Location" width={20} height={20} /> {address}
        {/* Skills */}
        {skills && (
          <div className="row mt-3 mb-5">
            <div className="col">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="card d-inline-block me-1 mb-1"
                  style={{
                    width: "75px",
                    height: "28px",
                    backgroundColor: "#FBB017",
                  }}
                >
                  <p className="text-center">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Right Section */}
      <div
        className="col-lg-3 col-md-3 col-sm-4"
        style={{ paddingTop: "50px" }}
      >
        <Link href={`/profile/pekerja/${id}`}>
          <Button
            style={{
              backgroundColor: "#5E50A1",
              padding: "10px 20px",
              cursor: "pointer",
              color: "white",
              marginLeft: "16px",
            }}
          >
            Lihat Profil
          </Button>
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default CardHome;
