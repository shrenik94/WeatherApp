import { FETCH_WEATHER } from '../actions/index';


export default function(state = [], action) {
    if(action.error) {
        return state; 
    }
    switch(action.type) {
    case FETCH_WEATHER: 
        return [ action.payload.data, ...state]; // [city, city, city]  and not like [city, [city, [city[]]]] 
    }
    return state;
}