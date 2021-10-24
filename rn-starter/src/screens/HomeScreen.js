import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hey there!</Text>
      <Button
        onPress={() => { navigation.navigate('Components') }}
        title="Go to Components Screen"
      />
      <Button
        onPress={() => { navigation.navigate('Image') }}
        title="Go to Image Screen"
      />
      <Button
        onPress={() => { navigation.navigate('Counter') }}
        title="Go to Counter Screen"
      />
      <Button
        onPress={() => { navigation.navigate('Box') }}
        title="Go to Box Screen"
      />

    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
