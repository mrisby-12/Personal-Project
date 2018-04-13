import React from "react";
import { Grid, Nav, NavItem } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Grid>
        <Nav justified>
          <NavItem href="http://mkdesignit.com/" target="_blank">
            MK Design It
          </NavItem>
          <NavItem href='#'>
            Contact 
          </NavItem>
          <h4 style={{ textAlign: "center" }}>A MK Design It Creation <br /> © 2018 </h4>
        </Nav>
      </Grid>
    </footer>
  );
};

export default Footer;
