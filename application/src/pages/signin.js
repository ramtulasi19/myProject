import React, { useState } from "react";
import Footer from "../components/footer";
import Client from "../components/Forms";
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
      <Client />
      <Footer />
    </>
  );
};

export default SigninPage;
