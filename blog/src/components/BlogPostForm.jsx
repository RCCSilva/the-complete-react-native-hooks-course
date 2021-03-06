import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const BlogPostForm = ({ header, buttonLabel, title, setTitle, content, setContent, onPress }) => {
  return (
    <View>
      <Text style={styles.label}>{header}</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent} />
      <Button
        title={buttonLabel}
        onPress={onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    margin: 5,
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5
  }
})

export default BlogPostForm
