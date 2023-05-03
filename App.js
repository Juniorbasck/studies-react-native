import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import Cesta from "./src/telas/cesta"
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';



export default function App() {

  const [fontsLoaded] = useFonts({
    "Montserrat_400Regular": Montserrat_400Regular,
    "Montserrat_700Bold": Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <View />;
  }



  return (
    <View>
      <StatusBar />
      <Cesta />
    </View>
  );
}

