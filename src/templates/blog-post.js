import React from "react";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1 className="post-title">{post.frontmatter.title}</h1>
      <div className="post-date">{post.frontmatter.date}</div>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
