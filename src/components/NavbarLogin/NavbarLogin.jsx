// import Image from "next/image";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import logo from "@/assets/img/icon.png";
// import loginface from "@/assets/img/loginface.png";
// import Link from "next/link";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { MdOutlineMail } from "react-icons/md";
// import { useState, useEffect } from "react"; // Correctly import useState
// import axios from "axios";
// import getServerSideProps from 'next/head';

// function NavbarLogin({ user }) { // Receive user as prop

//   // No useEffect needed for initial fetch with SSR

//   return (
//     <Navbar expand="lg" className="bg-body-light border border-warning">
//       <Container className="border border-info">
//         <Link href="/LandingPage">
//           <Navbar.Brand>
//             <Image src={logo} alt="logo" />
//           </Navbar.Brand>
//         </Link>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav ">
//           <Nav className=" ms-lg-auto  ">
//             <Link href="/auth/Login">
//               <IoMdNotificationsOutline
//                 size={27}
//                 color="gray"
//                 className="me-4 mt-1"
//               />
//             </Link>

//             <Link href="/auth/Register/Pekerja">
//               <MdOutlineMail size={27} color="gray" className="me-4 mt-1" />
//             </Link>

//             <Link href="/profile/edit/pekerja">
//               <Image src={loginface} alt="loginface" />
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export async function getServerSideProps(context) {
//   const userid = context.params.userid; // Get userid from context if needed

//   try {
//     const res = await axios.get(`http://localhost:8080/api/v1/user/${userid}`);
//     const user = res.data.data;

//     return {
//       props: {
//         user,
//       },
//     };
//   } catch (err) {
//     console.error("Error fetching users:", err);
//     return {
//       props: {
//         user: null,
//       },
//     };
//   }
// }

// export default NavbarLogin;

import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "@/assets/img/icon.png";
import loginface from "@/assets/img/loginface.png";
import Link from "next/link"; // import NextLink from Next.js
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import getServerSideProps from "next/head";

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
  },[userid]);

  return (
    <Navbar expand="lg" className="bg-body-light border border-warning">
      <Container className="border border-info">
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

            <Link href={`/profile/edit/pekerja/${userid}`}>
              <Image
                src={user.photo || loginface}
                width={32}
                height={32}
                alt="loginface"
              />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogin;
