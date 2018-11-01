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


  ${MEDIA.TABLET`
    display: block;
  `};
`;
