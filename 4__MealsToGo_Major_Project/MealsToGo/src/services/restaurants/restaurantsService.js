// Fake an API Request to fetch the mock data 
import { mocks } from "./mock/index";


export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {

    return new Promise((resolve, reject) => {

        const mockData = mocks[location];

        if(!mockData) {
            reject("Data Not Found");
        }

        resolve(mockData);

    });

}

// This restaurantsRequest is a promise --> so it needs to the then() and catch()
restaurantsRequest()
    .then((dataFromAPI) => {
        console.log(dataFromAPI);
    })
    .catch((err) => {
        console.log(err);   
    });
