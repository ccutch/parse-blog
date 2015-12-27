import React, { Component } from "react"
import Parse from "parse"
import { default as PostType } from "types/Post"
import { setDocumentTitle } from "utils"


class Post extends Component {

  constructor(props) {
    super(props)

    this.state = { post: null }
    setDocumentTitle("Loading")


    const query = new Parse.Query(PostType)
    query.get(props.params.id)
      .then(post => { setDocumentTitle(post.get("title")); return post })
      .then(post => this.setState({ post }))
  }

  render() {
    const { post } = this.state

    if (post === null)
      return <h1>Loading this post.</h1>

    return (
      <div>
        <h2>Post: {post.get("title")}</h2>
        <span>{post.get("content")}</span>
      </div>
    )
  }

}


export default Post
