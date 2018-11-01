import React from "react"
import Layout from "components/layout"
import Box from 'components/box';
import PropTypes from 'prop-types';



const Blog = ({ pageContext: data }) => (
  <Layout>
  <Box>
      <div>
        <h1>{data.excerpt}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.descriptionHtml }} />
      </div>
      </Box>
    </Layout>
);

Blog.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Blog;