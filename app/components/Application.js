import React from "react"
import { Router, Route } from "react-router"
import routes from "config/routes"


class Application extends React.Component {

  render() {
    return (
      <Router>
        <Route path={routes.bio} component={require("./Bio").default}/>
        <Route path={routes.posts} />
      </Router>
    )
  }

}


export default Application
