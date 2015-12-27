import React, { Component } from "react"
import routes from "config/routes"
import styles from "styles/wrapper.css"
import { listen } from "utils"


const { any } = React.PropTypes


class Wrapper extends Component {
  constructor(props) {
    super(props)

    this.state = { title: document.title }
  }

  componentDidMount() {
    this.setState({ title: document.title  })
    listen((title) => this.setState({ title }))
    listen((title) => console.log("new title", title))
  }

  render() {
    const { push }= this.props.history
    const { pathname } = this.props.location


    return (
      <div className={styles.wrapper}>

        <div className={styles.header}>
          <div className={styles.nav_expand}>
            <span /><span /><span />
          </div>
          <h1 className={styles.title}>{(() => {
            switch(pathname) {
              case routes.posts:
                return "Posts"

              case routes.new_post:
                return "New Post"

              case routes.bio:
                return "Bio"

              default:
                return this.state.title
            }
          })()}</h1>
        </div>

        <div className={styles.body_container}>
          <ul className={styles.nav}>
            <div className={styles.mark}/>
            <h1 className={styles.name}>Connor McCutcheon</h1>
            <li
              className={pathname === routes.bio && styles.active}
              onClick={() => push(routes.bio)}>

              <img src={require("assets/bio.svg")} />
              <span>Bio</span>
            </li>
            <li
              className={/\/post(s)?/.test(pathname) && styles.active}
              onClick={() => push(routes.posts)}>

              <img src={require("assets/posts.svg")} />
              <span>Posts</span>
            </li>
          </ul>
          <div className={styles.content}>
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }

}


Wrapper.propTypes = {
  children: any
}


export default Wrapper
