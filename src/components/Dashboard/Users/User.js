import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function User({ user }) {
  const { id, name, username, phone, email, website } = user;
  return (
    <div className="my-1 px-1 w-full md:w-1/2 pb-10 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <header className="text-center justify-between leading-tight p-2 md:p-4">
          <h1 className=" text-gray-600 font-semibold w-5/5">Name: {name}</h1>
        </header>
        <div className="text-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-gray-600 font-semibold w-5/5">
            Website: {website}
          </h1>
        </div>
        <div className="text-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-gray-600 font-semibold w-5/5">Email: {email}</h1>
        </div>
      </article>
    </div>
  );
}

export default User;
