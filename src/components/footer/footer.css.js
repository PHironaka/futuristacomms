import styled from 'styled-components';

export const Container = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap:1em;
  align-items: center;
  padding: 4rem;
  background:#2f3e4f;
  color:white;

  .contact-left {
  border-right:1px solid ;

  }

  .contact-info {
    margin-bottom:4em;
  }

  h2 {
    font-size: 1.5em;

    &::after {
      height: 1px;
display: block;
width: 40px;
background: #fff;
content: '';
margin: 10px 0;
    }
  }

  .social {
    display:grid;
    grid-template-columns:25px 25px 25px;
    grid-gap:1em;
  }

  a {
    color:white;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }


  }

  p{
    margin:10px 0 2em;
    padding-top:1em;
    border-top:1px solid #fff;
    max-width: 262px;
  }
`;
