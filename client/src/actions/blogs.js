import axios from 'axios';

export const getBlogs = () => {
  return (dispatch) => {
    axios.get('/api/blogs')
      .then(res => {
        dispatch({type: 'BLOGS', blogs: res.data })
      })
  }
}

export const deleteBlog = (id) => {
  console.log(id)
  return (dispatch) => {
    axios.delete(`/api/blogs/${id}`)
      .then(res => dispatch({ type: 'DELETE_BLOG', id }))
  }
}

export const addBlog = (blog) => {
  console.log(blog)
  return (dispatch) => {
    axios.post(`/api/blogs/`, {blog})
      .then(res => {
        dispatch({ type: 'ADD_BLOG', blog })
        getBlogs()
    })
  }
}

export const editBlog = (blog) => {
  console.log(blog)

  return (dispatch) => {
    axios.put(`/api/blogs/${blog.id}`, {blog})
      .then(res => dispatch({ type: 'EDIT_BLOG', blog }))
  }
}
// export const updateApp = (app) => {
//   return (dispatch) => {
//     axios.put(`/api/apps/${app.id}`, { app })
//       .then( res => dispatch({ type: 'UPDATE_APP', app: res.data }) )
//   }
// }
// export const createApp = (app) => {
//   return (dispatch) => {
//     axios.post('/api/apps/', { app })
//       .then( res => dispatch({ type: 'CREATE_APP', app: res.data }) )
//   }
// }
// export const destroyApp = (id) => {
//   return (dispatch) => {
//     axios.delete(`/api/apps/${id}`)
//       .then( () => dispatch({ type: 'DESTROY_APP', id }) )
//   }
// }



// import axios from 'axios';
//
// export const getApps = (cb) => {
//   return (dispatch) => {
//     axios.get('/api/apps')
//       .then( res => dispatch({ type: 'APPS', apps: res.data }) )
//       .then( cb())
//   }
// }
