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
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="sidebar-listIcon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>

                    <span className="sidebar-listItemText">Canditates</span>
                  </Link>
                </li>
                <li className="sidebar-listItem">
                  <Link className="colorLink" to={"/SeoApply"}>
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
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    <span className="sidebar-listItemText">Seo Check</span>
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
