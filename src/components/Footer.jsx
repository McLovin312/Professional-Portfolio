import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {year} Thomas Lovin. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
