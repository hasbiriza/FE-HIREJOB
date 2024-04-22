import React from "react";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

const ResetPassword = () => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-6 col-12  d-flex justify-content-center align-items-center">
      <div
        className="d-flex flex-column justify-content-center "
        style={{ width: "80%", height: "95vh" }}
      >
        <div>
          <h2>Reset Password</h2>
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className=" text-muted ">Email</Form.Label>
              <Form.Control type="email" placeholder="Masukan alamat email" />
            </Form.Group>

            <Button className=" my-4 BgPrimaryColor w-100 " type="submit">
              Send Password Reset Email
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
