import React, { useState } from "react";
import TopContent from "../TopContent/TopContent.js";
import BottomContent from "../BottomContent/BottomContent.js";
import "./home.css";

function Home() {
  const [refresh, setRefresh] = useState(0);

  function logoutfunc() {
    window.localStorage.clear();
    window.location.reload();
  }
  return (
    <div className="bg_container">
      <div className="cards_container">
        <img
          alt="app logo"
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <button
          onClick={() => {
            logoutfunc();
          }}
          className="home_logout"
        >
          log out
        </button>
      </div>
      <TopContent refe={{ refresh, setRefresh }}></TopContent>
      <BottomContent refe={{ refresh, setRefresh }}></BottomContent>
    </div>
  );
}

export default Home;
