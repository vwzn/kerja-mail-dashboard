import { configureStore } from '@reduxjs/toolkit';
import domainReducer from './slices/domainSlice';

export default configureStore({
    reducer: {
        domains: domainReducer,
    },
});