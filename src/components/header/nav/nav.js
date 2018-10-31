import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="https://github.com/fabe/gatsby-universal">Services</a>
      </li>

        <li>
        <Link to="/about">Work</Link>
      </li>
      <li>
        <a href="https://github.com/fabe/gatsby-universal">Client News</a>
      </li>


        <li>
        <Link to="/about">Who We Are</Link>
      </li>
      <li>
        <a href="https://github.com/fabe/gatsby-universal">Approach</a>
      </li>
     <li>
        <a href="https://github.com/fabe/gatsby-universal">Contact</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
