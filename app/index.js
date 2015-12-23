/* @flow */
import Parse from "parse"
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
