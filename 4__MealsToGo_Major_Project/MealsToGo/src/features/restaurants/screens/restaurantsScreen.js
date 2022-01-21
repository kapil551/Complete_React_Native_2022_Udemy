import { 
    SafeAreaView,  
    StatusBar,
    FlatList,
} from 'react-native';
  
import React, { useContext } from 'react';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';

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

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {

    const { restaurants, isLoading, error} = useContext(RestaurantsContext);
    console.log(isLoading)
    console.log(restaurants);
    console.log(error);

    return (

        <SafeArea>

            {isLoading && (
              <LoadingContainer>
                <Loading size={50} animating={true} color={Colors.blue300} />
              </LoadingContainer>
            )}

            <SearchContainer>
                <Searchbar
                    placeholder="Search"
                />
            </SearchContainer>

            <FlatList
              data={ restaurants }
              renderItem={( { restaurant }) => (
                <>
                  <RestaurantInfoCard  restaurant={restaurant} />
                  <Spacer variant="bottom.large"> </Spacer>
                </>
              )}
              keyExtractor={(item) => item.name}
              contentContainerStyle = { { padding: 16 }}

            />

      </SafeArea>
    );
};
  