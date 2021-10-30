import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider as BlogProvider } from './src/context/BlogContext';
import IndexScreen from './src/pages/IndexScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={IndexScreen} options={{ title: 'Business Search' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <BlogProvider >
    <App />
  </BlogProvider>
}
