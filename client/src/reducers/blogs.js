const blogs = ( state = [], action ) => {
  switch (action.type) {
    case "BLOGS":
      return action.blogs
    case 'ADD_BLOG':
      return [action.blog, ...state];
    case 'DELETE_BLOG':
      const blogId = action.blog;
      state.filter(blog => blog.id !== blogId);
      return [...state]
    case 'EDIT_BLOG':
      const { id, name, body } = action.blog;
      return state.map(blog => {
        if (blog.id === id) {
          blog.name = name;
          blog.body = body;
        }
        return blog;
      });

    default:
      return state;
  }
}

export default blogs;
