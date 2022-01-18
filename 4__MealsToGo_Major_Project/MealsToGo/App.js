import { 
  Platform, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View,
  StatusBar 
} from 'react-native';

import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import React from 'react';
import { Searchbar } from 'react-native-paper';

const isAndroid = Platform.OS === 'android';

export default function App() {
  
  return (

    <>

      <SafeAreaView style={ styles.container }>

        <View style={ styles.search }>
          <Searchbar
            placeholder="Search"
          />
        </View>

        <View style={ styles.list }>
            <Text> list </Text>
        </View>

      </SafeAreaView>

      <ExpoStatusBar style='auto'/>

    </>
    
    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1, 
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16, 
  }, 
  list: {
    padding: 16, 
    backgroundColor: "blue", 
    flex: 1 
  }
  
});
