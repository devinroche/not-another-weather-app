const api_key = `7b1d07389cace374d49bf64303a8b089`;

export const GET_WEEK_WEATHER = "WEEK_LOAD";
export const GET_WEEK_WEATHER_SUCCESS = "WEEK_LOAD_SUCCESS";
export const GET_WEEK_WEATHER_FAIL = "WEEK_LOAD_FAIL";

const initialState = {
    week: [],
    loading: false,
    error: ""
}

export function week_reducer(state = initialState, action) {
    switch(action.type){
        case GET_WEEK_WEATHER:
            return {...state, loading: true}

        case GET_WEEK_WEATHER_SUCCESS:
            return {...state, loading: false, week: action.payload.data}

        case GET_WEEK_WEATHER_FAIL:
            return {...state, loading: false, error: "Error while fetching"}
        

        default:
            return state
    }
}

export function getWeekForcast(lat, lon) {
    return {
        type: GET_WEEK_WEATHER,
        payload: {
            request: {
                url: `data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`
            }
        }
    }
}