import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Column = styled.figure`
  border-top:1px solid;
  border-bottom:1px solid;
  padding:1em 0;

`;

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
  color:#627a9c;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
