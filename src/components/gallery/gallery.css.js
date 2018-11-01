import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6rem;
  padding: 5em 4rem;
  margin:  0;
  background: #e4e4e4;

 .gatsby-image-wrapper {
 	max-width:130px;
 }

  ${MEDIA.TABLET`
    display: block;
  `};
`;
