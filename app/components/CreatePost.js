import React from "react"
import Post from "types/Post"
import styles from "styles/new-post.css"
import { generators as rg } from "config/routes"


class CreatePost extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      post: {},
      saved: true,
    };
  }

  save() {
    const { post } = this.state
    const { history } = this.props

    const p_post = new Post()

    p_post.save(post)
      .then((res) => history.push(rg.post(res.id)))
  }

  render() {
    const { post } = this.state

    return (
      <form className={styles.form} onSubmit={(e) => {e.preventDefault()}}>

        <div>
          <label>Title:</label>
          <input
            type="text"
            value={this.state.post.title}
            onChange={(e) => this.setState({ saved: false, post: { content: post.content, title: e.target.value }})} />
        </div>

        <label>Content:</label>
        <textarea
          value={this.state.post.content}
          onChange={(e) => this.setState({ saved: false, post: { title: post.title, content: e.target.value }})} />

        <button onClick={() => this.save()}>Save</button>

      </form>
    )
  }
}

export default CreatePost
