import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from "react-native"

const CounterScreen = () => {
  const [counter, setCounter] = useState(0)

  return (
    <View>
      <Button title='Increase' onPress={() => setCounter(c => c + 1)} />
      <Button title='Decrease' onPress={() => setCounter(c => c - 1)} />
      <Text>{counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32
  }
})

export default CounterScreen
