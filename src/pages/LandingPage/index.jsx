import poster1 from "../../assets/img/g1.png";
import poster2 from "../../assets/img/g2.png";
import poster3 from "../../assets/img/g3.png";
import Link from "next/link";
import Image from "next/image";
import style from "./LandingPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import NavbarLogin from "@/components/NavbarLogin/NavbarLogin";
import Carousel from "@/components/CarouselLandingPage/Carousel";
import { Button } from "react-bootstrap";
import Section1 from "@/components/LandingPage/Section1";

// LandingPage//

const LandingPage = () => {

const [token, setToken] = useState("")
const [userid, setUserid] = useState("") 
useEffect (() => {
  setToken(localStorage.getItem("token"))
  setUserid(localStorage.getItem("User_ID"))
},[token,userid])

  return (
    <>
      <Navbar />
      {/* Batas Navbar */}

      <section className="container border border-warning ">
        <Section1 />
        <div className="row mt-4 border border-danger">
          <div className="col-md-6 col-12 d-grid justify-content-center">
            <div className={style.imgWrapper2}>
              <div className={style.box2} />
              <Image
                className={`img-fluid ${style.imgSection2}`}
                src={poster2}
                alt="poster2"
              ></Image>
            </div>
          </div>
          <div className="col-md-5 col-12  mt-md-0 text-md-start text-wrap">
            <h2 className="fw-bolder">
              Kenapa harus mencari tallent di peworld
            </h2>
            <div className="row mt-4">
              <div className="col-12">
                <p>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{ color: "#6427AD" }}
                  />{" "}
                  Lorem ipsum dolor sit amet.{" "}
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{ color: "#6427AD" }}
                  />{" "}
                  Lorem ipsum dolor sit amet.{" "}
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{ color: "#6427AD" }}
                  />{" "}
                  Lorem ipsum dolor sit amet.{" "}
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{ color: "#6427AD" }}
                  />{" "}
                  Lorem ipsum dolor sit amet.{" "}
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{ color: "#6427AD" }}
                  />{" "}
                  Lorem ipsum dolor sit amet.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className={style.sectionThree}>
          <div className="row my-5 flex-column-reverse flex-md-row ">
            <div
              className="col-12 col-md-6"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <h1 className="fw-bolder  text-md-start text-wrap">
                Skill Talent
              </h1>
              <p className="text-md-start text-wrap">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                modi, impedit nobis vitae commodi fuga.
              </p>
              <div className="row mt-4">
                <div className="col-6">
                  <p>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "#fbb017" }}
                    />{" "}
                    Java{" "}
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "#fbb017" }}
                    />{" "}
                    Golang{" "}
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "#fbb017" }}
                    />{" "}
                    HTML{" "}
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "#fbb017" }}
                    />{" "}
                    Javascript{" "}
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "#fbb017" }}
                    />{" "}
                    Python{" "}
                  </p>
                </div>
                <div className="col-6">
                  <p>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "#fbb017" }}
                    />{" "}
                    PHP{" "}
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "#fbb017" }}
                    />{" "}
                    Ruby{" "}
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "#fbb017" }}
                    />{" "}
                    Sephire{" "}
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{ color: "#fbb017" }}
                    />{" "}
                    Lorem ipsum dolor sit amet.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-12 text-center  mb-4 d-grid justify-content-center"
              data-aos="zoom-out"
              data-aos-duration="2000"
            >
              <div className={style.imgWrapper3}>
                <div className={style.box3} />
                <Image
                  className={`${style.imgSection3} img-fluid`}
                  src={poster3}
                  alt="Poster3"
                ></Image>
              </div>
            </div>
          </div>
        </section>
        <section className={style.sectionFour}>
          <div className="row my-5 justify-content-center align-items-center ">
            <h1
              className="text-center fw-bolder mb-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Their opinion about peworld
            </h1>
            <div
              className="col-lg-12 col-md-12 col-12"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
            >
              {/* <CardSlide /> */}
            </div>
          </div>
        </section>

        {/* Carousel */}
        <Carousel />

        <section className={style.sectionFive}>
          <div className="row my-5 justify-content-center d-flex align-items-center h-100 bg-i">
            <div className="col-12">
              <div className={style.box}>
                <div className="row justify-content-around d-flex align-items-center h-100">
                  <div className="col-md-4 col-12 ps-5 pt-5 pt-md-0 text-light">
                    <h4>Lorem Ipsum Dolar Sit Amet</h4>
                  </div>
                  <div className="col-md-4 col-12 ps-5 text-start pb-5 pb-md-0 text-md-end">
                    <button className="btn btn-light">
                      Mulai dari sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default LandingPage;
