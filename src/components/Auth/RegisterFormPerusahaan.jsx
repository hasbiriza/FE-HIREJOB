import React from "react";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

const RegisterFormPerusahaan = () => {
  return (
    <div className=" col-sm-12 col-md-6 col-lg-6 col-12 d-flex justify-content-center align-items-center">
      <div
        className="d-flex flex-column justify-content-center mt-5"
        style={{ width: "80%", height: "95vh" }}
      >
        <div style={{ marginTop:"20vh" }}>
          <h2>Halo, Pewpeople</h2>
          <p className="mt-3 mb-4">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            eligendi omnis aliquid dolor numquam, quas, odio suscipit assumenda
            iste facere amet doloremque a ipsum reprehenderit alias blanditiis
            quidem nemo ab.
          </p>
        </div>
        <div>
          <Form>
            {/* Nama */}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className=" text-muted ">Nama</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Nama Lengkap" />
            </Form.Group>
            {/* Email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className=" text-muted ">Email</Form.Label>
              <Form.Control type="email" placeholder="Masukan alamat email" />
            </Form.Group>
            {/* Perusahaan */}
            <Form.Group className="mb-3" controlId="formBasicCompany">
              <Form.Label className=" text-muted ">Perusahaan</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Nama Perushaan" />
            </Form.Group>
            {/* Jabatan */}
            <Form.Group className="mb-3" controlId="formBasicPosition">
              <Form.Label className=" text-muted ">Jabatan</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Nama Jabatan" />
            </Form.Group>
            {/* No Handphone */}
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label className=" text-muted ">No Handphone</Form.Label>
              <Form.Control type="number" placeholder="Masukkan No Handphone" />
            </Form.Group>
            {/* Kata Sandi */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className=" text-muted ">Password</Form.Label>
              <Form.Control type="password" placeholder="Masukkan password" />
            </Form.Group>
            {/* Konfirmasi Kata Sandi */}
            <Form.Group
              className="mb-3"
              controlId="formBasicPasswordConfirmation"
            >
              <Form.Label className=" text-muted ">
                Konfirmasi Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan Konfirmasi Password"
              />
            </Form.Group>

            <Button className=" my-4 BgPrimaryColor w-100 " type="submit">
              Daftar
            </Button>
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

export default RegisterFormPerusahaan;
