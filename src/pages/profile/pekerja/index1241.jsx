import React, { useEffect, useState } from "react";
import Navbar1 from "@/components/Navbar/Navbar"; // Import Navbar1
import pp from "@/assets/img/Harry.png";
import pinmap from "@/assets/img/pinmap.png";
import { Button, Card, Nav, Row, Tab } from "react-bootstrap";
import Link from "next/link";
import f1 from "@/assets/img/f1.png";
import tokped from "@/assets/img/tokped.png";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import axios from "axios";

const Profile = () => {
      const [pekerja, setPekerja] = useState([])
      useEffect(() =>{
        axios
        .get(`http://localhost:8080/api/v1/user/3`)
        .then((res) =>{
          setPekerja(res.data.data)
        }) .catch((err)=>{
          console.log(err);
        })
      },[])

  // const [pekerja] = useState({
  //   Name: "John Doe",
  //   Pekerjaan: "Frontend Developer",
  //   Alamat: "Jakarta",
  //   Status: "Available",
  //   Deskripsi: "Experienced Frontend Developer with a demonstrated history of working in the information technology and services industry.",
  // });

  // const [portofolio] = useState([
  //   { Namaaplikasi: "Portfolio Website" },
  //   { Namaaplikasi: "E-commerce App" },
  //   { Namaaplikasi: "Social Media Dashboard" },
  // ]);

  // const [skill] = useState([
  //   { Nama_skill: "HTML" },
  //   { Nama_skill: "CSS" },
  //   { Nama_skill: "JavaScript" },
  //   { Nama_skill: "React" },
  // ]);

  // const [pengalaman] = useState([
  //   { Posisi: "Frontend Developer", Nama: "ABC Company", Desc: "Developed user interface components and implemented them following well-known React.js workflows." },
  //   { Posisi: "UI/UX Designer", Nama: "XYZ Corporation", Desc: "Designed and implemented user interfaces for e-commerce websites." },
  // ]);

  return (
    <>
      <Navbar1 />
      <div style={{ backgroundColor: "#5E50A1", width: "1488px", height: "500px", border: "1px solid #5E50A1", zIndex: "0", position: "absolute" }}></div>
      <div className="container">
        <div style={{ marginTop: "80px", zIndex: "1", position: "relative" }}>
          <div className="row">
            <div className="col-4">
              <div className="card rounded p-2">
              <Image src={pp} alt="pp" className="mt-3 mb-3" />
                <div style={{ paddingLeft: "20px" }}>
                  {/* {JSON.stringify(pekerja)} */}
                  <h3>{pekerja.Name}</h3>
                  <h5>{pekerja.Pekerjaan}</h5>
                  <h5>
                  <Image src={pinmap} alt="pinmap" /> {pekerja.Alamat}
                  </h5>
                  <h5>{pekerja.Status}</h5>
                  <h5 className="mt-2 mb-3">{pekerja.Deskripsi}</h5>
                  <div className="text-center">
                    <Link href="/hire">
                      <Button style={{ backgroundColor: "#5E50A1", color: "white", width: "350px" }}>Hire</Button>
                    </Link>
                  </div>
                  <h3 className="mt-3">Skill</h3>
                  {/* <div className="row gap-3 mb-3 d-flex flex-row flex-wrap text-center" style={{ paddingRight: "20px" }}>
                    {skill.map((item, index) => (
                      <div key={index} className="col card" style={{ backgroundColor: "#fdd074" }}>
                        {item.Nama_skill}
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col">
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
                        {/* <div className="row gap-3 mb-3 d-flex flex-row flex-wrap text-center mt-4" style={{ paddingRight: "20px" }}>
                          {portofolio.map((item, index) => (
                            <div key={index} className="col">
                              <Card style={{ width: "219px" }}>
                              <Image src={f1} alt="tokped" />
                                <Card.Body>
                                  <Card.Title>{item.Namaaplikasi}</Card.Title>
                                </Card.Body>
                              </Card>
                            </div>
                          ))}
                        </div> */}
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="second">
                        {pengalaman.map((item, index) => (
                          <div key={index} className="mt-4 mb-3 row d-flex flex-row flex-wrap" style={{ paddingRight: "20px" }}>
                            <div className="col-2" style={{ paddingTop: "20px", textAlign: "center" }}>
                            <Image src={tokped} alt="tokped" />
                            </div>
                            <div className="col-10">
                              <h3>{item.Posisi}</h3>
                              <h4>{item.Nama}</h4>
                              <p className="mt-3">{item.Desc}</p>
                            </div>
                          </div>
                        ))}
                      </Tab.Pane> */}
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

export default Profile;
