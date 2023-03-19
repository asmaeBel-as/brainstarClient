import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SeoCheck = () => {
  const [emails, setEmails] = useState([]);
   

  useEffect(() => {
    fetch("http://localhost:4000/seo").then((response) => {
      response.json().then((emails) => {
        setEmails(emails);
        console.log(emails);
        console.log(setEmails(emails));
      });
    });
  }, []);

  async function deleteEmail(ev) {
    ev.preventDefault();
       try {
         const response = await axios.delete(
           "http://localhost:4000/seo"
         );
         console.log(response.data);
         alert("seo appliers table emptied successfully");
         // "Email collection emptied successfully"
       } catch (error) {
         console.error(error);
       }
  }

  return (
    <>
      <div className="bgCntainer">
        {" "}
        <div className="heightDiv"></div>
        <div className="acontainer">
          {" "}
          <a
            className="link"
            style={{ marginLeft: "25rem" }}
            onClick={(ev) => deleteEmail(ev)}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            Empty table
          </a>
        </div>
        <table className="fixed_headers">
          <thead>
            <tr>
              <th style={{ width: "300px" }}>Email</th>
              <th>Username</th>
              <th>WebUrl</th>
            </tr>
          </thead>
          <tbody>
            {emails.length > 0 &&
              emails.map((emails) => (
                <tr key={emails._id}>
                  <td style={{ width: "300px" }}>{emails.email} </td>
                  <td>{emails.username}</td>
                  <td>{emails.weburl}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SeoCheck