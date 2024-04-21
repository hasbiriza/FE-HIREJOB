import styles from "./perekrut.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Navbar1 from "@/components/Navbar/Navbar";
import Image from "next/image"; // Import Image dari next/image
import miniprofile from "@/assets/img/miniprofile.png";

function ProfilePerekrut() {
  const fallbackImage = "/Make Your Day.jpg";

  // Inisialisasi data lokal
  const [userData, setUserData] = useState({
    // foto_perusahaan: "/path/to/foto_perusahaan.jpg",
    nama_perusahaan: "PT PIJAR CAMP ",
    jabatan: "Jabatan",
    bidang_perusahaan: "Bidang Perusahaan",
    provinsi: "Provinsi",
    kota: "Kota",
    info_perusahaan: "Informasi Perusahaan",
    email_perusahaan: "email@perusahaan.com",
    phone_perusahaan: "1234567890",
    linkedin: "https://www.linkedin.com/company/perusahaan",
  });

  return (
    <>
      <Navbar1/>
      <div className="container">
        <div className={styles.sampul} />
        <div className={styles.wrapProfile}>
          <div className={`card ${styles.card}`}>
            <div className={styles.profile}>
              {/* Tampilkan gambar perusahaan jika tersedia, jika tidak, tampilkan gambar fallback */}
              {userData?.foto_perusahaan ? (
                <Image src={userData?.foto_perusahaan} alt="Foto Profil" /> // Gunakan Image dari next/image
              ) : (
                <Image src={miniprofile} alt="miniprofile" /> // Gunakan Image dari next/image
              )}
            </div>
            <div className={styles.dataDiri}>
              <h2 className={styles["nama-perusahaan"]}>
                {userData?.nama_perusahaan}
              </h2>
              <h6 className={styles.posisi}>{userData?.jabatan}</h6>
              <h6 className={styles.bidang}>{userData?.bidang_perusahaan}</h6>
              <p className={styles.address}>
                <i className="bi bi-geo-alt">
                  {userData?.provinsi}, {userData?.kota}
                </i>
              </p>
              <p className={styles.deskripsi}>{userData?.info_perusahaan}</p>
              <div className={styles.wrapButton}></div>
              <div className={styles.sosialMedia}>
                {/* Tampilkan email perusahaan jika tersedia */}
                {userData?.email_perusahaan && (
                  <i className={`bi bi-envelope ${styles.bi}`}>
                    <Link href="">{userData?.email_perusahaan}</Link>
                  </i>
                )}
                {/* Tampilkan nomor telepon perusahaan jika tersedia */}
                {userData?.phone_perusahaan && (
                  <i className={`bi bi-telephone ${styles.bi}`}>
                    <Link href="">{userData?.phone_perusahaan}</Link>
                  </i>
                )}
                {/* Tampilkan link LinkedIn perusahaan jika tersedia */}
                {userData?.linkedin && (
                  <i className={`${styles.bi} bi bi-linkedin`}>
                    <Link href={userData.linkedin}>{userData.linkedin}</Link>
                  </i>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePerekrut;
