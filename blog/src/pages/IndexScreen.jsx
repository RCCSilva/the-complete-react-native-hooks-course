import React, { useContext } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { Context as BlogContext } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = () => {
  const { state, addBlogPosts } = useContext(BlogContext)

  return (
    <View>
      <Button onPress={addBlogPosts} title='Add Posts' />
      <FlatList
        data={state}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return <View>
            <Text>{item.title}</Text>
            <Feather />
          </View>
        }}
      />
    </View>
  )
}

export default IndexScreen
