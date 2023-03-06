import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import AboutUs from "./Components/AboutUs/about";
import Services from "./Components/Services/services";
import Footer from "./Components/Footer/footer";
import Blog from "./Components/Blog/blog";
import ContactUs from "./Components/ContactUs/contactUs";
import Technologies from "./Components/Technologies/technologies";
import Testimonials from "./Components/Testimonial/testimonial";
import Counter from "./Components/Counter/counter";
import Card from "./Components/Card/Card";
import AppDev from "./Components/Appdev/Appdev";
import { Routes, Route, HashRouter } from "react-router-dom";
import Founders from "./Components/Founders/Founders";
import Mobile from "./Components/mobile/mobile";
import Web from "./Components/web/web";
import Graphic from "./Components/graphic/graphic";
import Digital from "./Components/digital/digital";
import Companies from "./Components/Companies/companies";
import MailShimpForm from "./Components/MailShimp/MailShimpForm";

function App() {
  const [loading, setLoading] = useState(true);
  const gifContainer = document.getElementById("gifContainer");
  if (gifContainer) {
    setTimeout(() => {
      gifContainer.style.display = "none";
      setLoading(false);
    }, 5000);
  }
  return (
    !loading && (
      <HashRouter>
        <>
          <Navbar />
          <Routes>
            <Route
              index
              element={
                <>
                  <Home />
                  <AboutUs />
                  <Founders />
                  <Companies />
                  <Services />
                  <Counter />
                  <Technologies />
                  <Card />
                  <Testimonials />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/contactUs"
              element={
                <>
                  <ContactUs />
                  <MailShimpForm />
                  <Footer />
                </>
              }
            />{" "}
            <Route
              exact
              path="/blog"
              element={
                <>
                  <Blog />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/services"
              element={
                <>
                  <AppDev />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/graphic"
              element={
                <>
                  <Graphic />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/mobile"
              element={
                <>
                  <Mobile />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/web"
              element={
                <>
                  <Web />
                  <Footer />
                </>
              }
            />
            <Route
              exact
              path="/digital"
              element={
                <>
                  <Digital />
                  <Footer />
                </>
              }
            />
          </Routes>
        </>
      </HashRouter>
    )
  );
}

export default App;
