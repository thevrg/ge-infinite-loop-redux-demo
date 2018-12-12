
export const initialState = {};
export const myReducer = 
(state, action) => {
    if (!state) {
        state = initialState;
    }
    return state;
};