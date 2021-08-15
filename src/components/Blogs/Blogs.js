import React, { useEffect, useState } from "react";

import User from "../../images/user.png";
import BlogDetail from "./BlogDetail";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function Blogs() {
  const [blogs, setBlogs] = useState([]);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    fetch("https://intense-falls-76248.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(!loading);
      });
  }, []);
  return (
    <div>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <ClipLoader
            color={color}
            loading={loading}
            css={override}
            size={150}
          />

          {blogs.map((blog) => (
            <BlogDetail blog={blog}></BlogDetail>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
