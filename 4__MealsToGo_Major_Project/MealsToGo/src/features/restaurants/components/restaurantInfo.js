import React from "react";
import { Text } from "react-native";

import { Spacer } from "../../../components/spacer/spacerComponent";

import { 
  RestaurantCard,

  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  
  Address,
  Icon,
} from "./restaurantInfoStyles";

import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

                    // set restaurant to be an empty object for now
export const RestaurantInfoCard = ({ restaurant = {} }) => {

    // get these from the restaurant object
    const {
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;

    // ratingArray
    const ratingArray = Array.from(
      new Array(Math.floor(rating))
    );
    // console.log(ratingArray);
  
    return (

        // https://callstack.github.io/react-native-paper/card.html
        <RestaurantCard elevation={5} >
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />

            <Info>

              <Text variant="label"> {name} </Text>

              <Section>

                <Rating>
                  {ratingArray.map(() => (
                    <SvgXml xml={star} width={20} height={20} />
                  ))}
                </Rating>

                <SectionEnd>

                  { isClosedTemporarily && (
                    <Text variant="error" style={{ color: "red" }}>
                      CLOSED TEMPORARILY
                    </Text>
                  ) }

                  <Spacer variant="left.large"/>

                  { isOpenNow && 
                      <SvgXml xml={open} width={20} height={20} /> 
                  }

                  <Spacer variant="left.large"/>
                  
                  <Icon 
                    source={{ uri: icon }} 
                  />

                </SectionEnd>

              </Section>

              <Address>{address}</Address>

            </Info>

        </RestaurantCard>

    );

};
