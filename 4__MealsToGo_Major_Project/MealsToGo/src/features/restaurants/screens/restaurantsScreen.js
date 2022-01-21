import { 
    SafeAreaView,  
    StatusBar,
    FlatList,
} from 'react-native';
  
import React from 'react';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/restaurantInfo';
import styled from 'styled-components';

import { Spacer } from '../../../components/spacer/spacerComponent';

// Migrating to styled-components
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${ StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (

    <SafeArea>

        <SearchContainer>
            <Searchbar
                placeholder="Search"
            />
        </SearchContainer>

        <FlatList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
            { name: 9 },
            { name: 10 },
            { name: 11 },
            { name: 12 },
            { name: 13 },
            { name: 14 },
          ]}
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
  