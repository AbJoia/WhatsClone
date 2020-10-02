/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ChatPage from './src/pages/chat/chatpage';
import Login from './src/pages/login/login';

const Stack = createStackNavigator();

const App = () => {
  return (    
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "Login">
        <Stack.Screen options={{headerShown: false}} name= "Login" component={Login}/>
        <Stack.Screen options={{headerShown: false}} name="ChatPage" component={ChatPage}/>     
      </Stack.Navigator>
    </NavigationContainer>
  )   
};
export default App;
