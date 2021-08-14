import React from "react";
import Blogs from "../Blogs/Blogs";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import fire from "../Login/Login/firebase.config";

function Home() {
  const handleLogOut = () => {
    fire.auth().signOut();
  };

  return (
    <div>
      <Nav handleLogOut={handleLogOut}></Nav>
      <Header></Header>
      <Blogs></Blogs>
    </div>
  );
}

export default Home;
