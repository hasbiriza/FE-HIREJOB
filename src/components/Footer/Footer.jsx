import Image from "next/legacy/image";
import React from "react";
import Logo from "../../assets/img/logo-white.png";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} text-light  mt-5 pt-5 `}>
      <div className="d-flex align-items-center ">
        <div style={{ position: "relative", height: 40, width: 40 }}>
          <Image
            src={Logo}
            alt="Hiring App Logo"
            fill
            sizes="100vw"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <h2 className="ms-2 mt-2">Peworld</h2>
      </div>
      <p className="mt-3 mb-5" style={{ maxWidth: "350px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro odio
        corporis qui odit nisi mollitia!
      </p>
      <hr style={{ height: "2px" }} />
      <div className="d-flex justify-content-between mt-4">
        <p className="m-0 p-0">Copyright © 2024 Muhammad Hasbiriza</p>
        <div className="d-none d-sm-block">
          <a className="text-light me-5" href="#">
            Telepon
          </a>
          <a className="text-light" href="#">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
