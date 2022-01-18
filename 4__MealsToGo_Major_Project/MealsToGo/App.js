import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from 'react';

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurantsScreen";

// styled-components "Theme"
import { ThemeProvider } from "styled-components/native";

// Importing the defined theme of our app
import { theme } from "./src/infrastructure/theme";


export default function App() {
  
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

