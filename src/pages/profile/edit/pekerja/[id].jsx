import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer/Footer";
import Navbar1 from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import pp from "@/assets/img/Harry.png";
import pinmap from "@/assets/img/pinmap.png";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthenticatedNavbar from "@/components/AuthenticatedNavbar/AuthenticatedNavbar";

const EditPekerja = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem("userid");
    axios
      .get(`http://localhost:8080/api/v1/user/${user}`)
      .then((res) => {
        const userid = res.data.data;
        setUser(userid);
        console.log(userid);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  }, []);

  // Skill Formik
  const formikSkill = useFormik({
    initialValues: {
      Name: "",
    },
    onSubmit: async (values) => {
      const userID = parseInt(localStorage.getItem("userid"));
      const updatedValues = {
        ...values, // Gabungkan values yang ada dengan
        UserId: userID, // Properti UserID baru
      };

      console.log(updatedValues); // Log the value of updatedValues

      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/skill/create",
          updatedValues
        );
        console.log(response);
        if (response.status === 200) {
          alert(`Pendaftaran Skill berhasil: ${response.data.Message}`);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat melakukan pendaftaran");
      }
    },
  });

  const handleFormSkill = (event) => {
    const { target } = event;
    formikSkill.setFieldValue(target.name, target.value);
  };
  // Akhir Skill Formik

  // Pengalaman Kerja Formik
  const formikPengalaman = useFormik({
    initialValues: {
      Position: "",
      StartDate: "",
      EndDate: "",
      Description: "",
      CompanyName: "",
    },
    onSubmit: async (values) => {
      const userID = parseInt(localStorage.getItem("userid"));
      const updatedValues = {
        ...values, // Gabungkan values yang ada dengan
        UserId: userID, // Properti UserID baru
      };

      console.log(updatedValues); // Log the value of updatedValues

      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/experience/create",
          updatedValues
        );
        console.log(response);
        if (response.status === 200) {
          alert(`Pendaftaran Experience berhasil: ${response.data.Message}`);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat melakukan pendaftaran");
      }
    },
  });

  const handleFormPengalaman = (event) => {
    const { target } = event;
    formikPengalaman.setFieldValue(target.name, target.value);
  };
  // Akhir Pengalaman Kerja Formik

  // Portofolio Formik

  const FormikPortofolio = useFormik({
    initialValues: {
      Title: "",
      Repository: "",
      ProjectType: "",
    },
    onSubmit: async (values) => {
      const userID = parseInt(localStorage.getItem("userid"));
      const updatedValues = {
        ...values, // Gabungkan values yang ada dengan
        UserId: userID, // Properti UserID baru
      };

      console.log(updatedValues); // Log the value of updatedValues

      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/project/create",
          updatedValues
        );
        console.log(response);
        if (response.status === 200) {
          alert(`Pendaftaran Portofolio berhasil: ${response.data.Message}`);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat melakukan pendaftaran");
      }
    },
  });

  const handleFormProject = (event) => {
    const { target } = event;
    FormikPortofolio.setFieldValue(target.name, target.value);
  };
  // Akhir Portofolio Formik

  // Datadiri Formik

  const FormikDataDiri = useFormik({
    initialValues: {
      Name: user.photo,
      JobDesk: user.JobDesk,
      CompanyName: user.CompanyName,
      Address: user.Address,
      Description: user.Description,
    },
    onSubmit: async (values) => {
      const userID = parseInt(localStorage.getItem("userid"));
      const updatedValues = {
        ...values, // Gabungkan values yang ada dengan
      };
      console.log(updatedValues); // Log the value of updatedValues

      try {
        const response = await axios.put(
          `http://localhost:8080/api/v1/user/update-worker/${userID}`,
          updatedValues
        );
        console.log(response);
        if (response.status === 200) {
          alert(`Update DataDiri berhasil: ${response.data.Message}`);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat melakukan pendaftaran");
      }
    },
  });

  const handleFormDataDiri = (event) => {
    const { target } = event;
    FormikDataDiri.setFieldValue(target.name, target.value);
  };
  //  const FormikDataDiri = useFormik({
  //   initialValues: {
  //     Name: user.photo,
  //     JobDesk: user.JobDesk,
  //     CompanyName: user.CompanyName,
  //     Address: user.Address,
  //     Description:user.Description,
  //   },
  //   onSubmit: async (values) => {
  //     const userID = parseInt(localStorage.getItem("userid"));
  //     const updatedValues = {
  //       ...values, // Gabungkan values yang ada dengan
  //       UserId: userID, // Properti UserID baru
  //     };

  //     console.log(updatedValues); // Log the value of updatedValues

  //     try {
  //       const response = await axios.put(
  //         `http://localhost:8080/api/v1/user/update-worker/${user}`,
  //         updatedValues
  //       );
  //       console.log(response);
  //       if (response.status === 200) {
  //         alert(`Update DataDiri berhasil: ${response.data.Message}`);
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //       alert("Terjadi kesalahan saat melakukan pendaftaran");
  //     }
  //   },
  // });

  // const handleFormDataDiri = (event) => {
  //   const { target } = event;
  //   FormikDataDiri.setFieldValue(target.name, target.value);
  // };
  // Akhir Datadiri Formik

  return (
    <div
      className="full-page-backgorund"
      style={{ backgroundColor: "#F6F7F8" }}
    >
      <AuthenticatedNavbar />
      <div
        id="Backgorund Ungu Garis"
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
                  src={user.photo || pp}
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
                  <h3>{user.Name}</h3>
                  <h5 className="text-muted">
                    <Image src={pinmap} alt="Pin Map" /> {user.Address}
                  </h5>
                  <h5 className="text-muted">{user.JobDesk}</h5>
                  <h6 className="mt-2 mb-3 text-muted">{user.Description}</h6>
                </div>
              </div>
            </div>

            {/* Kolom Kanan Baru */}
            <div className="col-12 col-md-8 d-flex flex-column justify-content-center align-items-center   ">
              {/* Data Diri */}
              <div
                className="d-flex flex-column rounded  p-5  "
                style={{
                  width: "90%",
                  height: "auto",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div>
                  <h2>Data Diri</h2>
                  <hr />
                </div>

                <div>
                  <Form onSubmit={FormikDataDiri.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label className="text-muted">
                        Nama Lengkap
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Nama Lengkap"
                        name="Name"
                        onChange={handleFormDataDiri}
                        value={FormikDataDiri.values.Name}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicjobdesk">
                      <Form.Label className=" text-muted ">Job Desk</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukan jobdesk"
                        required
                        name="JobDesk"
                        onChange={handleFormDataDiri}
                        value={FormikDataDiri.values.JobDesk}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDomisili">
                      <Form.Label className=" text-muted ">Domisili</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Domisili"
                  
                        name="Address"
                        onChange={handleFormDataDiri}
                        value={FormikDataDiri.values.Address}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicworkplace">
                      <Form.Label className=" text-muted ">
                        Tempat Kerja
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan tempat kerja"
                        required
                        name="CompanyName"
                        onChange={handleFormDataDiri}
                        value={FormikDataDiri.values.CompanyName}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Deskripsi singkat</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Tuliskan deskripsi singkat"
                        name="Description"
                        onChange={handleFormDataDiri}
                        value={FormikDataDiri.values.Description}
                      />
                    </Form.Group>

                    <Button
                      className=" my-4 BgSecondaryColor w-100 "
                      type="submit"
                    >
                      Simpan
                    </Button>
                  </Form>
                </div>
              </div>

              {/* Skill */}
              <div
                className="d-flex flex-column rounded  p-5 mt-5  "
                style={{
                  width: "90%",
                  height: "auto",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div>
                  <h2>Skill</h2>
                  <hr />
                </div>

                <div>
                  <Form
                    onSubmit={formikSkill.handleSubmit}
                    className=" d-flex flex-row align-items-center "
                  >
                    <Form.Group
                      className="mx-3 w-75 "
                      controlId="formBasicSkiil"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Nama Skill"
                        name="Name"
                        onChange={handleFormSkill}
                        value={formikSkill.values.Name}
                      />
                    </Form.Group>

                    <Button
                      className=" my-4 w-auto"
                      variant="warning"
                      type="submit"
                      style={{ fontSize: "1em" }}
                    >
                      Simpan
                    </Button>
                  </Form>
                </div>
              </div>

              {/* Pengalaman Kerja */}
              <div
                className="d-flex flex-column rounded  p-5 mt-5 "
                style={{
                  width: "90%",
                  height: "auto",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div>
                  <h2>Pengalaman Kerja</h2>
                  <hr />
                </div>

                <div>
                  <Form onSubmit={formikPengalaman.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label className="text-muted">Posisi</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Nama Posisi"
                        name="Position"
                        onChange={handleFormPengalaman}
                        value={formikPengalaman.values.Position}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 w-50 "
                      controlId="formBasicjobdesk"
                    >
                      <Form.Label className=" text-muted ">
                        Nama Perusahaan
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukan Nama Perusahaan"
                        name="CompanyName"
                        onChange={handleFormPengalaman}
                        value={formikPengalaman.values.CompanyName}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 w-50"
                      controlId="formBasicDomisili"
                    >
                      <Form.Label className=" text-muted ">
                        Tahun/Bulan Masuk
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Nama Tahun/Bulan"
                        required
                        name="StartDate"
                        onChange={handleFormPengalaman}
                        value={formikPengalaman.values.StartDate}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 w-50"
                      controlId="formBasicDomisili"
                    >
                      <Form.Label className=" text-muted ">
                        Tahun/Bulan Selesai
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Nama Tahun/Bulan"
                        required
                        name="EndDate"
                        onChange={handleFormPengalaman}
                        value={formikPengalaman.values.EndDate}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Deskripsi singkat</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Tuliskan deskripsi singkat"
                        name="Description"
                        onChange={handleFormPengalaman}
                        value={formikPengalaman.values.Description}
                      />
                    </Form.Group>
                    <Button
                      className="w-100"
                      variant="outline-warning"
                      type="submit"
                    >
                      Tambah Pengalaman Kerja
                    </Button>{" "}
                  </Form>
                </div>
              </div>

              {/* Portofolio */}
              <div
                className="d-flex flex-column rounded  p-5 mt-5 "
                style={{
                  width: "90%",
                  height: "auto",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div>
                  <h2>Portofolio</h2>
                  <hr />
                </div>

                <div>
                  <Form onSubmit={FormikPortofolio.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label className="text-muted">
                        Nama Aplikasi
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Nama Aplikasi"
                        name="Title"
                        onChange={handleFormProject}
                        value={FormikPortofolio.values.Title}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 w-50 "
                      controlId="formBasicjobdesk"
                    >
                      <Form.Label className=" text-muted ">
                        Link Repository
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukan Link Repository"
                        required
                        name="Repository"
                        onChange={handleFormProject}
                        value={FormikPortofolio.values.Repository}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Check
                        className="shadow-sm"
                        inline
                        label="Aplikasi Mobile"
                        name="ProjectType"
                        type="radio"
                        value="Aplikasi Mobile"
                        onChange={handleFormProject}
                      />

                      <Form.Check
                        className="shadow-sm"
                        inline
                        label="Aplikasi Web"
                        name="ProjectType"
                        type="radio"
                        value="Aplikasi Web"
                        onChange={handleFormProject}
                      />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="my-5">
                      <Form.Label>Default file input example</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                    <Button
                      className="w-100"
                      variant="outline-warning"
                      type="submit"
                    >
                      Tambah Portofolio
                    </Button>{" "}
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

export default EditPekerja;
