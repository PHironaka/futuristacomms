import React from 'react';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = () => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <svg width="191" height="41" viewBox="0 0 191 41" xmlns="http://www.w3.org/2000/svg">
  <g id="Page-1" fill="none" fillRule="evenodd">
    <g id="Word-Mark-Black" fill="#000">
      <path id="Fill-4" d="M10 5.84H5.81v3.13h4.04v1.84H5.81V17H4V4h6z"/>
      <path d="M15.83 4v7.69c0 1.1.17 1.9.52 2.4.5.74 1.22 1.1 2.15 1.1.92 0 1.64-.36 2.15-1.1.34-.48.52-1.28.52-2.4V4H23v8.22c0 1.35-.4 2.45-1.2 3.32-.9.98-2 1.46-3.3 1.46a4.3 4.3 0 0 1-3.3-1.46 4.73 4.73 0 0 1-1.2-3.32V4h1.83z" id="Fill-6"/>
      <path id="Fill-8" d="M32 5.84V17H30V5.84H27V4h8v1.84z"/>
      <path d="M39.83 4v7.69c0 1.1.17 1.9.52 2.4.5.74 1.22 1.1 2.15 1.1.92 0 1.64-.36 2.15-1.1.34-.48.51-1.28.51-2.4V4H47v8.22c0 1.35-.4 2.45-1.2 3.32-.9.98-2 1.46-3.3 1.46a4.3 4.3 0 0 1-3.3-1.46 4.73 4.73 0 0 1-1.2-3.32V4h1.83z" id="Fill-10"/>
      <path d="M53.86 9.97h.6c1.76 0 2.64-.71 2.64-2.13 0-1.33-.86-2-2.57-2h-.67v4.13zm2.32 1.49L60 17h-2.28l-3.52-5.32h-.34V17H52V4h2.18c1.63 0 2.81.32 3.53.97.8.72 1.2 1.67 1.2 2.84 0 .93-.25 1.72-.75 2.38a3.32 3.32 0 0 1-1.98 1.27z" id="Fill-12"/>
      <path id="Fill-14" d="M63 17h2V4h-2z"/>
      <path d="M76.68 5.11l-1.53.9c-.29-.49-.56-.81-.82-.96a1.9 1.9 0 0 0-1.04-.26c-.52 0-.96.14-1.3.44-.34.3-.52.66-.52 1.1 0 .62.46 1.1 1.36 1.48l1.24.51c1.02.41 1.76.92 2.23 1.5.47.6.7 1.33.7 2.19a3.93 3.93 0 0 1-4.02 4 3.83 3.83 0 0 1-2.68-.98 4.45 4.45 0 0 1-1.3-2.71l1.9-.43c.1.74.24 1.25.46 1.53.39.54.95.81 1.7.81.58 0 1.07-.2 1.46-.6.39-.39.58-.89.58-1.5 0-.24-.03-.46-.1-.66a1.7 1.7 0 0 0-.32-.56 2.49 2.49 0 0 0-.55-.48c-.22-.15-.5-.3-.8-.43l-1.21-.5c-1.7-.72-2.56-1.79-2.56-3.18 0-.94.36-1.73 1.07-2.36.72-.64 1.61-.96 2.68-.96 1.44 0 2.56.7 3.37 2.11" id="Fill-16"/>
      <path id="Fill-17" d="M85 5.84V17h-1.98V5.84H80V4h8v1.84z"/>
      <path d="M96.9 11.3l-1.82-4.16-1.92 4.15h3.75zm.77 1.73h-5.29L91.01 16H89l6.1-13 5.9 13h-2.04l-1.3-2.97z" id="Fill-18"/>
      <path d="M13 23.92v2.24a5.34 5.34 0 0 0-3.43-1.38c-1.3 0-2.4.47-3.3 1.4a4.65 4.65 0 0 0-1.34 3.37c0 1.31.45 2.42 1.35 3.33.9.9 2 1.35 3.3 1.35.67 0 1.24-.1 1.71-.32.27-.11.54-.26.82-.44.28-.19.58-.4.89-.67v2.28c-1.1.61-2.24.92-3.45.92a6.4 6.4 0 0 1-4.64-1.87A6.18 6.18 0 0 1 3 29.57c0-1.6.53-3.02 1.6-4.27A6.4 6.4 0 0 1 9.7 23c1.14 0 2.24.3 3.3.92" id="Fill-19"/>
      <path d="M18.9 29.47c0 1.39.45 2.53 1.38 3.42.92.9 1.98 1.34 3.18 1.34a4.64 4.64 0 0 0 4.65-4.73 4.61 4.61 0 1 0-9.22-.03M17 29.45c0-1.77.64-3.28 1.93-4.55a6.31 6.31 0 0 1 4.6-1.9c1.77 0 3.3.64 4.56 1.92a6.28 6.28 0 0 1 1.91 4.6c0 1.8-.64 3.33-1.92 4.59A6.39 6.39 0 0 1 23.44 36c-1.61 0-3.05-.56-4.33-1.68A6.18 6.18 0 0 1 17 29.45" id="Fill-20"/>
      <path id="Fill-21" d="M33 36.43L35.68 23l4.38 9.7 4.53-9.7L47 36.43h-1.97l-1.23-7.54L40.02 37l-3.66-8.12-1.37 7.55z"/>
      <path id="Fill-22" d="M51 36.43L53.68 23l4.38 9.7 4.53-9.7L65 36.43h-1.97l-1.23-7.54L58.02 37l-3.66-8.12-1.37 7.55z"/>
      <path d="M70.83 24v7.69c0 1.1.17 1.9.52 2.4.5.74 1.22 1.1 2.15 1.1.92 0 1.64-.36 2.15-1.1.34-.48.52-1.28.52-2.4V24H78v8.22c0 1.35-.4 2.45-1.2 3.32-.9.98-2 1.46-3.3 1.46a4.3 4.3 0 0 1-3.3-1.46 4.73 4.73 0 0 1-1.2-3.32V24h1.83z" id="Fill-23"/>
      <path id="Fill-24" d="M83 36.24V23l9.11 9.46v-8.62H94V37l-9.11-9.44v8.68z"/>
      <path id="Fill-25" d="M99 37h2V24h-2z"/>
      <path d="M115 23.92v2.24a5.34 5.34 0 0 0-3.43-1.38c-1.3 0-2.4.47-3.3 1.4a4.65 4.65 0 0 0-1.34 3.37c0 1.31.45 2.42 1.35 3.33.9.9 2 1.35 3.3 1.35.67 0 1.24-.1 1.71-.32.27-.11.54-.26.82-.44.28-.19.58-.4.89-.67v2.28c-1.1.61-2.24.92-3.45.92a6.4 6.4 0 0 1-4.64-1.87 6.18 6.18 0 0 1-1.91-4.56c0-1.6.53-3.02 1.6-4.27a6.4 6.4 0 0 1 5.1-2.3c1.14 0 2.24.3 3.3.92" id="Fill-26"/>
      <path d="M125.9 31.3l-1.82-4.16-1.92 4.15h3.75zm.77 1.73h-5.29L120.01 36H118l6.1-13 5.9 13h-2.04l-1.3-2.97z" id="Fill-27"/>
      <path id="Fill-28" d="M136 25.84V37H134V25.84H131V24h8v1.84z"/>
      <path id="Fill-29" d="M142 37h2V24h-2z"/>
      <path d="M149.9 29.47c0 1.39.45 2.53 1.38 3.42.92.9 1.98 1.34 3.18 1.34a4.64 4.64 0 0 0 4.65-4.73 4.61 4.61 0 1 0-9.22-.03m-1.89-.02c0-1.77.64-3.28 1.93-4.55a6.31 6.31 0 0 1 4.6-1.9c1.77 0 3.3.64 4.56 1.92a6.29 6.29 0 0 1 1.91 4.6c0 1.8-.64 3.33-1.92 4.59a6.39 6.39 0 0 1-4.64 1.89c-1.61 0-3.05-.56-4.33-1.68a6.18 6.18 0 0 1-2.11-4.87" id="Fill-30"/>
      <path id="Fill-31" d="M165 36.24V23l9.11 9.46v-8.62H176V37l-9.11-9.44v8.68z"/>
      <path d="M187.68 25.11l-1.53.9c-.29-.49-.56-.81-.82-.96a1.9 1.9 0 0 0-1.04-.26c-.52 0-.96.14-1.3.44-.34.3-.52.66-.52 1.1 0 .62.46 1.1 1.36 1.48l1.24.51c1.02.41 1.76.92 2.23 1.5.47.6.7 1.33.7 2.19a3.93 3.93 0 0 1-4.02 4 3.83 3.83 0 0 1-2.68-.98 4.45 4.45 0 0 1-1.3-2.71l1.9-.43c.1.74.24 1.25.46 1.53.39.54.95.81 1.7.81.58 0 1.07-.2 1.46-.6.39-.39.58-.89.58-1.5 0-.24-.03-.46-.1-.66a1.7 1.7 0 0 0-.32-.56 2.49 2.49 0 0 0-.55-.48c-.22-.15-.5-.3-.8-.43l-1.21-.5c-1.7-.72-2.56-1.79-2.56-3.18 0-.94.36-1.73 1.07-2.36.72-.64 1.61-.96 2.68-.96 1.44 0 2.56.7 3.37 2.11" id="Fill-32"/>
    </g>
  </g>
</svg>

      </Link>

      <Nav />
    </Container>
  </AnimatedContainer>
);



export default Header;
