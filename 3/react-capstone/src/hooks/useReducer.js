import { fetchAPI } from '../components/api/api';

export const initialState = {
    availableTimes: fetchAPI(new Date()),
    selectedTime: '',
};

export function useReducer(state, action) {
    switch (action.type) {
        case 'SELECT_TIME':
            return {
                ...state,
                availableTimes: state.availableTimes.filter(
                    (time) => time !== action.payload
                ),
                selectedTime: action.payload,
            };
        default:
            return state;
    }
}
