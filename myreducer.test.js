import {myReducer, initialState} from './reducers.js';

describe('myreducer', () => {
    it('should return initialstate for an unknown action', () => {
        const newState = myReducer(undefined, {type: 'UNknown'});
        expect(newState).toBe(initialState);
    })
});