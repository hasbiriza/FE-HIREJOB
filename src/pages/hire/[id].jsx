import React from "react";
import Navbar1 from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import { Button, Form } from "react-bootstrap";
import pinmap from "@/assets/img/pinmap.png";
import pp from "@/assets/img/Harry.png";
import axios from "axios";

const Hire = ({ user }) => {
  return (
    <div
      className="full-page-background"
      style={{ backgroundColor: "#F6F7F8" }}
    >
      <Navbar1 />

      <div className="container">
        <div
          className="border"
          style={{ marginTop: "80px", zIndex: "1", position: "relative" }}
        >
          <div className="row">
            {/* Kolom Kiri */}
            <div className="col-12 col-md-4">
              <div className="card rounded p-2 d-flex flex-column align-items-center">
                <Image
                  src={user.photo || pp}
                  alt="Profile Picture"
                  className="my-3 img-fluid"
                  height={100}
                  width={100}
                />
                <div style={{ width: "90%" }}>
                  <h3>{user.Name}</h3>
                  <h6 className="text-muted">
                    <Image src={pinmap} alt="Pin Map" /> {user.Address}
                  </h6>
                  <h6 className="my-4 text-muted">{user.Description}</h6>
                  <h3 className="mt-3">Skill</h3>
                </div>
              </div>
            </div>

            {/* Kolom Kanan */}
            <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column h-auto" style={{ width: "90%" }}>
                <div>
                  <h2>Hello, Pewpeople</h2>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Itaque eligendi omnis aliquid dolor numquam, quas, odio
                    suscipit assumenda iste facere amet doloremque a ipsum
                    reprehenderit alias blanditiis quidem nemo ab.
                  </p>
                </div>

                <div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicPurpose">
                      <Form.Label className="text-muted">
                        Purpose of this message
                      </Form.Label>
                      <Form.Select aria-label="Purpose select">
                        <option>Project</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label className="text-muted">Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-muted">Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email address"
                        required
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPhoneNumber"
                    >
                      <Form.Label className="text-muted">
                        Phone Number
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter your phone number"
                        required
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Describe in more detail"
                      />
                    </Form.Group>

                    <Button
                      className="my-4 BgPrimaryColor w-100"
                      type="submit"
                    >
                      Hire
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  let user = {};

  try {
    const userResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`
    );
    user = userResponse.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      user,
    },
  };
};

export default Hire;
