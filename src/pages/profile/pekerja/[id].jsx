import React from "react";
import pp from "@/assets/img/Harry.png";
import Navbar1 from "@/components/Navbar/Navbar"; // Import Navbar1
import pinmap from "@/assets/img/pinmap.png";
import { Button, Card, Nav, Row, Tab } from "react-bootstrap";
import Link from "next/link";
import f1 from "@/assets/img/f1.png";
import tokped from "@/assets/img/tokped.png";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import axios from "axios";

const ProfileIdDetail = ({ pekerja }) => {
  const pengalaman = [
    {
      Posisi: "Frontend Developer",
      Nama: "ABC Company",
      Desc: "Developed user interface components and implemented them following well-known React.js workflows.",
    },
    {
      Posisi: "UI/UX Designer",
      Nama: "XYZ Corporation",
      Desc: "Designed and implemented user interfaces for e-commerce websites.",
    },
  ];

  const portofolio = [
    { Namaaplikasi: "Portfolio Website" },
    { Namaaplikasi: "E-commerce App" },
    { Namaaplikasi: "Social Media Dashboard" },
  ];

  return (
    <>
      <Navbar1 />
      <div
        style={{
          backgroundColor: "#5E50A1",
          width: "100%",
          height: "30vh",
          zIndex: "0",
          position: "absolute",
        }}
      />

      <div className="container">
        <div style={{ marginTop: "80px", zIndex: "1", position: "relative" }}>
          <div className="row">

            {/* Kolom Kiri */}
            <div className="col-12 col-md-4">
              <div className="card rounded p-2 d-flex flex-column align-items-center">
                <Image
                  src={pekerja.photo || pp}
                  alt="Profile Picture"
                  className="my-3 img-fluid"
                  height={100}
                  width={100}
                />
                <div
                  style={{
                    width: "90%",
                  }}
                >
                  <h3>{pekerja.Name}</h3>
                  <h5>{pekerja.Pekerjaan}</h5>
                  <h5>
                    <Image src={pinmap} alt="Pin Map" /> {pekerja.Address}
                  </h5>
                  <h5>{pekerja.Status}</h5>
                  <h5 className="mt-2 mb-3">{pekerja.Description}</h5>
                  <Link href="/hire">
                    <Button className="w-100" style={{ backgroundColor: "#5E50A1", color: "white" }}>
                      Hire
                    </Button>
                  </Link>
                  <h3 className="mt-3">Skill</h3>
                </div>
              </div>
            </div>

            {/* Kolom Kanan */}
            <div className="col-12 col-md-8 mt-5 mt-md-0">
              <div className="card rounded p-2">
                <div style={{ marginLeft: "30px", marginTop: "10px" }}>
                  <Tab.Container defaultActiveKey="first">
                    <Row>
                      <Nav variant="tabs" className="flex-row">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Portofolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Pengalaman Kerja</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Row>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div className="row gap-3 d-flex flex-row flex-wrap text-center mt-4">
                          {portofolio.map((item, index) => (
                            <div key={index} className="col">
                              <Card style={{ width: "219px" }}>
                                <Image src={f1} alt="Portfolio Image" />
                                <Card.Body>
                                  <Card.Title>{item.Namaaplikasi}</Card.Title>
                                </Card.Body>
                              </Card>
                            </div>
                          ))}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {pengalaman.map((item, index) => (
                          <div key={index} className="mt-4 mb-3 row d-flex flex-row flex-wrap">
                            <div className="col-2" style={{ paddingTop: "20px", textAlign: "center" }}>
                              <Image className="img-fluid" src={tokped} alt="Company Image" />
                            </div>
                            <div className="col-10">
                              <h3>{item.Posisi}</h3>
                              <h4>{item.Nama}</h4>
                              <p className="mt-3">{item.Desc}</p>
                            </div>
                          </div>
                        ))}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
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
  let pekerja = {};
  let pengalaman = {}

  try {
    const UserResponse = await axios.get(`http://localhost:8080/api/v1/user/${id}`);
    pekerja = UserResponse.data.data;

    const pengalamanResponse = await axios.get(`http://localhost:8080/api/v1/experience/${id}`);
    pengalaman = pengalamanResponse.data.data;

  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      pekerja,
      pengalaman,
    },
  };
};

export default ProfileIdDetail;
