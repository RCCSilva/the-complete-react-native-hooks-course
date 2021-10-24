// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SearchScreen} options={{ title: 'Business Search' }} />
        <Stack.Screen name='ResultsShow' component={ResultsShowScreen} options={{ title: 'Results' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
