import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Column = styled.figure`
  padding:1em 0; 
  border-top:1px solid #333;
  border-bottom:1px solid #333;
`;

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 2rem 0;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
