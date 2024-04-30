import Navbar1 from "@/components/Navbar/Navbar";
import { Button, Form, InputGroup } from "react-bootstrap";
import styles from "./home.module.css";
import Footer from "@/components/Footer/Footer";
import CardHome from "@/components/CardHome";
import axios from "axios";

const Home = ({ workers }) => {
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
              <Button variant="outline-secondary">Category</Button>
              <Button
                variant="outline-secondary"
                className={styles.Purple_button}
              >
                Search
              </Button>
            </InputGroup>
          </div>
          {workers.map((user, index) => (
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

export const getServerSideProps = async () => {
  let workers = [];

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/data`
    );
    const allUsers = response.data.data;
    workers = allUsers.filter((user) => user.Role === "Worker");
  } catch (error) {
    console.error("Error fetching users:", error);
  }

  return {
    props: {
      workers,
    },
  };
};

export default Home;
