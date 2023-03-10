import React from "react";
import "./postPage.css";
import { useContext, useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
import SideBlog from "../../utilities/SideBlog";


const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  if (!postInfo) return "";



  return (
    <div class="container" style={{ marginTop: "5rem" }}>
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

        <div class="col-xl-4 col-lg-4 content-left-offset">
          <div class="sidebar-container">
            

           <SideBlog/>
            

         
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
