import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function BlogDetail({ blog }) {
  const { title, author, imageUrl, detail, _id, postedOn } = blog;

  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <Link to={`/blogread/${_id}`}>
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            //   src="https://picsum.photos/600/400/?random"
            src={imageUrl}
          />
        </Link>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className=" text-lg w-4/5">
            <Link
              to={`/blogread/${_id}`}
              className=" text-info text-decoration-none hover:underline"
            >
              {title}
            </Link>
          </h1>
          <p className="text-gray-600 font-semibold w-1/5 text-sm">
            {postedOn}
          </p>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            className="flex items-center no-underline hover:underline text-black"
            href="#"
          >
            <img
              alt="Placeholder"
              className="block rounded-full"
              src={"https://picsum.photos/32/32/?random"}
            />
            <p className="ml-2 text-sm">{author}</p>
          </a>
          <a
            className="no-underline text-gray-300 hover:text-red-500"
            href="#a"
          >
            <span className="hidden">Like</span>
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </footer>
        <Link
          to={`/blogread/${_id}`}
          className=" text-info text-decoration-none"
        >
          <button className="float-right pr-5 pb-5 hover:text-red-500">
            Read more <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Link>
      </article>
    </div>
  );
}

export default BlogDetail;
