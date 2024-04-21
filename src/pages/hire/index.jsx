import React, { useEffect, useState } from "react";
import styles from "./hire.module.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import Footer from "@/components/Footer/Footer";
import Navbar1 from "@/components/Navbar/Navbar";
import Image from "next/image";
import miniprofile from "@/assets/img/miniprofile.png";

function Hire() {
  const [userData, setUserData] = useState({
    name: "John Doe",
    job_desk: "Web Developer",
    kota: "New York",
    provinsi: "New York",
    deskripsi_singkat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    nama_skill: "HTML, CSS, JavaScript",
  });

  const [perekrut, setPerekrut] = useState({
    nama_perusahaan: "ABC Company",
  });

  const perekrutId = Cookies.get("id");
  const [data, setData] = useState({
    title: "",
    desciption: "",
    pekerja_id: 123, // Ganti dengan id pekerja yang ada
    perekrut_id: perekrutId,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitHire = async (e) => {
    e.preventDefault();
    try {
      const requestData = {
        ...data,
        pekerja_name: userData.name,
        pekerja_email: "john.doe@example.com", // Ganti dengan email pekerja yang ada
        perekrut_compname: perekrut.nama_perusahaan,
      };
      // Buat request POST palsu
      console.log("Data yang akan dikirim:", requestData);
      toast.success("Hire request submitted successfully!");
      setData({
        title: "",
        desciption: "",
        pekerja_id: 123, // Ganti dengan id pekerja yang ada
        perekrut_id: perekrutId,
      });
    } catch (err) {
      console.error("Error submitting hire request:", err);
      toast.error("Error submitting hire request. Please try again later.");
    }
  };

  return (
    <>
      <ToastContainer />
     <Navbar1/>
      <div className="container">
        <div className="row mt-5">
          <div className={`col-md-4 mb-4 card ${styles.customCard}`}>
            <div className="card-body">
              <div className={`profile ${styles.profile}`}>
              <Image src={miniprofile} alt="miniprofile" />
              </div>
              <div className={`dataDiri ${styles.dataDiri}`}>
                <h2 className="nama">{userData.name}</h2>
                <h6 className="posisi">{userData.job_desk}</h6>
                <p className="address">
                  <i className="bi bi-geo-alt">{userData.kota}, {userData.provinsi}</i>
                </p>
                <p className={`deskripsi ${styles.deskripsi}`}>
                  {userData.deskripsi_singkat}
                </p>
                <div className={`wrapSkill ${styles.wrapSkill}`}>
                  <h2 className="skill">Skill</h2>
                  {userData.nama_skill && userData.nama_skill
                    .split(",")
                    .map((skill, index) => (
                      <button key={index}>{skill.trim()}</button>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className={`col-md-6 mb-4 ${styles.cardHire}`}>
            <div className={` ${styles.cardHire}`}>
              <div className={`title ${styles.title}`}>
                <h1>Hubungi {userData.name}</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
              </div>
              <form className="form-hire m-5">
                <div className="form-group">
                  <label htmlFor="Posisi">Posisi</label>
                  <input
                    type="text"
                    className={`form-control ${styles.formControl}`}
                    id="Posisi"
                    placeholder="Posisi"
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="deskripsi">Deskripsi</label>
                  <textarea
                    className={`form-control ${styles.formControl}`}
                    id="deskripsi"
                    rows={4}
                    placeholder="Masukkan deskripsi pesan"
                    name="desciption"
                    value={data.desciption}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className={`btn ${styles.btnHire}`}
                  onClick={handleSubmitHire}
                >
                  Hire
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Hire;
