import React from "react";

export default function Headers() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary ">
      <div className="container-fluid">
        <div>
          <a className="navbar-brand text-light" href="#">
            IBIK Kesatuan
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link text-light" aria-current="page" href="home">
              Home
            </a>
            <a className="nav-link text-light" href="#">
              PWL
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
