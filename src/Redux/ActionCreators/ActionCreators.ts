import {AppDispatch} from "../store";
import axios from "axios";
import {TOKEN} from "../../Const/Token";
import {apiSlice} from "../Reducers/apiSlice";

export const getList = (query:string) => async (dispatch:AppDispatch) => {
    const {setListData} = apiSlice.actions
    const data = JSON.stringify({query: query})
         await axios
            .post(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address/`,
               data,
                {
                    headers: {
                        "Content-Type" : "application/json",
                        "Accept": "application/json",
                        "Authorization": "Token " + TOKEN
                    },
                })
            .then(response => dispatch(setListData(response.data.suggestions)))
             .catch(e => console.log(e))
}