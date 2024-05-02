import Navbar1 from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import styles from "./home.module.css";
import Footer from "@/components/Footer/Footer";
import CardHome from "@/components/CardHome";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/user/data") // Fix to use string for URL
      .then((res) => {
        const allUsers = res.data.data; // Get all users
        const workers = allUsers.filter((user) => user.Role === "Worker"); // Filter only workers
        setUsers(workers); // Set filtered data to state
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  }, []); // Empty dependency array to run once on mount

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
              <Form.Control size="lg" placeholder="Search For Any Skill?" />
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
              address={user.Address}
              photo={user.photo}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;