import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ onTermChange, onTermSubmit }) => {

  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name='search' />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder='Search'
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: 'center'
  }
})

export default SearchBar
