import React from 'react'
import { StyleSheet, Text } from "react-native"

const ComponentScreen = () => {
  return (
    <Text style={styles.text}>Component Screen!</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32
  }
})

export default ComponentScreen
