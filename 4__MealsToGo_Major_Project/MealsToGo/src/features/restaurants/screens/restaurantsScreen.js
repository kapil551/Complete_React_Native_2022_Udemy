import { 
    Platform, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    View,
    StatusBar 
} from 'react-native';
  
import React from 'react';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurantInfo';

export const RestaurantsScreen = () => (

    <SafeAreaView style={ styles.container }>

    <View style={ styles.search }>
      <Searchbar
        placeholder="Search"
      />
    </View>

    <View style={ styles.list }>
        <RestaurantInfoCard />
    </View>

  </SafeAreaView>
);

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
  