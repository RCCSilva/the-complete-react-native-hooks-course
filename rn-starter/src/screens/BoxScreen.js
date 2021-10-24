import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box Screen #1</Text>
      <Text style={styles.textStyle}>Box Screen #2</Text>
      <Text style={styles.textStyle}>Box Screen #3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
  }
})

export default BoxScreen
