
// FETCH ACTION NAMES


export const MAP_FULFILLED = 'MAP_FULFILLED';
export const MAP_FETCHING = 'MAP_FETCHING';
export const MAP_FETCHED = 'MAP_FETCHED';



// ACTION GENERATORS



export function MapFulfilled(map) {
    return {
        type: 'MAP_FULFILLED',
        payload : map
    };
}

export function MapFetching() {
    return {
        type: 'MAP_FETCHING'
    };
}

export function MapFetched() {
    return {
        type: 'MAP_FETCHED'
    };
}

