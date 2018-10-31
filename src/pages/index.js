import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import Approach from 'components/approach';
import Staff from 'components/staff';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import Footer from 'components/footer';
import { graphql } from 'gatsby';
import City from './bg-city.png';
const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <Modal>
        <video
          src="https://i.imgur.com/gzFqNSW.mp4"
          playsInline
          loop
          autoPlay
          muted
        />
      </Modal>
       <div
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>

    <Gallery items={data.homeJson.gallery} />
    <Staff items={data.homeJson.staff} />

    <Approach items={data.homeJson.approach} />
    <img src={City} alt="approach"/>
    <IOExample />
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
