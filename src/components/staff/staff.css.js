import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  grid-gap: 4rem;
  padding: 2em 4rem;
  background: #d8dadb;

  h2 , p {
  grid-column:1/-1;
 }       

 p {
  max-width:700px;
 }

h2 {
  
  font-weight: 500;
  color: #365b8b;
  font-size: 1.2em;
  margin-top:1.1em;
  text-transform:uppercase;
}


  ${MEDIA.TABLET`
    display: block;
  `};
`;
