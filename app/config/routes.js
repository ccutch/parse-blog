
export default {
  bio: "/",
  posts: "/posts",
  post: "/post/:id",
  new_post: "/new/post",
  edit_post: "/edit/post/:id",
}

export const generators = {
  post: (id) => `/post/${id}`,
  edit_post: (id) => `/edit/post/${id}`,
}
