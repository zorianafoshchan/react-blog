const year = new Date()

const Footer = ({length}) => {
 return(
  <div className="footer">
   <div className="container footer_container">
    <p className="count-items">
     Total: {length} {length <= 1 ? "item" : "items"}
    </p>
   </div>
   <p className="footer_copy">React  {`${year.getFullYear()} year`}</p>
  </div>
 )
}

export default Footer;