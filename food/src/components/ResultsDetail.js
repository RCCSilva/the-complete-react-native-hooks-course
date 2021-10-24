import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: 'bold'
  },
  container: {
    marginLeft: 15
  }
})

export default ResultsDetail
