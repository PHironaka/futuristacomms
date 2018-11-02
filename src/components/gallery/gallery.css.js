import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  padding: 5em 4rem;
  margin:  0;
  background: #e4e4e4;

   h2  {
  grid-column:1/-1;
 }       


h2 {

  font-weight: 500;
  color: #365b8b;
  font-size: 1.2em;
  text-transform:uppercase;
}


 .gatsby-image-wrapper {
 	max-width:130px;
 }

  ${MEDIA.TABLET`
    display: block;
  `};
`;
