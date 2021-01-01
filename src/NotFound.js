import React from "react";
import { Link } from "@reach/router";
import Image from "./assets/images/404.png";

const NotFound = () => {
  return (
    <div className="not-found">
      <Link to="/">
        <img src={Image} alt="page not found" />
        <h2>Ooops page not found!</h2>
      </Link>
    </div>
  );
};

export default NotFound;
