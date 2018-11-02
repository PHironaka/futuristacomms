import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Column = styled.figure`
display:grid;
grid-template-columns: 150px 2fr;
grid-gap:4em;
  padding:1em 0;
  ${MEDIA.TABLET`
display:block;
  `};
`;

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;

  &::after {
  height: 1px;
    display: block;
    width: 40px;
    background: #000;
    content: '';
    margin:10px 0;
  }
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
