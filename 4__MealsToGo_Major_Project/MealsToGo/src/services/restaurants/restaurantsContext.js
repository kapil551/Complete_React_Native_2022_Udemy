import React, { createContext, useEffect, useState } from "react";

import {
    restaurantsRequest,
    restaurantsDataTransform
} from "./restaurantsService";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {

    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = () => {

        setIsLoading(true);

        setTimeout(() => {

          restaurantsRequest()
            .then(restaurantsDataTransform)
            .then((results) => {

              setIsLoading(false);
              setRestaurants(results);
            })
            .catch((err) => {
              setIsLoading(false);
              setError(err);
            });

        }, 2000);
    };

    useEffect(
        () => {
            retrieveRestaurants();
        }, []
    );
 
    return (
        <RestaurantsContext.Provider
        value={{
            restaurants,
            isLoading,
            error,
        }}
        >
        {children}
        </RestaurantsContext.Provider>
    );
};