import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useAlert } from "react-alert";

function NewUser() {
  const alert = useAlert();

  const [data, setData] = useState({
    url: "",
    body: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(data.url, {
      method: "POST",
      body: JSON.stringify({
        body: data.body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => alert.show("Data posted successfully. Thanks!"));
  };

  const handleEvent = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
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
              POST request to specified URL.
            </h1>
          </div>
          <div className="w-full md:w-3/5  text-center md:pl-40 md:pt-20">
            <form className="w-full max-w-sm" onSubmit={(e) => handleSubmit(e)}>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-title"
                  >
                    URL
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 p-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    onChange={(e) => handleEvent(e)}
                    id="url"
                    type="text"
                    placeholder="url"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-author"
                  >
                    Body
                  </label>
                </div>
                <div className="md:w-2/3">
                  <textarea
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    onChange={(e) => handleEvent(e)}
                    id="body"
                    rows="7"
                    type="text"
                    placeholder="Body"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center ml-32">
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded"
                  type="submit"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
