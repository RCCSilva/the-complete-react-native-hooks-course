import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import ResultsDetail from './ResultsDetail'


const ResultsList = ({ title, results }) => {
  const navigation = useNavigation()

  if (results.length === 0) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
            <ResultsDetail result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
})

export default ResultsList
