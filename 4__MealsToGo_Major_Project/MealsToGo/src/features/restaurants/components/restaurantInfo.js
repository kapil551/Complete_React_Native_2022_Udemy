import React from "react";
import { Text, StyleSheet } from "react-native";

import { Card } from 'react-native-paper';
import styled from "styled-components";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

// Create a <Title> react-native component that renders an Text component which is
// red and sized at 16px
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
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

            <Info>
              <Title> {name} </Title>
              <Address>{address}</Address>
            </Info>
        </RestaurantCard>

    );

};
