import React from "react";
import { Text, StyleSheet } from "react-native";

import { Card } from 'react-native-paper';
import styled from "styled-components";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

// Create a <Title> react-native component that renders an Text component which is
// red and sized at 16px
const Title = styled.Text`
  padding: 16px;
  color: red;
`;

                    // set restaurant to be an empty object for now
export const RestaurantInfoCard = ({ restaurant = {} }) => {

    // get these from the restaurant object
    const {
        name = "Some Restaurant",
        icon,
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;
  
    return (

        // https://callstack.github.io/react-native-paper/card.html
        <RestaurantCard elevation={5} >
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title> {name} </Title>
        </RestaurantCard>

    );

};
