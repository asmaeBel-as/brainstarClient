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
import BlogLogin from "./BlogDesign/BlogLogin/BlogLogin";
import BlogHome from "./BlogDesign/BlogHome/BlogHome";
import { UserContextProvider } from "./UserContext";
import AddPost from "./BlogDesign/BlogHome/AddPost";
import SideBar from "./BlogDesign/BlogSideBar/SideBar";
import PostPage from "./BlogDesign/PostPage/PostPage";
import EmailsPage from "./BlogDesign/EmailsPage";
import PostEdit from "./BlogDesign/PostEdit";
import Edit from "./BlogDesign/Edit";
import RecruitPage from "./BlogDesign/RecruitsPage";
import Seo from "./Components/Seo/Seo";
import SeoCheck from "./BlogDesign/SeoCheck";

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
      <UserContextProvider>
        <HashRouter>
          <>
            <Routes>
              <Route
                exact
                path="/postEdit/:id"
                element={
                  <>
                    <SideBar />
                    <PostEdit />
                  </>
                }
              ></Route>
              <Route
                exact
                path="SeoApply"
                element={
                  <>
                    <SideBar />
                    <SeoCheck />
                  </>
                }
              ></Route>
              <Route
                exact
                path="/create"
                element={
                  <>
                    <SideBar />
                    <AddPost />
                  </>
                }
              ></Route>

              <Route
                exact
                path="/adminBlog"
                element={
                  <>
                    <BlogLogin />
                  </>
                }
              ></Route>

              <Route
                exact
                path="/BlogHome"
                element={
                  <>
                    <BlogHome />
                  </>
                }
              ></Route>
              <Route
                exact
                path="/Emails"
                element={
                  <>
                    <SideBar />
                    <EmailsPage />
                  </>
                }
              ></Route>
              <Route
                exact
                path="/Candidates"
                element={
                  <>
                    <SideBar />
                    <RecruitPage />
                  </>
                }
              ></Route>
              <Route
                exact
                path="/post/:id"
                element={
                  <>
                    <Navbar />
                    <PostPage />
                  </>
                }
              ></Route>
              <Route
                path="/edit/:id"
                element={
                  <>
                    <SideBar />
                    <Edit />
                  </>
                }
              />
            </Routes>
            <Routes>
              <Route
                index
                element={
                  <>
                    <Navbar />
                    <Home />
                    <AboutUs />
                    <Founders />
                    <Companies />
                    <Services />
                    <Counter />
                    <Technologies />
                    <Card />
                    <Testimonials />
                    <Seo />
                    <MailShimpForm />
                    <Footer />
                  </>
                }
              />
              <Route
                exact
                path="/contactUs"
                element={
                  <>
                    <Navbar />
                    <ContactUs />

                    <Footer />
                  </>
                }
              />{" "}
              <Route
                exact
                path="/blog"
                element={
                  <>
                    <Navbar />
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
                    <Navbar />
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
                    <Navbar />
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
                    <Navbar />
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
                    <Navbar />
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
                    <Navbar />
                    <Digital />
                    <Footer />
                  </>
                }
              />
            </Routes>
          </>
        </HashRouter>
      </UserContextProvider>
    )
  );
}

export default App;
