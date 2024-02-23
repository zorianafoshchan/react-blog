import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
 return (
  <div className="missing">
   <h2 className="about__missing">Not fount</h2>
   <p>This blog is about React project!</p>
   <Link to="/">Visit on out page</Link>
  </div>
 )
}

export default Missing;