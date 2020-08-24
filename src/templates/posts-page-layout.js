/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import PozadinskaSlika from "../components/pozadinskaslika"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Title from "../components/title"
import BlogNav, { leftArrow, rightArrow } from "../components/blog-navigation"
import '../components/layout'


export default ({ pageContext, data }) => {
  const { post } = data
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <PozadinskaSlika naziv={"Blog"} />

      <div style={{marginTop: "40px", marginBottom: "40px", width: "60%", 
      marginLeft: "auto", marginRight: "auto", fontFamily: "Quicksand"}}>

      <BlogNav.Previous>
          {(next || previous) && (
            <BlogNav.Link type="button" className="inputButton" 
            style={{padding: "5px"}} to={`/blog/`}>
              {leftArrow} {'Natrag'}
            </BlogNav.Link>
          )}
        </BlogNav.Previous>

      <div
        style={{
          display: "block",
          marginTop: "15px",
          marginBottom: "60px",
          marginLeft: "10px",
          marginRight: "10px",
          border: "2px solid #542D7D",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <Title style={{marginTop:"20px", color: "#542D7D", fontWeight: "600"}}>{post.frontmatter.title}</Title>
        <div>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        <p sx={{ fontWeight: "400", fontSize: "1.1em", color: "#525252", 
        marginBottom: "20px", textAlign: "right" }}>
          {post.frontmatter.date}
        </p>
      </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        description
        slug
        title
      }
      body
    }
  }
`
