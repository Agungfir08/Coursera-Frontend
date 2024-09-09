import { fetchAPI } from '../components/api/api';

export const initialState = {
    availableTimes: [],
    selectedTime: '',
    selectedDate: new Date(),
    timesByDate: {},
};

export function useReducer(state, action) {
    switch (action.type) {
        case 'AVAILABLE_TIME':
            const newDate = new Date(action.payload);
            const dateKey = newDate.toDateString();
            let newTimes;

            if (state.timesByDate[dateKey]) {
                newTimes = state.timesByDate[dateKey];
            } else {
                newTimes = fetchAPI(newDate);
            }
            return {
                ...state,
                availableTimes: newTimes,
                selectedDate: newDate,
                timesByDate: {
                    ...state.timesByDate,
                    [dateKey]: newTimes,
                },
            };
        case 'SELECT_TIME':
            const updatedTimes = state.availableTimes.filter(
                (time) => time !== action.payload
            );
            return {
                ...state,
                availableTimes: updatedTimes,
                selectedTime: action.payload,
                timesByDate: {
                    ...state.timesByDate,
                    [state.selectedDate.toDateString()]: updatedTimes,
                },
            };
        default:
            return state;
    }
}
