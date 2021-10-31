import jsonServer from '../api/jsonServer'
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload
    case 'add_blogpost':
      return [...state, action.payload]
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload)
    case 'edit_blogpost':
      return state.map((blogPost) => blogPost.id === action.payload.id ?
        { ...blogPost, title: action.payload.title, content: action.payload.content } :
        blogPost)
  }
}

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts')
    dispatch({ type: 'get_blogposts', payload: response.data })
  }
}

const addBlogPosts = (dispatch) => {
  return async (title, content, callback) => {
    const response = await jsonServer.post('/blogposts', { title, content })
    dispatch({ type: 'add_blogpost', payload: response.data })
    callback()
  }
}

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`)
    dispatch({ type: 'delete_blogpost', payload: id })
  }
}

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    const response = await jsonServer.put(`/blogposts/${id}`, { title, content })
    dispatch({ type: 'edit_blogpost', payload: response.data })
    callback()
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer, { getBlogPosts, addBlogPosts, deleteBlogPost, editBlogPost }, [])
