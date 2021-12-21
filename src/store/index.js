import {configureStore} from "@reduxjs/toolkit";
import productionReducer from "./productionSlice";
import factoryReducer from "./factorySlice";
import registrationReducer from "./registrationSlice";


export default configureStore({
    reducer: {
        production: productionReducer,
        factory: factoryReducer,
        registration: registrationReducer,
    },
});

