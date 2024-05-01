import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../Features/Jobs/jobsSlice';

export const store = configureStore({
    reducer: {
        jobs: jobsReducer,
    },
});
