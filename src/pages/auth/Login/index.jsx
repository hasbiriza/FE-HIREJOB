import React from "react";
import Banner from "@/components/Auth/Banner";
import LoginForm from "@/components/Auth/LoginForm";


const Login = () => {
  return (
    <>
      <div className=" container-fluid  ">
        <div className="row g-1 mt-2 ">
          <Banner />

          <LoginForm/>
        </div>
        
      </div>
    </>


  );
};

export default Login;
