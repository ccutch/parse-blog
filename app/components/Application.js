import React from "react"
import Parse from "parse"

class Application extends React.Component {

  constructor() {
    super()

    this.getPosts().then(posts => console.log(posts))
  }

  async getPosts() {
    const Post = Parse.Object.extend("Post")
    const query = new Parse.Query(Post)

    try {
      const posts = await query.find()
      return posts;
    } catch (error) {
      console.error("Error loading posts:", error)
    }

    return [];
  }

  render() {
    return (
      <div>
        <h1>This is my application</h1>
        <span>Thank you for using it</span>
      </div>
    )
  }

}


export default Application
