import { createSlice } from '@reduxjs/toolkit';

const domainSlice = createSlice({
    name: 'domains',
    initialState: {
        domains: [],
        selectedDomain: null,
        loading: false,
        error: null
    },
    reducers: {
        setDomains: (state, action) => {
            state.domains = action.payload;
        },
        selectDomain: (state, action) => {
            state.selectedDomain = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        }
    }
});

export const { setDomains, selectDomain, clearError } = domainSlice.actions;
export default domainSlice.reducer;