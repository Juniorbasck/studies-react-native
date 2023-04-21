import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Cesta from './src/telas/Cesta.js';


export default function App() {
  return (
    <View>
      <StatusBar />
      <Cesta />
      <Text>Alura!!</Text>
      
    </View>
  );
}

