import React, { useContext, useEffect, useState } from "react";

const EmailsPage = () => {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/send-email").then((response) => {
      response.json().then((emails) => {
        setEmails(emails);
        console.log(emails);
        console.log(setEmails(emails));
      });
    });
  }, []);

  return (
    <>
      {" "}
      <div className="post-page">
        <h1 style={{ color: "black" }}>
          hey
          {emails.length > 0 &&
            emails.map((emails) => (
              <>
                {" "}
                <table>
                  <tr>
                    <td> {emails.email} </td>
                    <td>{emails.firstName + " " + emails.lastName}</td>
                    <td>{emails.phone}</td>
                  </tr>
                </table>
                
                <h2></h2>
                <h2></h2>
                <h2>{emails.skype}</h2>
                <h2>{emails.budget}</h2>
                <h2>{emails.massage}</h2>
                <img src={"http://localhost:4000/" + emails.file} />
              </>
            ))}
        </h1>
      </div>
    </>
  );
};

export default EmailsPage;
