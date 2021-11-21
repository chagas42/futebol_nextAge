import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { 
  Montserrat_600SemiBold, 
  Montserrat_700Bold, 
  Montserrat_400Regular 
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


import { PlayersProvider } from './src/contexts/players';
import { Home } from './src/screens/home';

// import { Routes } from './src/routes';

export default function App(){
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold, 
    Montserrat_700Bold, 
    Montserrat_400Regular
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <PlayersProvider>
        <Home />
      </PlayersProvider>
    </>
  );
}