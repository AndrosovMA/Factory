import {createSlice} from "@reduxjs/toolkit";

export const factorySlice = createSlice({
    name: "factory",
    initialState: {
        allProduction: {},
        numbersOrders: [1],
        obj: {},
        numberChange:'',
        objChange: {},
    },
    reducers: {
        addProduction: (state, data) => {
            let currentOrder =  state.numbersOrders.length;
            state.allProduction[currentOrder] = {
                material: data.payload[0],
                type_production: data.payload[1],
                name_production: data.payload[2],
                quantity: data.payload[3],
                other_parameters: data.payload[4],
                date: data.payload[5],
                address: data.payload[6],
            }
            state.numberValue = state.numbersOrders.length;
            state.numbersOrders.push(currentOrder + 1);
        },
        deleteProduction: (state,data) => {
            delete state.allProduction[data.payload];

            //присваиваем в новом порядке ключи объекта после удаления одной позиции
            state.numbersOrders.pop();
            Object.entries(state.allProduction).forEach((item, index)=>{
                 state.obj[index+1] = item[1];
            });
            state.allProduction = state.obj;
            state.obj={};
        },
        getNumberChange: (state, data) => {
            state.numberChange = data.payload;
            state.objChange = state.allProduction[data.payload];

        },
        changeProduction: (state, data) => {
            state.allProduction[state.numberChange] = {
                material: data.payload[0],
                type_production: data.payload[1],
                name_production: data.payload[2],
                quantity: data.payload[3],
                other_parameters: data.payload[4],
                date: data.payload[5],
                address: data.payload[6],
            }
        }

    }
})

export const selectProduction = state => state.factory.allProduction;
export const selectNumbersOrders = state => state.factory.numbersOrders;
export const selectNumbersChange = state => state.factory.numberChange;
export const selectObjectChange = state => state.factory.objChange;

export const {addProduction, deleteProduction, getNumberChange, changeProduction} = factorySlice.actions;
export default factorySlice.reducer;


