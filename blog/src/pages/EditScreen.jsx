import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useContext, useState } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = () => {
  const { state, editBlogPost } = useContext(Context)
  const route = useRoute()
  const blogPostId = route.params.id
  const blogPost = state.find(b => b.id === blogPostId)
  const [title, setTitle] = useState(blogPost.title)
  const [content, setContent] = useState(blogPost.content)
  const navigation = useNavigation()


  return <BlogPostForm
    header='Edit'
    buttonLabel='Save'
    title={title}
    setTitle={setTitle}
    content={content}
    setContent={setContent}
    onPress={() => {
      editBlogPost(blogPostId, title, content, () => {
        navigation.navigate('Show', { id: blogPostId })
      })
    }}
  />
}



export default EditScreen
