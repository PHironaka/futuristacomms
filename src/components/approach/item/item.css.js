import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Column = styled.figure`
  padding:1em 0; 
  background: #f9f9f9;
  margin: 1em 0;
`;

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Copy = styled.p`
  color: #000;
  margin: 2rem 0;
  padding: 1em;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
