const apiKey = '7b1d07389cace374d49bf64303a8b089';

export const GET_WEATHER = 'LOAD';
export const GET_WEATHER_SUCCESS = 'LOAD_SUCCESS';
export const GET_WEATHER_FAIL = 'LOAD_FAIL';

const initialState = {
    weather: [],
    loading: false,
    error: '',
};

export function dayReducer(state = initialState, action) {
    switch (action.type) {
    case GET_WEATHER:
        return { ...state, loading: true };

    case GET_WEATHER_SUCCESS:
        return { ...state, loading: false, weather: action.payload.data };

    case GET_WEATHER_FAIL:
        return { ...state, loading: false, error: 'Error while fetching' };

    default:
        return state;
    }
}

export function getWeather(lat, lon) {
    return {
        type: GET_WEATHER,
        payload: {
            request: {
                url: `data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`,
            },
        },
    };
}
