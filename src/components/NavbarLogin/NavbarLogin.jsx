import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "@/assets/img/icon.png";
import loginface from "@/assets/img/loginface.png";
import Link from "next/link";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";
import axios from "axios";

function NavbarLogin({ userid }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/user/${userid}`)
      .then((res) => {
        const user = res.data.data;
        setUser(user);
        console.log(user);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  }, [userid]);

  return (
    <Navbar expand="lg" className="bg-body-light shadow-sm  ">
      <Container >
        <Link href="/LandingPage">
          <Navbar.Brand>
            <Image src={logo} alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className=" ms-lg-auto  ">
            <Link href="/auth/Login">
              <IoMdNotificationsOutline
                size={27}
                color="gray"
                className="me-4 mt-1"
              />
            </Link>

            <Link href="/auth/Register/Pekerja">
              <MdOutlineMail size={27} color="gray" className="me-4 mt-1" />
            </Link>

            <Dropdown drop="down" className="me-3">
              <Dropdown.Toggle
                variant="link"
                id="dropdown-custom"
                className="p-0 "
              >
                <Image
                  src={user.photo || loginface}
                  width={32}
                  height={32}
                  alt="loginface"
                  className="rounded-circle"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="border-0 shadow">
                <Dropdown.Item href={`/profile/edit/pekerja/${userid}`}>
                  Pengaturan
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    localStorage.clear();
                    window.location.href = "/auth/Login";
                  }}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogin;
