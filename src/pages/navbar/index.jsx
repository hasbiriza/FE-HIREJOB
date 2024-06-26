import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '@/assets/img/icon.png';
import loginface from '@/assets/img/loginface.png' 
import Link from 'next/link'; // import NextLink from Next.js
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

function NavbarLogin() {
  return (
    <Navbar expand="lg" className="bg-body-light border border-warning">
      <Container className='border border-info'>
        <Link href="/LandingPage">
          <Navbar.Brand> 
            <Image src={logo} alt='logo' />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className=" ms-lg-auto  ">
            <Link href="/auth/Login">
            <IoMdNotificationsOutline size={27} color="gray" className='me-4 mt-1'/>
            </Link>
            
            <Link href="/auth/Register/Pekerja">
            <MdOutlineMail size={27} color="gray" className='me-4 mt-1'/>
            </Link>

            <Link href="/profile/edit/pekerja">
            <Image src={loginface} alt='loginface'/>
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogin;
