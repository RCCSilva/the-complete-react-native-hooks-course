import { useRoute } from '@react-navigation/core'
import React, { useContext } from 'react'
import { FlatList, Text, View } from "react-native"
import { Context } from '../context/BlogContext'

const ShowsScreen = () => {
  const route = useRoute()
  const { id } = route.params
  const { state } = useContext(Context)
  const blogPost = state.find((blogPost) => blogPost.id === id)

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

export default ShowsScreen
