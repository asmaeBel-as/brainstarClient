import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";
import Editor from "../../Editor";
import "./post.css";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [update, setUpdate] = useState("Create post");
  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();
    setUpdate('Creating...')
   const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
    });
    if (response.ok) {
        setUpdate("Create post");
          setRedirect(true);
    }
    }
    if (redirect) {
       return <Navigate to={"/BlogHome"} />;
    }
  return (
    <div className="addPostWrapper">
      <form onSubmit={createNewPost}>
        <input
          type="title"
          placeholder={"Title"}
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
          type="summary"
          placeholder={"Summary"}
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
        />
        <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
        <Editor value={content} onChange={setContent} />
        <button style={{ marginTop: "5px" }}>{ update}</button>
      </form>
    </div>
  );
};

export default AddPost;
