import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/approach/item';
import { Container } from './approach.css';

const Gallery = ({ items }) => (


  <Container>
<h2>Approach</h2>
<p> We operate like a member of your team in a collaborative process. Having developed brands and communications both in house and as a consultant, we take your desires for your brand and develop strategies, messages, plans and execute PR campaigns.  </p>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}

  </Container>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
