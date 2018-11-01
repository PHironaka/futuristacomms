import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import Approach from 'components/approach';
import Staff from 'components/staff';
import Footer from 'components/footer';
import { graphql } from 'gatsby';
import City from './bg-city.png';
import Video from './bg-video.mp4';

const Index = ({ data }) => (
  <Layout>
        <video loop muted autoPlay poster="img/videoframe.jpg" className="fullscreen-bg__video">
        <source src={Video} type="video/mp4" />
    </video>
    <Box>
      <Title >
        <svg width="43" height="86" viewBox="0 0 43 86" >
  <g id="Page-1" fill="none" fillRule="evenodd">
    <g id="Logo-Mark-White" fill="#FFF">
      <path d="M22.6 77.53a4.23 4.23 0 0 1-3.95 1.07 4.22 4.22 0 0 1-3.05-2.72 4.2 4.2 0 0 1 .63-4.04l5.73-7.48 1.9 9.3a4.2 4.2 0 0 1-1.25 3.87zm-3.2-67.06a4.22 4.22 0 0 1 3.94-1.07 4.22 4.22 0 0 1 3.06 2.72 4.2 4.2 0 0 1-.63 4.04l-5.73 7.48-1.9-9.3a4.2 4.2 0 0 1 1.25-3.87zm7.82 47.02L41 39.5l-5-3.8-10.64 13.89L21.7 31.8l9.06-11.83A10.54 10.54 0 0 0 24.8 3.29 10.57 10.57 0 0 0 11.95 15.5l2.83 15L1 48.5l5 3.8 10.64-13.89L20.3 56.2l-9.06 11.83A10.54 10.54 0 0 0 19.66 85a10.56 10.56 0 0 0 10.4-12.51l-2.84-15z" id="Fill-1"/>
    </g>
  </g>
</svg>
        <h2 > {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}</h2>
      </Title>  </Box>
   <div className="about-home">
    <div className="intro " dangerouslySetInnerHTML={{   __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      />
      </div>
  

    <Gallery items={data.homeJson.gallery} />
    <Staff items={data.homeJson.staff} />
    <Approach items={data.homeJson.approach} />
    <img src={City} alt="approach" className="city" />
    <Footer />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }

      staff {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }

      approach {
        intro
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }


    }
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
