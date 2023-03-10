import React from "react";
import { format, formatISO9075 } from "date-fns";
import { Link, useLocation } from "react-router-dom";

const BlogPost = ({ _id, title, summary, file, createdAt }) => {
  const location = useLocation();
  const isBlogPage = location.pathname === "/BlogHome";

  return (
    <a  class="blog-post">
      <div class="blog-post-thumbnail">
        <div class="blog-post-thumbnail-inner">
          <span class="blog-item-tag">Tips</span>

          {isBlogPage ? (
            <Link to={`/postEdit/${_id}`}>
              <img
                src={file}
                alt=""
                style={{
                  width: "300px",
                }}
              />
            </Link>
          ) : (
            <Link to={`/post/${_id}`}>
              <img
                src={file}
                alt=""
                style={{
                  width: "300px",
                }}
              />
            </Link>
          )}
        </div>
      </div>

      <div class="blog-post-content">
        <span class="blog-post-date">
          {format(new Date(createdAt), "MMM d, yyyy HH:mm")}
        </span>

        {isBlogPage ? (
          <Link to={`/postEdit/${_id}`}>
            <h3>{title}</h3>
            <p>{summary}</p>
          </Link>
        ) : (
          <Link to={`/post/${_id}`}>
            <h3>{title}</h3>
            <p>{summary}</p>
          </Link>
        )}
      </div>

      <div class="entry-icon"></div>
    </a>
  );
};

export default BlogPost;
