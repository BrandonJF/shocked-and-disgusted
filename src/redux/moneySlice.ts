import { createSlice } from "@reduxjs/toolkit";
import { number } from "prop-types";

const moneySlice = createSlice({
    name:'money',
    initialState: [0],
    reducers: {
        addMoney(state, action){
            const {amount} = action.payload
            state.push(amount)
        }
    }
})

export const {addMoney} = moneySlice.actions
export default moneySlice.reducer