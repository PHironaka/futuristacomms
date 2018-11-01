import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.div`

  display: block;

font-weight: 500;

font-size: 1.5em;

line-height: 1.2;

position: absolute;

top: 200px;

color: white;

width: 100%;
left:0;

text-align: center;
  line-height: 1.2;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};

  h2 {
    text-transform:uppercase;
  }

  svg {
    margin-bottom:1em;
  }
`;
