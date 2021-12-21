import {createSlice} from "@reduxjs/toolkit";

/** Import data*/
import materialArr from '../data/material.json';
import type_productionArr from '../data/type_production.json';
import users_productionArr from '../data/users_production.json';


export const productionSlice = createSlice({
    name: "production",
    initialState: {
        type_production: type_productionArr,
        material: materialArr,
        users_production: users_productionArr
    },
    reducers: {

    }
})

export const selectTypeProduction = state => state.production.type_production;
export const selectMaterial = state => state.production.material;
export const selectUsersProduction = state => state.production.users_production;

export default productionSlice.reducer;




