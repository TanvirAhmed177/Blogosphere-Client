import React, { useEffect, useState } from "react";

import User from "../../images/user.png";
import BlogDetail from "./BlogDetail";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://intense-falls-76248.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div>
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {blogs.map((blog) => (
            <BlogDetail blog={blog}></BlogDetail>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
