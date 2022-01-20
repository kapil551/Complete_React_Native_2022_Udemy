import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from 'react';

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurantsScreen";

// styled-components "Theme"
import { ThemeProvider } from "styled-components/native";

// custom google fonts --> oswald
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
// custom google fonts --> lato
import { 
  useFonts as useLato, 
  Lato_400Regular 
} from "@expo-google-fonts/lato";


// Importing the defined theme of our app
import { theme } from "./src/infrastructure/theme";


export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  
  return (

    <>

      {/* https://styled-components.com/docs/advanced#theming */}
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>

      <ExpoStatusBar style='auto'/>

    </>
    
    
  );
}

