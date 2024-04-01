/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import HomeScreen from './app/screens/HomeScreen';

function App(): React.JSX.Element {
  const backgroundStyle = {
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
