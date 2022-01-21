import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from 'react';

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurantsScreen";

// styled-components "Theme"
import { ThemeProvider } from "styled-components/native";

import { Text, SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

// React Navigation -> Tab Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from "@expo/vector-icons";

// styled-components
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${ StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

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

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);


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
        
        <NavigationContainer>
          <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Restaurants") {
                    iconName = focused 
                      ? "md-restaurant"
                      : "md-restaurant-outline";
                  } else if (route.name === "Settings") {

                    iconName = focused
                      ? "md-settings"
                      : "md-settings-outline";
                  } else if (route.name === "Map") {
                    iconName = focused
                      ? "md-map"
                      : "md-map-outline";
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
              })}
            >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
          
      </ThemeProvider>

      <ExpoStatusBar style='auto'/>

    </>
    
    
  );
}

