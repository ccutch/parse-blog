import React from "react"
import { Link } from "react-router"
import routes from "config/routes"

class Bio extends React.Component {

  render() {
    return (
      <div>
        <span>
          Hello I'm Connor and this is my blog for testing and sandboxing.
          <Link to={routes.posts}>Posts</Link>
        </span>
      </div>
    );
  }
}


export default Bio
