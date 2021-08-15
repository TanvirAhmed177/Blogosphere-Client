import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Nav from "../Nav/Nav";

function BlogRead() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState({});

  useEffect(() => {
    fetch("https://intense-falls-76248.herokuapp.com/blogs/" + id)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [id]);
  const { title, author, imageUrl, detail, postedOn } = blogs;
  return (
    <div>
      <Nav></Nav>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div className="max-w-2xl mx-auto">
          <img src={imageUrl} alt="" />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="">
              <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">
                {title}
              </h1>
              <p className="text-gray-700 text-xs mt-2">
                Written By:{" "}
                <a
                  href="#"
                  className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  {author}
                </a>
              </p>
              <p className="text-base leading-8 my-5">{detail}</p>
              <p className="text-gray-700 text-xs mt-2">
                Posted On:{" "}
                <a
                  href="#"
                  className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  {postedOn}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogRead;
