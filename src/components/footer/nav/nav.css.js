import styled from 'styled-components';

export const Container = styled.div`
  padding-left:4em;

  h2 {
    margin-top:2em;
  }
  form {
    display:grid;
    grid-template-columns: 1fr;

    input {
      background: transparent;
      border:none;
      outline:none;
    }

    .field {
      border-bottom:1px solid #4c5967;
      padding:1em 0;
      margin:1em 0;
      color:#4c5967;
    font-family: futura-pt, sans-serif;
    font-size:1em;
    }

    .submit-email {
      margin : 2em 0;
      input {
    font-family: futura-pt, sans-serif;
    font-size:1em;

      background:#3e4c5b;
      color:white;
      padding:.7em 1.5em;
    }
    } 
  }
`;
