import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Cesta from "./src/telas/Cesta"



export default function App() {
  return (
    <View>
      <StatusBar />
      <Cesta />
    </View>
  );
}

