import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  border-top:1px solid #ccc;
  border-bottom:1px solid #ccc;

  padding: 0 4rem;
  margin: 2rem 0;
        // background: url(bg-city.png) no-repeat center center fixed; 

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
