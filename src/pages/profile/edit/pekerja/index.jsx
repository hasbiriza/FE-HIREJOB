import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer/Footer";
import Navbar1 from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import pp from "@/assets/img/Harry.png";
import pinmap from "@/assets/img/pinmap.png";

const EditPekerja = () => {
  return (
    <div
      className="full-page-backgorund"
      style={{ backgroundColor: "#F6F7F8" }}
    >
      <Navbar1 />
      <div
        id="Backgorund Ungu Garis"
        style={{
          backgroundColor: "#5E50A1",
          width: "100%",
          height: "30vh",
          zIndex: "0",
          position: "absolute",
        }}
      />

      <div className="container">
        <div
          className="border border-info"
          style={{ marginTop: "80px", zIndex: "1", position: "relative" }}
        >
          <div className="row">
            {/* Kolom Kiri */}
            <div className="col-12 col-md-4">
              <div className="card rounded p-2 d-flex flex-column align-items-center">
                <Image
                  src={pp}
                  alt="Profile Picture"
                  className="my-3 img-fluid"
                  height={100}
                  width={100}
                />
                <div
                  style={{
                    width: "90%",
                  }}
                >
                  <h3>alex</h3>
                  <h5>adam</h5>
                  <h5>
                    <Image src={pinmap} alt="Pin Map" /> Cek123
                  </h5>
                  <h5>Web</h5>
                  <h5 className="mt-2 mb-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequatur, veniam!
                  </h5>
                  <h3 className="mt-3">Skill</h3>
                </div>
              </div>
            </div>

            {/* Kolom Kanan Baru */}
            <div className="col-12 col-md-8 d-flex flex-column justify-content-center align-items-center border border-danger ">
              {/* Data Diri */}
              <div
                className="d-flex flex-column rounded  p-5  "
                style={{
                  width: "90%",
                  height: "85vh",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div>
                  <h2>Data Diri</h2>
                  <hr />
                </div>

                <div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label className="text-muted">
                        Nama Lengkap
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Nama Lengkap"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicjobdesk">
                      <Form.Label className=" text-muted ">Job Desk</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukan jobdesk"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDomisili">
                      <Form.Label className=" text-muted ">Domisili</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Domisili"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicworkplace">
                      <Form.Label className=" text-muted ">
                        Tempat Kerja
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan tempat kerja"
                        required
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Deskripsi singkat</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Tuliskan deskripsi singkat"
                      />
                    </Form.Group>
                  </Form>
                </div>
              </div>

              {/* Skill */}
              <div
                className="d-flex flex-column rounded  p-5 mt-5  "
                style={{
                  width: "90%",
                  height: "30vh",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div>
                  <h2>Skill</h2>
                  <hr />
                </div>

                <div className="border border-danger ">
                  <Form className="border border-danger d-flex flex-row align-items-center ">
                    <Form.Group className="mx-3 w-75 " controlId="formBasicSkiil">
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Nama Skill"
                        required
                      />
                    </Form.Group>

                    <Button
                      href={"/auth/Register/Pekerja"}
                      className=" my-4 w-auto"
                      variant="warning"
                      type="submit"
                      style={{ fontSize: "1em" }}
                    >
                      Simpan
                    </Button>
                    
                  </Form>
                </div>
              </div>

              {/* Pengalaman Kerja */}
              <div
                className="d-flex flex-column rounded  p-5 mt-5 "
                style={{
                  width: "90%",
                  height: "75vh",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div>
                  <h2>Pengalaman Kerja</h2>
                  <hr />
                </div>

                <div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label className="text-muted">
                        Posisi
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Nama Posisi"
                        required
                      />
                    </Form.Group>

                    <div className=" d-flex flex-row justify-content-between ">
                      
                    <Form.Group className="mb-3 w-50 " controlId="formBasicjobdesk">
                      <Form.Label className=" text-muted ">Nama Perusahaan</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukan Nama Perusahaan"
                        required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 ms-3" controlId="formBasicDomisili">
                      <Form.Label className=" text-muted ">Bulan/Tahun</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Nama Bulan/tahun"
                        required
                      />
                    </Form.Group>
                      </div>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Deskripsi singkat</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Tuliskan deskripsi singkat"
                      />
                    </Form.Group>


                    <Button className="w-100" variant="outline-warning">Tambah Pengalaman Kerja</Button>{' '}
                  </Form>
                </div>
              </div>

               {/* Portofolio */}
               <div
                className="d-flex flex-column rounded  p-5 mt-5 "
                style={{
                  width: "90%",
                  height: "75vh",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div>
                  <h2>Pengalaman Kerja</h2>
                  <hr />
                </div>

                <div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label className="text-muted">
                        Nama Aplikasi
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Nama Aplikasi"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3 w-50 " controlId="formBasicjobdesk">
                      <Form.Label className=" text-muted ">Link Repository</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukan Link Repository"
                        required
                        />
                    </Form.Group>

                    

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Deskripsi singkat</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Tuliskan deskripsi singkat"
                      />
                    </Form.Group>


                    <Button className="w-100" variant="outline-warning">Tambah Pengalaman Kerja</Button>{' '}
                  </Form>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditPekerja;
