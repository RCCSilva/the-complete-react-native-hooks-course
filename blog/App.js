import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider as BlogProvider } from './src/context/BlogContext';
import CreateScreen from './src/pages/CreateScreen';
import IndexScreen from './src/pages/IndexScreen';
import ShowScreen from './src/pages/ShowScreen';
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core'
import EditScreen from './src/pages/EditScreen';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={IndexScreen}
          options={({ navigation }) => ({
            title: 'Business Search',
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                  <Feather name='plus' size={30} />
                </TouchableOpacity>
              )
            }
          })} />
        <Stack.Screen
          name='Show'
          component={ShowScreen}
          options={({ navigation, route }) => ({
            title: `Blog #${route.params.id}`,
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: route.params.id })} >
                  <Feather name='pen-tool' size={24} />
                </TouchableOpacity>
              )
            },
          })} />
        <Stack.Screen name='Create' component={CreateScreen} options={
          {
            title: 'Create Blog Post',
          }} />
        <Stack.Screen name='Edit' component={EditScreen} options={({ route }) => ({
          title: `Edit Post #${route.params.id}`
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <BlogProvider >
    <App />
  </BlogProvider>
}
