import {createSlice} from "@reduxjs/toolkit";

export const registrationSlice = createSlice({
    name: 'registration',
    initialState: {
        settingEntrance: false,
        userPersonalData: {},
        dataEntrance: 'Вход',
        // userLastName: '',
    },
    reducers: {
        login: (state, data) => {
            state.settingEntrance = true;
            state.dataEntrance = 'Выход';
            state.userPersonalData = data.payload;
        },
        logout: (state, data) => {
            state.settingEntrance = false;
            state.dataEntrance = 'Вход';
            state.userPersonalData = {};
        },
        changeEmailUser: (state, data) => {
            if (data.payload === null) {
                state.userPersonalData['Email'] = state.userPersonalData['Email'].slice(0, -1);
            } else {
                state.userPersonalData['Email'] += data.payload;
            }
        },
        changeTellUser: (state, data) => {
            if (data.payload === null) {
                state.userPersonalData['Mobile number'] = state.userPersonalData['Mobile number'].slice(0, -1);
            } else {
                state.userPersonalData['Mobile number'] += data.payload;
            }
        },
        changePasswordUser: (state, data) => {
            if (data.payload === null) {
                state.userPersonalData['Password'] = state.userPersonalData['Password'].slice(0, -1);
            } else {
                state.userPersonalData['Password'] += data.payload;
            }
        },
        setChangedParameters: (state) => {
            let user = state.userPersonalData;
            let userJSON = JSON.stringify(user);
            const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let regExpValue = regExp.test(String(user['Email']).toLowerCase());

            if (user['Password'].length >= 6 && user['Password'].length <=20 && regExpValue === true) {
                localStorage.setItem(user['Last name'], userJSON);
            }
        }
    }
})

export const selectSettingEntrance = state => state.registration.settingEntrance;
export const selectUserPersonalData = state => state.registration.userPersonalData;
export const selectDataEntrance = state => state.registration.dataEntrance;


export const {login, logout, changeEmailUser, changeTellUser, changePasswordUser, setChangedParameters} = registrationSlice.actions;

export default registrationSlice.reducer;