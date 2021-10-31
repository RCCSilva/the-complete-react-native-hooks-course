import { useNavigation } from '@react-navigation/core'
import React, { useContext, useState } from 'react'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

const CreateScreen = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addBlogPosts } = useContext(Context)
  const navigation = useNavigation()

  return <BlogPostForm
    header='Edit'
    buttonLabel='Save'
    title={title}
    setTitle={setTitle}
    content={content}
    setContent={setContent}
    onPress={() => {
      addBlogPosts(title, content, () => {
        navigation.navigate('Home')
      })
    }}
  />
}
export default CreateScreen
