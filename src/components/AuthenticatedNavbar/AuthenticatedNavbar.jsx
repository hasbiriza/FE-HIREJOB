import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import NavbarLogin from "@/components/NavbarLogin/NavbarLogin";

const AuthenticatedNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userid, setUserid] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userid = localStorage.getItem("userid");
    setIsLoggedIn(token !== null);
    setUserid(userid);
  }, []);

  return isLoggedIn ? <NavbarLogin userid={userid} /> : <Navbar />;
};

export default AuthenticatedNavbar;