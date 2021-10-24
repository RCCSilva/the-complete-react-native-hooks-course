import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import ResultsList from '../components/ResultList'
import SearchBar from '../components/SearchBar'
import { useResults } from '../hooks/useResults'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  useEffect(() => {
    searchApi('pasta')
  }, [])

  const filterByPrice = (price) => {
    return results.filter(result => result.price === price)
  }

  return (
    <>
      <SearchBar
        onTermChange={(value) => setTerm(value)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          title='Cost Effective'
          results={filterByPrice('$$')}
        />
        <ResultsList
          title='Bit Pricier'
          results={filterByPrice('$')}
        />
        <ResultsList
          title='Bit Spender'
          results={filterByPrice('$$$')}
        />
      </ScrollView>
    </>
  )
}

export default SearchScreen
