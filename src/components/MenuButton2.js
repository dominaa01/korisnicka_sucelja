/** @jsx jsx */
import { jsx } from "theme-ui"
import SideMenu2 from "./sidemenu2"
import React from "react"

class MenuButton2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
    }
    this.ClickMoreButton = this.ClickMoreButton.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  ClickMoreButton() {
    if (!this.state.opened) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false)
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false)
    }

    this.setState(prevState => ({
      opened: !prevState.opened,
    }))
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return
    }

    this.ClickMoreButton()
  }

  render() {
    const { opened } = this.state
    const { menuItems } = this.props
    return (
      <div
        ref={node => {
          this.node = node
        }}
        sx={{
          display: "inline-block",
          position: "relative",
          left: "-10px",
          px: 3,
          ml: 4,
          width: "50px",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#532d7c",
          },
        }}
        onClick={this.ClickMoreButton}
        onKeyDown={this.ClickMoreButton}
        role="button"
        tabIndex={0}
      >
        <span
          sx={{
            position: "absolute",
            top: "-25px",
            padding: 2,
            textAlign: "center"
            
          }}
        >
          MENU{" "}
        </span>
        {opened && <SideMenu2 menuItems={menuItems} />}
      </div>
    )
  }
}

export default MenuButton2
