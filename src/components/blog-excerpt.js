/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import './layout.css'

export default ({ posts }) => {
  const postsList = posts.map(({ post }) => {
    const { id, excerpt } = post
    const { title, date, slug } = post.frontmatter
    return (
      <Link to={`/blog/${slug}`}
        style={{
          textDecorationLine: "none",
          marginBottom: "2vh",
          fontFamily: "Quicksand",
        }}>
        <section key={id} sx={{
          mb: 1,
          border: "2px solid #542D7D",
          padding: "20px",
          width: "100%"
        }}>
          <Styled.h3 sx={{ mb: 1, mt: 0 }}>
          <p style={{color: "#542D7D", marginBottom:0, marginTop:0, fontWeight: "400"}}>
            {title}
          </p>

          <hr style={{border: "1px solid #542D7D"}}></hr>

          </Styled.h3>
          <Styled.p sx={{ m: 0, color: "#000000" }}>{excerpt}</Styled.p>
          <p sx={{ fontWeight: "400", fontSize: "1.1em", color: "#525252", 
          textAlign: "right", width: "100%", 
           }}>
            {date}
          </p>
        </section>
      </Link>
    )
  })

  return postsList
}
