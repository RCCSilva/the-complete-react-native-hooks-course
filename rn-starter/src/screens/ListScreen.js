import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const friends = [
  { name: 'Friend #1' },
  { name: 'Friend #2' },
  { name: 'Friend #3' },
  { name: 'Friend #4' },
  { name: 'Friend #5' },
  { name: 'Friend #6' },
  { name: 'Friend #7' },
  { name: 'Friend #8' },
  { name: 'Friend #9' }
]

const ListScreen = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20
  }
})

export default ListScreen
