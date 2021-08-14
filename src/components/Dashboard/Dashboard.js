import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Sidebar from "./Sidebar";
import { useAlert } from "react-alert";

function Dashboard() {
  const alert = useAlert();

  const [imageUrl, setImageUrl] = useState();
  const { handleSubmit, register } = useForm();

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "35eab759f21d250399d0a5affcda5078");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response);
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const onSubmit = (data) => {
    const blogData = {
      postedOn: date,
      title: data.title,
      author: data.author,
      detail: data.detail,
      imageUrl: imageUrl,
    };
    fetch("https://intense-falls-76248.herokuapp.com/addBlogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert.show("Blog added to our database successfully. Thanks!");
      });
  };
  return (
    <div>
      <div className="md:w-5/5">
        <Sidebar></Sidebar>
      </div>
      <div className="w-full text-center">
        <div className="container px-8 mx-auto flex flex-wrap flex-col md:flex-row items-center md:w-3/5">
          <div className="flex flex-col w-full py-8 md:w-2/5 justify-center items-start text-center md:text-left md:pl-20">
            <h1 className="text-4xl font-bold pb-2">
              Add new blog to the website.
            </h1>
            <p>
              Fill up the following form and submit to add new blog to the
              system.
            </p>
          </div>
          <div className="w-full md:w-3/5  text-center md:pl-40 md:pt-20">
            <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-title"
                  >
                    Blog Title
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 p-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-title"
                    type="text"
                    placeholder="Blog Title"
                    name="title"
                    {...register("title")}
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-author"
                  >
                    Author
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-author"
                    type="text"
                    placeholder="Author Name"
                    name="author"
                    {...register("author")}
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-detail"
                  >
                    Blog Detail
                  </label>
                </div>
                <div className="md:w-2/3">
                  <textarea
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-detail"
                    rows="7"
                    type="text"
                    placeholder="Blog Detail"
                    {...register("detail")}
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-password"
                  >
                    Add image
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-password"
                    type="file"
                    placeholder="Add Images"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>

              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded"
                    type="submit"
                  >
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
