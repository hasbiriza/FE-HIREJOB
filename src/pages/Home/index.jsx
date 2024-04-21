import Navbar1 from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import styles from "./home.module.css";
import Footer from "@/components/Footer/Footer";
import miniprofile from "@/assets/img/miniprofile.png";
import Image from "next/image";
import Link from "next/link";
import pinmap from "@/assets/img/pinmap.png";
import CardHome from "@/components/CardHome";
import axios from "axios";

const Home = () => {

  const [users, setUsers] = useState([])
  useEffect(() =>{
    axios
    .get(`http://localhost:8080/api/v1/user/data`)
    .then((res) =>{
      setUsers(res.data.data)
    }) .catch((err)=>{
      console.log(err);
    })
  },[])


  // const users = [
  //   {
  //     name: "William",
  //     skills: ["JavaScript", "React", "Next.js", "Python","JavaScript", "React", "Next.js", "Python","JavaScript", "React", "Next.js", "Python"],
  //     address: "New York, USA"
  //   },
  //   {
  //     name: "Yohan",
  //     skills: ["Python", "Django"],
  //     address: "Los Angeles, USA"
  //   },
  //   {
  //     name: "Wira",
  //     skills: ["Java", "Spring"],
  //     address: "Chicago, USA"
  //   },
  //   {
  //     name: "Hasby",
  //     skills: ["C#", ".NET"],
  //     address: "Houston, USA"
  //   }
  // ];

  return (
    <>
      <Navbar1 />
      <section id="Container-Ungu">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#5E50A1", height: "100px" }}
        >
          <div
            className="container d-flex align-items-center"
            style={{ height: "100px" }}
          >
            <h2 className="text-white">Top Jobs</h2>
          </div>
        </div>
      
      <div className="container mt-5">
        <div id="search-bar" className="mb-5">
          <InputGroup>
            <Form.Control size="lg" placeholder="Search For Any Skill ?" />
            <Button variant="outline-secondary">Kategori</Button>
            <Button
              variant="outline-secondary"
              className={styles.Purple_button}
            >
              Search
            </Button>
          </InputGroup>
        </div>
        {users.map((user, index) => (
          <CardHome 
            id={user.ID}
            key={index} // Ensure each instance of CardHome has a unique key
            name={user.Name}
            // skills={user.skills}
            address={user.Email}
          />
        ))}
      </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
