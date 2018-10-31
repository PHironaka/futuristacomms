import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Column, Copy } from './item.css';

const Item = ({ copy, image }) => (
  <Column>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={copy} />
    <figcaption>
      <Copy>{copy}</Copy>
    </figcaption>
  </Column>
);

Item.propTypes = {
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
