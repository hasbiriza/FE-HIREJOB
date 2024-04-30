import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer/Footer";
import Navbar1 from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import pp from "@/assets/img/Harry.png";
import pinmap from "@/assets/img/pinmap.png";
import { useRouter } from "next/router";
import axios from "axios";

const Hire = () => {
  const [users, setUsers] = useState([]);
  const [skills, setSkills] = useState([]);
  const router = useRouter()

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/user/${router.query.id}`) // Fix to use string for URL
      .then((res) => {
        const allUsers = res.data.data; // Get all users
        setUsers(allUsers); // Set filtered data to state
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });

     axios
      .get(`http://localhost:8080/api/v1/skill/data`) 
      .then((res) => {
        const skillData = Array.isArray(res.data.data)
          ? res.data.data.filter((item) => item.UserId === users.ID)
          : [];
        setSkills(skillData);
      })
      .catch((err) => {
        console.error("Error fetching skills:", err);
      }); 

    }, [router.query.id, users.ID]); //

 

  

  return (
    <div
      className="full-page-backgorund"
      style={{ backgroundColor: "#F6F7F8" }}
    >
      <Navbar1 />

      <div className="container">
        <div
          className="border border-danger"
          style={{ marginTop: "80px", zIndex: "1", position: "relative" }}
        >
          <div className="row">
            {/* Kolom Kiri */}
            <div className="col-12 col-md-4">
              <div className="card rounded p-2 d-flex flex-column align-items-center">
                <Image
                  src={users.photo}
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
                  {/* {JSON.stringify(users)} */}
                  <h3>{users.Name}</h3>
                  <h6 className="text-muted">
                    <Image src={pinmap} alt="Pin Map" /> {users.Address}
                  </h6>
                  {/* <h5>Web</h5> */}
                  <h6 className="my-4 text-muted ">
                    {users.Description}
                  </h6>
                  <h3 className="mt-3">Skill</h3>
                  <div className="row gap-2 mb-3 text-center " >
                  {skills.map((skill, index) => (
                    <div key={index} className="card w-auto " style={{ backgroundColor: "#fdd074" }}>
                      {skill.Name}
                    </div>
                  ))}
                </div>
                </div>
              </div>
            </div>

            {/* Kolom Kanan Baru */}
            <div className="col-12 col-md-8 d-flex justify-content-center align-items-center border border-danger ">
              <div
                className="d-flex flex-column border border-info h-auto "
                style={{ width: "90%",}}
              >
                <div>
                  <h2>Halo, Pewpeople</h2>
                  <p className=" mb-5">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Itaque eligendi omnis aliquid dolor numquam, quas, odio
                    suscipit assumenda iste facere amet doloremque a ipsum
                    reprehenderit alias blanditiis quidem nemo ab.
                  </p>
                </div>

                <div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label className=" text-muted ">
                        Tujuan tentang pesan ini
                      </Form.Label>
                      <Form.Select className="text-muted" aria-label="Default select example">
                        <option >Projek</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label className="text-muted">
                        Nama Lengkap
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Nama Lengkap"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className=" text-muted ">Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Masukan alamat email"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                      <Form.Label className=" text-muted ">
                        No Handphone
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Masukkan No Handphone"
                        required
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Deskripsi</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Deskripsikan/Jelaskan lebih detail"
                      />
                    </Form.Group>

                    <Link
                      href={"/auth/Reset"}
                      className=" d-block text-end text-decoration-none text-dark"
                    ></Link>

                    <Button
                      href={"/auth/Register/Pekerja"}
                      className=" my-4 BgPrimaryColor w-100 "
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
}

// export const getServerSideProps = async (context) => {
//   const { id } = context.params;
//   let pekerja = {};

//   try {
//     const UserResponse = await axios.get(`http://localhost:8080/api/v1/user/${id}`);
//     pekerja = UserResponse.data.data;
//     console.log(pekerja);

//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }

//   return {
//     props: {
//       pekerja,
//     },
//   };
// };

export default Hire;
