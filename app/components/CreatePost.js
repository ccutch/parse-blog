import React from "react"
import Parse from "parse"



class CreatePost extends React.Component {

  render() {
    return (
      <form>
        <label>Title:</label>
        <input
          type="text"
          value={this.state.post.title}
          onChange={(e) => this.setState({ post: { title: e.target.value }})}

      </form>
    )
  }
}
