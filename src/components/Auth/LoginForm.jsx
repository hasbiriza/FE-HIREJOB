import React from "react";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

const LoginForm = () => {

  const handleSubmit = () => {
    alert("Submit form")
  }




  return (
    
      <div className=" col-sm-12 col-md-6 col-lg-6 col-12 d-flex justify-content-center align-items-center">
        <div
          className="d-flex flex-column justify-content-center  "
          style={{ width: "80%", height: "95vh" }}
        >
          <div>
            <h2>Halo, Pewpeople</h2>
            <p className="mt-3 mb-5">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              eligendi omnis aliquid dolor numquam, quas, odio suscipit
              assumenda iste facere amet doloremque a ipsum reprehenderit alias
              blanditiis quidem nemo ab.
            </p>
          </div>
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className=" text-muted ">Email</Form.Label>
                <Form.Control type="email" placeholder="Masukan alamat email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className=" text-muted ">Password</Form.Label>
                <Form.Control type="password" placeholder="Masukkan password" required />
              </Form.Group>
              <Link href={"/auth/Reset"} className=" d-block text-end text-decoration-none text-dark">
                {" "}
                Lupa Kata Sandi ?
              </Link>

              <Button href={"/auth/Register/Pekerja"} className=" my-4 BgPrimaryColor w-100 " type="submit">
                Masuk
              </Button>
              <p className=" text-center ">
                {" "}
                Anda belum punya akun?{" "}
                <Link
                  className="text-decoration-none PrimaryColor"
                  href={"/auth/Register/Pekerja"}
                >
                  Daftar disini
                </Link>{" "}
              </p>
            </Form>
          </div>
        </div>
      </div>
  
  );
};

export default LoginForm;
