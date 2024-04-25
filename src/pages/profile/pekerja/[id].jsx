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
import { format, differenceInDays  } from 'date-fns';

const ProfileIdDetail = ({ pekerja, pengalaman, project }) => {
  const imageWidth = 100; // Replace with the actual width
  const imageHeight = 100; // Replace with the actual height
  
  // const [pengalaman, setPengalaman] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/api/v1/experience/data")
  //     .then((res) => {
  //       const allPengalaman = res.data.data;
  //       // const filteredPengalaman = allPengalaman.filter(
  //       //   (item) => item.UserId === pekerja.id
  //       // );
  //       setPengalaman(allPengalaman);
  //     })
  //     .catch((err) => console.error("Error fetching experiences:", err));
  // }, []);

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
                <div style={{ width: "90%" }}>
                  <h3>{pekerja.Name}</h3>
                  <h5>{pekerja.Position}</h5>
                  <h5>
                    <Image src={pinmap} alt="Pin Map" /> {pekerja.Address}
                  </h5>
                  <h5>{pekerja.Status}</h5>
                  <h5 className="mt-2 mb-3">{pekerja.Description}</h5>
                  <Link href="/hire">
                    <Button
                      className="w-100"
                      style={{ backgroundColor: "#5E50A1", color: "white" }}
                    >
                      Hire
                    </Button>
                  </Link>
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
                          <Nav.Link eventKey="second">
                            Pengalaman Kerja
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Row>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div className="row gap-3 d-flex flex-row flex-wrap text-center mt-4">
                          {project.map((item, index) => (
                            <div key={index} className="col">
                              <Card style={{ width: "219px" }}>
                                <Image src={item.url} alt="Portfolio Image" />
                                <Card.Body>
                                  <Card.Title>{item.Name}</Card.Title>
                                </Card.Body>
                              </Card>
                            </div>
                          ))}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      {pengalaman.map((item, index) => {
                            const startDate = new Date(item.StartDate);
                            const endDate = item.EndDate ? new Date(item.EndDate) : null;
  
                            const formattedStartDate = format(startDate, "dd MMMM yyyy");
                            const formattedEndDate = endDate ? format(endDate, "dd MMMM yyyy") : "Present";
  
                            let duration = "";
                            if (endDate) {
                              const daysDifference = differenceInDays(endDate, startDate);
                              duration = `${daysDifference} day${daysDifference > 1 ? "s" : ""}`;
                            }

                          return (
                            <div key={index} className="mt-4 mb-3 row d-flex flex-row flex-wrap">
                              <div className="col-2" style={{ paddingTop: "20px", textAlign: "center" }}>
                                <Image
                                  className="img-fluid"
                                  src={item.url || tokped}
                                  alt="Company Image"
                                  width={100}
                                  height={100}
                                />
                              </div>
                              <div className="col-10">
                                <h3>{item.Position}</h3>
                                <p>{item.CompanyName}</p>
                                <h4>{formattedStartDate} - {formattedEndDate} {duration}</h4>
                                <p className="mt-3">{item.Description}</p>
                              </div>
                            </div>
                          );
                        })}
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
  let pengalaman = [];
  let project = [];

  try {
    const pekerjaResponse = await axios.get(
      `http://localhost:8080/api/v1/user/${id}`
    );
    pekerja = pekerjaResponse.data.data;

    const pengalamanResponse = await axios.get(
      `http://localhost:8080/api/v1/experience/data`
    );
    pengalaman = Array.isArray(pengalamanResponse.data.data)
      ? pengalamanResponse.data.data.filter(
          (item) => item.UserId === pekerja.id
        )
      : [];

    const projectResponse = await axios.get(
      `http://localhost:8080/api/v1/project/${id}`
    );
    project = Array.isArray(projectResponse.data.data)
      ? projectResponse.data.data
      : [];
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      pekerja,
      pengalaman,
      project,
    },
  };
};

export default ProfileIdDetail;