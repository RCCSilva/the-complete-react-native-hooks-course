import React from 'react'
import { Image, Text, View } from 'react-native'

const ImageDetail = ({ title, imageSource }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
    </View>
  )
}

export default ImageDetail
