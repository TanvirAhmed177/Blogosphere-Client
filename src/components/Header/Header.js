import React from "react";
import Blog from "../../images/Blogging-cuate.png";
function Header() {
  return (
    <div>
      <div
        className="pt-5 md:pt-0"
        style={{
          backgroundColor: "#aff1da",
          backgroundImage: " linear-gradient(315deg, #aff1da 0%, #f9ea8f 74%)",
        }}
      >
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p className="uppercase tracking-loose w-full text-gray-600">
              What business are you?
            </p>
            <h1 className="my-4 text-5xl font-bold text-gray-600 leading-tight">
              Main Hero Message to sell yourself!
            </h1>
            <p className="leading-normal text-gray-600 text-2xl mb-8">
              Sub-hero message, not too long and not too short. Make it just
              right!
            </p>

            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-600 font-bold rounded-full my-6 py-4 px-8 shadow-lg a  ">
              Subscribe
            </button>
          </div>

          <div className="w-full md:w-3/5  text-center ">
            <img className="w-full md:w-5/5 z-50 " src={Blog} alt="Blog" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
