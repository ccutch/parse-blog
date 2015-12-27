import React, { Component } from "react"
import Parse from "parse"
import Post from "types/Post"
import { Link } from "react-router"
import { generators as rg } from "config/routes"

let posts_cache = null

class PostList extends Component {

  constructor(props) {
    super(props)

    this.state = { posts: posts_cache }
  }

  componentDidMount() {
    if (this.state.posts)
      return

    const query = new Parse.Query(Post)

    query.find({})
      .then(posts => posts_cache = posts)
      .then(posts => this.setState({ posts }))
  }

  render() {
    const { posts } = this.state

    if (!posts)
      return <h2>Loading</h2>

    return (
      <div>
        {posts.map(this.renderPost)}
      </div>
    )
  }

  renderPost(post) {
    return (
      <div key={post.id}>
        <Link to={rg.post(post.id)}>
          <h2>{post.get("title")}</h2>
        </Link>
      </div>
    )
  }

}



export default PostList
