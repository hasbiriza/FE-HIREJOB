import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '@/assets/img/icon.png';
import Link from 'next/link'; // import NextLink from Next.js
import { Button } from 'react-bootstrap';
import styles from "./Navbar.module.css"; // import CSS module

function Navbar1() {
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
          <Nav className="ms-auto ">
            <Link href="/auth/Login">
              <Button variant="outline-success" className={`me-2 ${styles.Login} `}>Masuk</Button>
            </Link>
            {/* d-lg-inline-block d-block w-100 */}
            <Link href="/auth/Register/Pekerja">
              <Button className={`${styles.Register}`}>Daftar</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
