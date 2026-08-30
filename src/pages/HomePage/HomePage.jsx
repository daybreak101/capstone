import React from "react";
import "./HomePage.css";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import CallToAction from "../../components/CallToAction/CallToAction";
import Chicago from "../../components/Chicago/Chicago";
import Specials from "../../components/Specials/Specials";
import CustomersSay from "../../components/CustomersSay/CustomersSay";

export default function HomePage() {
  return (
    <>
      <Header />
      <Main>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
      </Main>
      <Footer />
    </>
  );
}
