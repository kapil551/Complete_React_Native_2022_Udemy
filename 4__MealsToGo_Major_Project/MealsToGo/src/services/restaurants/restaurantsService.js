// Fake an API Request to fetch the mock data 
import { mocks } from "./mock/index";

import camelize from "camelize";


export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {

    return new Promise((resolve, reject) => {

        const mockData = mocks[location];

        if(!mockData) {
            reject("Data Not Found");
        }

        resolve(mockData);

    });

}

// transform the dataFromAPI
export const restaurantsDataTransform = (mockDataResults) => {
    
    // console.log(mockDataResults.results);
    const newResult = mockDataResults.results.map((restaurant) => {

        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY", 
        }

    });

    return camelize(newResult);
};


