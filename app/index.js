/* @flow */
import Parse from "parse"

Parse.initialize("eRlLRSHvJ0qjk2kikfPde9jhF0wUEu7IcXFS4KJe", "aOB7yQ8q8LK5agrAej8TrBVn9KxqxI1ra70jBm7R");


function createUser(username: string, password: string, email: string) {
  const user = new Parse.User()
  user.set("username", username)
  user.set("password", password)
  user.set("email", email)

  return user.signUp(null)
}

console.log(Parse.User.current())
console.log(Parse.Session)



// React time
import React from "react"
import ReactDOM from "react-dom"
import styles from "./styles/application.css"


class Application extends React.Component {
  render() {
    return (
      <h1 className={styles.header}>
        Application
      </h1>
    );
  }
}


ReactDOM.render(<Application />, document.getElementById("main"))
