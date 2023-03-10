import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./SideBar.css";

const SideBar = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);

    const handleNavbarToggle = () => {
      if (isExpanded) {
        document.querySelector(".sidebar").style.marginLeft = "-180px";
        setIsExpanded(false);
      } else {
        document.querySelector(".sidebar").style.marginLeft = "0px";
        setIsExpanded(true);
      }
    };

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    setRedirect(true);
  }
  if (redirect) {
    return <Navigate to={"/adminBlog"} />;
  }
  const username = userInfo && userInfo.username;
  return (
    <>
      {username && (
        <>
          {" "}
          <div class="sidebar">
            <ul class="sidebar-nav">
              <li>
                <a id="navbar-toggle" onClick={handleNavbarToggle}>
                  Close{" "}
                  <i class="fa fa-bars menu-icon fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <Link to={'/BlogHome'}>
                  Home{" "}
                  <i class="fa fa-home menu-icon fa-2x" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to={'/create'}>
                  Add
                  <i
                    class="fa fa-download menu-icon fa-2x"
                    aria-hidden="true"
                  ></i>
                </Link>
              </li>
              <li>
                <Link to={'/Emails'}>
                  Emails
                  <i class="fa fa-cog menu-icon fa-2x" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <a onClick={logout}>
                  log out
                  <i
                    class="fa fa-sign-out menu-icon fa-2x"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default SideBar;
