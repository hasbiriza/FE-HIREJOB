import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import Image from "next/image";
import bg1 from "@/assets/img/g2.png";
import bg2 from "@/assets/img/g1.png";
import bg3 from "@/assets/img/g3.png";
import Link from "next/link";
import styles from "./Carousel.module.css";


const index = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        
        // centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        spaceBetween={10}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          300: {
            slidesPerView: 1,
          }, 

          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}

        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide>
          <div
            className="bg-light text-center text-white align-content-center align shadow"
            style={{
              width: "380px",
              height: "437px",
            }}
          >
            <div className={"mx-5 text-dark "}>
              <Image
                src={bg1}
                alt=""
                className={` rounded-circle border ${styles["custom-border"]} align-c`}
                width={120}
                height={120}
              />
              <br />
              <br />
              <h3>Niall Horan</h3>
              <p style={{ color: "#9EA0A5" }}>Web Developer</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                iusto quae non eligendi obcaecati 
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
          className="bg-light text-center text-white align-content-center align shadow"
          style={{
            width: "380px",
            height: "437px",
          }}
        >
          <div className={"mx-5 text-dark "}>
            <Image
              src={bg1}
              alt=""
              className={`rounded-circle border ${styles["custom-border"]} `}
              width={120}
              height={120}
            />
            <br />
            <br />
            <h3>Harry Styles</h3>
            <p style={{ color: "#9EA0A5" }}>Data Analyst</p>
            <p>Mantap Amat ini Website buatan bang asbi</p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
          className="bg-light text-center text-white align-content-center align shadow"
          style={{
            width: "380px",
            height: "437px",
          }}
        >
          <div className={"mx-5 text-dark "}>
            <Image
              src={bg1}
              alt=""
              className={`rounded-circle border ${styles["custom-border"]} `}
              width={120}
              height={120}
            />
            <br />
            <br />
            <h3>Alex boyy</h3>
            <p style={{ color: "#9EA0A5" }}>Data Analyst</p>
            <p>Mantap Amat ini Website buatan bang asbi joss keren banget bang asbii !! keren banget dah </p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
          className="bg-light text-center text-white align-content-center align shadow"
          style={{
            width: "380px",
            height: "437px",
          }}
        >
          <div className={"mx-5 text-dark "}>
            <Image
              src={bg1}
              alt=""
              className={`rounded-circle border ${styles["custom-border"]} `}
              width={120}
              height={120}
            />
            <br />
            <br />
            <h3>Ucup Saripudin</h3>
            <p style={{ color: "#9EA0A5" }}>Data Analyst</p>
            <p>Mantap Amat ini Website buatan bang asbi joss keren banget bang asbii !! keren banget dah </p>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default index;
