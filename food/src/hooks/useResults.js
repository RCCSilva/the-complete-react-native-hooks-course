import { useState } from 'react'
import yelp from '../api/yelp'

export const useResults = () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'São Paulo'
        }
      })
      setResults(response.data.businesses.filter((r) => r.image_url))
    } catch (err) {
      setErrorMessage('Something went wrong')
      console.log(err)
    }
  }
  return [searchApi, results, errorMessage]
}
