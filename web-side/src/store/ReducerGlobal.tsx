import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useLayoutEffect } from "react";
import { useNuiEvent } from "../hooks/useNuiEvent";

const INITIAL_STATE: any = {
    weapons: [],
    selectedWeapon: {},
    bank: 123222,
    categorys: [],
    categorySelected: "",
    title: 'WEAPON SHOP',
    ip:'',
    showBank: false,
};


const GlobalReducer = createSlice({
    name: "global",
    initialState: INITIAL_STATE,
    reducers: {
        setWeaponsList: (state, action) => {
            state.weapons = action.payload;
            state.selectedWeapon = action.payload[0];
        },
        setSeletedWeapon: (state, action) => {
            state.selectedWeapon = action.payload;
        },
        setCategorys: (state, action) => {
            state.categorys = action.payload;
            state.categorySelected = action.payload[0];
        },
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload;
        },
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setBank: (state, action) => {
            state.bank = action.payload;
        },
        setIp: (state, action) => {
            state.ip = action.payload;
        },
        setBankVisibility: (state, action) => {
            state.showBank = action.payload;
        }
    },
});

export default GlobalReducer.reducer;
export const {
    setWeaponsList,
    setSeletedWeapon,
    setCategorys,
    setCategorySelected,
    setTitle,
    setBank,
    setIp,
    setBankVisibility
} = GlobalReducer.actions;
export const useGlobal = (state: any) => state.global;
