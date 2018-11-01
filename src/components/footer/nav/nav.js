import React from 'react';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
  <h2>Contact </h2>
    <form action="https://thechinatownmarket.us14.list-manage.com/subscribe/post?u=7641b08f28511416c16beebae&amp;id=31712a1353" method="post"  name="mc-embedded-subscribe-form"  target="_blank" >
         <input type="name" className="field" name="Name" placeholder="Name" required />
         <input type="email" className="field" name="Email" placeholder="Email" required />
         <div className="submit-email"><input type="submit" value="Submit" /></div>
      </form>
  </Container>
);

export default Nav;
