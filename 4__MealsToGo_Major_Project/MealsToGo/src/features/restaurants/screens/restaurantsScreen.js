import { 
    SafeAreaView,  
    StatusBar,
    FlatList,
} from 'react-native';
  
import React, { useContext } from 'react';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurantInfo';
import styled from 'styled-components';

import { RestaurantsContext } from '../../../services/restaurants/restaurantsContext';

import { Spacer } from '../../../components/spacer/spacerComponent';

// Migrating to styled-components
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${ StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {

    const restaurantContext = useContext(RestaurantsContext);
    // console.log(restaurantContext);

    return (

        <SafeArea>

            <SearchContainer>
                <Searchbar
                    placeholder="Search"
                />
            </SearchContainer>

            <FlatList
              data={ restaurantContext.restaurants}
              renderItem={() => (
                <>
                  <RestaurantInfoCard />
                  <Spacer variant="bottom.large"> </Spacer>
                </>
              )}
              keyExtractor={(item) => item.name}
              contentContainerStyle = { { padding: 16 }}

            />

      </SafeArea>
    );
};
  