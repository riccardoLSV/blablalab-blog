import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      {/*<h1 className="blog-title" display={"inline-block"}>
        BlaBLaLab
  </h1>*/}
      {/*<h4 className="post-counter">
        {data.allMarkdownRemark.totalCount} Posts
</h4>*/}
      <div className="post-container">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="post" key={node.id}>
            <Link
              to={node.fields.slug}
              css={{ textDecoration: `none`, color: `inherit` }}
            >
              <div className="post-img">
                <Img
                  sizes={node.frontmatter.cover_image.childImageSharp.sizes}
                />
              </div>
              <div className="post-txt">
                <h3>
                  {node.frontmatter.title}
                  {/*<g.Span color="#BBB">— {node.frontmatter.date}</g.Span>*/}
                </h3>
                <p>{node.excerpt}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            cover_image {
              publicURL
              childImageSharp {
                sizes(maxWidth: 1000) {
                  srcSet
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;
