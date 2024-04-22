import React from "react";
import Image from "next/image";
import Link from "next/link";
import miniprofile from "@/assets/img/miniprofile.png";
import pinmap from "@/assets/img/pinmap.png";

const CardHome = (props) => {
  const { name, skills, address, id, photo} = props;
  const imageWidth = 500;
  const imageHeight =500;


  return (
    <>
      <div className="row">
        {/* Bagian Kiri */}
        <div className="col-lg-1 col-md-2 col-sm-2">
          <Image
            src={photo}
            alt="miniprofile"
            className="me-2"
            style={{ marginTop: "30px" }}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
        {/* Bagian Tengah */}
        <div
          className="col-lg-8 col-md-7 col-sm-6"
          style={{ paddingLeft: "50px", paddingTop: "10px" }}
        >
          <h4>{name}</h4>
          <p>Web Developer</p>
          <Image src={pinmap} alt="pinmap" /> {address}
           {/* Skill List */}
          {/* <div className="row mt-3 mb-5">
            <div className="col">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  id="skills"
                  className="card d-inline-block me-1 mb-1 "
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
          </div> */}
        </div>
        {/* Bagian Kanan */}
        <div
          className="col-lg-3 col-md-3 col-sm-4"
          style={{ paddingTop: "50px" }}
        >
          <Link href={`/profile/pekerja/${id}`}>
            <button
              type="button"
              className="btn"
              style={{
                backgroundColor: "#5E50A1",
                padding: "10px 20px",
                cursor: "pointer",
                color: "white",
                marginLeft: "16px",
              }}
            >
              Lihat Profile
            </button>
          </Link>
        </div>
        <hr />
      </div>
    </>
  );
};

export default CardHome;
