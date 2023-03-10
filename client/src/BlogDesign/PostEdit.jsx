import React from "react";
import "./PostPage/postPage.css";
import { useContext, useEffect, useState } from "react";
import { useParams, useLocation, useNavigate, Navigate } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

const PostEdit = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  const [deletepost, setDeletePost] = useState("Delete post");
  const [redirect, setRedirect] = useState(false);


  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";


 async function deletePost(ev) {
      ev.preventDefault();
    setDeletePost("Deleting...");
    try {
      const response = await fetch(`http://localhost:4000/post/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
         alert("Failed to delete post");
        throw new Error("Failed to delete post");
       
      }

      const data = await response.json();
      console.log(data); // should output { message: "Post deleted successfully" }
      setRedirect(true);
      setDeletePost("Delete post");
     window.location.href = "/#/BlogHome";
    } catch (error) {
      alert("Failed to delete post");
      console.error(error);
    }
  }

  return (
    <>
      <div className="edit-row">
        <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
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
          Edit this post
        </Link>
      </div>
      <div className="edit-row">
        <a className="edit-btn" onClick={deletePost}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
         {deletepost}
        </a>
      </div>

      <div class="container" style={{ marginTop: "5rem", marginLeft: "25rem" }}>
        <div class="row">
          <div class="col-xl-8 col-lg-8">
            <div class="blog-post single-post">
              <div class="blog-post-thumbnail">
                <div class="blog-post-thumbnail-inner">
                  <span class="blog-item-tag">Tips</span>
                  <img src={postInfo.file} alt="" />
                </div>
              </div>
              <div class="blog-post-content">
                <h3 class="margin-bottom-10">{postInfo.title}</h3>

                <div class="blog-post-info-list margin-bottom-20">
                  <a href="#" class="blog-post-info">
                    {formatISO9075(new Date(postInfo.createdAt))}
                  </a>
                </div>
                <p dangerouslySetInnerHTML={{ __html: postInfo.content }}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostEdit;