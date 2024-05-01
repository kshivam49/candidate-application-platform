import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async ({ limit, offset }) => {
    const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ limit, offset }),
    });
    return response.json();
});

const jobsSlice = createSlice({
    name: 'jobs',
    initialState: {
        jobs: [],
        status: 'idle',
        error: null,
        page: 0,
        hasMore: true,
    },
    reducers: {},
    extraReducers: {
        [fetchJobs.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchJobs.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.jobs = [...state.jobs, ...action.payload.jobs];
            state.hasMore = action.payload.jobs.length > 0;
            state.page += 1;
        },
        [fetchJobs.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    },
});

export default jobsSlice.reducer;
