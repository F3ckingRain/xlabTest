import {createSlice} from "@reduxjs/toolkit";
import {IData} from "../../Types/Address";

const initialState:IData = {
    data: []
}

export const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        setListData(state, action) {
            state.data = action.payload
        }
    }
})

export default apiSlice.reducer