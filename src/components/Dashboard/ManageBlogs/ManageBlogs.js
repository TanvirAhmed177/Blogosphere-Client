import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Delete from "../../../images/Group 33150.png";
import { useAlert } from "react-alert";

function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const alert = useAlert();

  useEffect(() => {
    fetch("https://intense-falls-76248.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://intense-falls-76248.herokuapp.com/deleteBlogs/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) =>
        alert.show("Your blog is being deleted successfully. Thanks!")
      );
  };
  return (
    <div>
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className="w-full text-center">
        <div class="container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <h2 class="text-2xl font-semibold leading-tight">Blogs</h2>

            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Author
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Title
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Date
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  {blogs.map((blog) => (
                    <tbody>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div class="flex">
                            <div class="flex-shrink-0 w-10 h-10">
                              <img
                                class="w-full h-full rounded-full"
                                src={"https://picsum.photos/32/32/?random"}
                                alt=""
                              />
                            </div>
                            <div class="ml-3">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {blog.author}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {blog.title}
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {blog.postedOn}
                          </p>
                        </td>
                        <td class="px-5 pl-14 py-5 border-b border-gray-200 bg-white text-sm">
                          <img
                            style={{ height: "25px", cursor: "pointer" }}
                            src={Delete}
                            onClick={() => handleDelete(blog._id)}
                            alt=""
                          />
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageBlogs;
