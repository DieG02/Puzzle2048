import React from 'react';
import {
  View,
  StatusBar,
  useColorScheme,
} from 'react-native';
import Container from './src/components/container';

function App () {
  return (
    <View>
      <StatusBar barStyle={'dark-content'} />
      <Container startTiles={2} size={4} />
    </View>
  );
};

export default App;
