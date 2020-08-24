/** @jsx jsx */
import { jsx } from "theme-ui"
import fcb from "../assets/fb.png"
import ig from "../assets/insta.jpg"
import tw from "../assets/twitter.png"

const slike = [
  {
    src: fcb,
    link: "https://www.facebook.com/",
  },
  {
    src: ig,
    link: "https://www.instagram.com/",
  },
  {
    src: tw,
    link: "https://www.twitter.com/",
  },
]
const FooterIcon = () => {
  return (
    <div>
      {slike.map(({ link, src }) => (
        <a key={link} href={link} style={{ marginLeft: "20px", marginRight: "20px" }}>
          <img
            alt="slikezafooter"
            src={src}
            sx={{
              height: "footerimg",
              width: "auto",
            }
            }
          ></img>
        </a>
      ))}
    </div>
  )
}



export default FooterIcon
