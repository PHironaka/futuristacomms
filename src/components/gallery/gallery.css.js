import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6rem;
  padding: 0 4rem;
  margin: 2rem 0;

 .gatsby-image-wrapper {
 	max-width:140px;
 }

  ${MEDIA.TABLET`
    display: block;
  `};
`;
