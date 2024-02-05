import React, { useState } from "react";
import Footer from "../components/footer";
import Guest from "../components/Forms/Guest";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

const SigninPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Guest />
      <Footer />
    </>
  );
};

export default SigninPage;
