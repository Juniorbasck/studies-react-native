import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import Cesta from "./src/telas/Cesta"
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';



export default function App() {




  return (
    <View>
      <StatusBar />
      <Cesta />
    </View>
  );
}

