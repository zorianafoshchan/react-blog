import React from "react";
import { Link } from "react-router-dom";

const About = () => {

 return (

  <div className="about"> 
   <h2 className="about_title">About</h2> 
    <p>This blog is about React project!</p> 
   <Link to="/" >Visit our page</Link>
  </div>
 )
}

export default About;