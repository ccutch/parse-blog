import React from "react"
import { Router, Route } from "react-router"
import routes from "config/routes"
import Wrapper from "./Wrapper"

const history = require("history/lib/createBrowserHistory")()

class Application extends React.Component {

  render() {
    return (
      <Router history={history}>
        <Route component={Wrapper}>
            <Route path={routes.bio} component={require("./Bio").default} />
            <Route path={routes.posts} component={require("./PostList").default} />
            <Route path={routes.post} component={require("./Post").default} />
            <Route path={routes.new_post} component={require("./CreatePost").default} />
        </Route>
      </Router>
    )
  }

}


export default Application
