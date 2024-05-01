import React from "react";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

const RegisterFormPekerja = () => {
  // const [formData, setFormData] = useState({
  //   Name: "",
  //   Email: "",
  //   PhoneNumber: "",
  //   Password: "",
  //   ConfirmPassword: "",
  // });

  // Fungsi untuk memperbarui data formulir saat nilai berubah
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // HandleSubmit
  const registerUser = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/register-worker",
        values
      );

      if (response.status === 200) {
        alert("Pendaftaran berhasil!");
      } else {
        alert(`Pendaftaran gagal: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat melakukan pendaftaran");
    }
  };

  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      PhoneNumber: "",
      Password: "",
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      Name: yup.string().required("Please Enter your Name").min(3).max(25),
      Email: yup.string().required("Please Enter your Email").email(),
      PhoneNumber: yup.number().required("Please Enter your phone number"),
      Password: yup.string().required("Please Enter your password").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    }),
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <div className=" col-sm-12 col-md-6 col-lg-6 col-12  d-flex justify-content-center align-items-center">
      <div
        className="d-flex flex-column justify-content-center "
        style={{ width: "80%", height: "104vh" }}
      >
        <div style={{ marginTop: "60px" }}>
          <h2>Halo, Pewpeople</h2>
          <p className="mt-3 mb-5">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            eligendi omnis aliquid dolor numquam, quas, odio suscipit assumenda
            iste facere amet doloremque a ipsum reprehenderit alias blanditiis
            quidem nemo ab.
          </p>
        </div>
        <div>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className=" text-muted ">Nama</Form.Label>
              <Form.Control
                isInvalid={formik.errors.Name}
                name="Name"
                onChange={handleForm}
                type="text"
                placeholder="Masukkan Nama Lengkap"
                value={formik.values.Name}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.Name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className=" text-muted ">Email</Form.Label>
              <Form.Control
                isInvalid={formik.errors.Email}
                name="Email"
                onChange={handleForm}
                type="email"
                placeholder="Masukan alamat email"
                value={formik.values.Email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label className=" text-muted ">No Handphone</Form.Label>
              <Form.Control
                isInvalid={formik.errors.PhoneNumber}
                name="PhoneNumber"
                onChange={handleForm}
                type="number"
                placeholder="Masukkan No Handphone"
                value={formik.values.PhoneNumber}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className=" text-muted ">Password</Form.Label>
              <Form.Control
                isInvalid={formik.errors.Password}
                name="Password"
                onChange={handleForm}
                type="password"
                placeholder="Masukkan password"
                value={formik.values.Password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.Password}
              </Form.Control.Feedback>
            </Form.Group>

            {/* <Form.Group
              className="mb-3"
              controlId="formBasicPasswordConfirmation"
            >
              <Form.Label className=" text-muted ">
                Konfirmasi Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan Konfirmasi Password"
                name="ConfirmPassword"
                value={formData.ConfirmPassword}
                onChange={handleForm}
              />
            </Form.Group> */}

            <Button className="my-4 BgPrimaryColor w-100" type="submit">
              Daftar
            </Button>
            {/* <Button
              className=" my-4 BgPrimaryColor w-100 "
              type="submit"
              onClick={handleSubmit}
            >
              Daftar
            </Button> */}
            <p className=" text-center ">
              {" "}
              Anda sudah punya akun?{" "}
              <Link
                className="text-decoration-none PrimaryColor"
                href={"/auth/Login"}
              >
                Masuk disini
              </Link>{" "}
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormPekerja;
