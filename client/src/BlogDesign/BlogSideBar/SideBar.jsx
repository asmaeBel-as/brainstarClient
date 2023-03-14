import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./SideBar.css";


const SideBar = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    })
      .then(() => {
        setUserInfo(null);
        navigate("/adminBlog");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (redirect) {
      navigate("/adminBlog");
    }
  }, [redirect, navigate]);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);


 
  const username = userInfo && userInfo.username;
  const [isShrinkView, setIsShrinkView] = React.useState(false);

  const handleSidebarView = () => {
    setIsShrinkView(!isShrinkView);
  };

  return (
    <>
      {username && (
        <div className="sdContainer">
          <div
            className={`sidebar-containerrr${isShrinkView ? " shrink" : ""}`}
          >
            <button
              className="sidebar-viewButton"
              type="button"
              aria-label={isShrinkView ? "Expand Sidebar" : "Shrink Sidebar"}
              title={isShrinkView ? "Expand" : "Shrink"}
              onClick={handleSidebarView}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-left"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div className="sidebar-wrapper">
              <ul className="sidebar-list">
                <li className="sidebar-listItem active">
                  <Link className="colorLink" to={"/BlogHome"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="sidebar-listIcon"
                    >
                      <rect
                        x="3"
                        y="3"
                        rx="2"
                        ry="2"
                        className="sidebar-listIcon"
                      />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                    <span className="sidebar-listItemText">Dashboard</span>
                  </Link>
                </li>
                <li className="sidebar-listItem">
                  <Link className="colorLink" to={"/create"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="sidebar-listIcon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <span className="sidebar-listItemText">Add Post</span>
                  </Link>
                </li>
                <li className="sidebar-listItem">
                  <Link className="colorLink" to={"/Emails"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="sidebar-listIcon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>

                    <span className="sidebar-listItemText">Email </span>
                  </Link>
                </li>
                <li className="sidebar-listItem">
                  <Link className="colorLink" to={"/Candidates"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="sidebar-listIcon"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                    </svg>
                    <span className="sidebar-listItemText">Canditates</span>
                  </Link>
                </li>
                <li
                  className="sidebar-listItem"
                  onClick={() => {
                    setRedirect(true);
                    logout();
                  }}
                >
                  <a className="colorLink">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="sidebar-listIcon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>

                    <span className="sidebar-listItemText">Logout</span>
                  </a>
                </li>
              </ul>
              <div className="sidebar-profileSection">
                <img
                  src="https://www.pngitem.com/pimgs/m/128-1280822_check-mark-box-clip-art-blue-admin-icon.png"
                  width="40"
                  height="40"
                  alt="Monica Geller"
                />
                <span>{userInfo.username}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
