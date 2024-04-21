import React from "react";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

const RegisterFormPekerja = () => {
  return (
    <div className=" col-6  d-flex justify-content-center align-items-center">
      <div
        className="d-flex flex-column justify-content-center "
        style={{ width: "80%", height: "95vh" }}
      >
        <div>
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
          <Form>
            <Form.Group
              className="mb-3"
              controlId="formBasicName"
            >
              <Form.Label className=" text-muted ">
                Nama
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan Nama Lengkap"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className=" text-muted ">Email</Form.Label>
              <Form.Control type="email" placeholder="Masukan alamat email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label className=" text-muted ">No Handphone</Form.Label>
              <Form.Control type="number" placeholder="Masukkan No Handphone" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className=" text-muted ">Password</Form.Label>
              <Form.Control type="password" placeholder="Masukkan password" />
            </Form.Group>

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

export default RegisterFormPekerja;
