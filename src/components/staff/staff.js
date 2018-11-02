import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/staff/item';
import { Container } from './staff.css';

const Gallery = ({ items }) => (
  <Container>
  <h2>Who we are</h2>
<p> Futurista Communications is a collective of freelance communicators and collaborators based in Los Angeles.  </p>
   

    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
