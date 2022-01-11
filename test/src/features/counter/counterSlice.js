

import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice ({
    name: 'counter',
    initialState: {
        value: 0,
    },

    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },  

        reset: state => {
            state.value = 0;
        },

        addfive: state => {
            state.value += 5;
        },
        decreasefive: state => {
            state.value -= 5;
        }
    },  
});

export const{ increment, decrement, reset, addfive, decreasefive} = slice.actions;

export const selectCount = state => state.counter.value;

export default slice.reducer;