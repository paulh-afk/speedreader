import React from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <header>
    <h1 className="brand">SpeedReader</h1>
    <div>
      <NavLink exact to="/">
        Ajouter un texte
      </NavLink>
      <NavLink to="/speedreader">SpeedRead</NavLink>
      <NavLink to="/speedtexts">Créer un SpeedText</NavLink>
    </div>
  </header>
);
