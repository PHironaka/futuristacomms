import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  padding: 0;

.index-items {
	padding: 0 4em;
	display:grid;
	grid-template-columns:1fr 1fr 1fr;
	grid-gap:3em;

	.view {
		text-align: center;
width: 100px;
margin: 0 auto;
grid-column:1/-1;
background:#2f3e4f;
color:white;
text-decoration:none;
height: 25px;
padding: .4em .6em;
	}

	.client-post {
		padding: 2em 0 0 ;

	}

	h3 {
		font-size:1.2em;
		margin: 0;
	}

	.gatsby-image-wrapper {
		max-width:120px;
	}

	${MEDIA.TABLET`
    display: block;
  `};
}
`;
