import React,{ useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../Editor";
import './BlogHome/post.css'

export default function Edit() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [update, setUpdate] = useState("Update post");

  useEffect(() => {
    fetch("http://localhost:4000/post/" + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary);
      });
    });
  }, []);

  async function updatePost(ev) {
      ev.preventDefault();
      setUpdate("Updating...")
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (files && files[0]) {
      data.set("file", files && files[0]);
    }
    const response = await fetch("http://localhost:4000/post", {
      method: "PUT",
      body: data,
      credentials: "include",
    });
      if (response.ok) {
      setUpdate("Update post");
      setRedirect(true);
      } else {
        alert('Failed to update post"');
    }
    }

  if (redirect) {
    return <Navigate to={"/postEdit/" + id} />;
  }

    return (
        <div className="addPostWrapper">
            <form onSubmit={updatePost}>
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
      <Editor onChange={setContent} value={content} />
                <button className="updatebutton" style={{ marginTop: "5px" }}>{update}</button>
    </form></div>
  
  );
}
