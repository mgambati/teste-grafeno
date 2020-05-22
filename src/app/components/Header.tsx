import React, { FC } from "react";

export const Header: FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Teste Grafeno
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            Matheus Gambati -{" "}
            <a href="https://www.linkedin.com/in/matheusgambati/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
