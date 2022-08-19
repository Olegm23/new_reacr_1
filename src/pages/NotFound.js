import React from "react";
import { Link } from "react-router-dom";

const NotFounds = () => {
  return (
    <div>
      This Page is Not Found. Please go to <Link to="/" >Home</Link>
    </div>
  );
};

export default NotFounds;