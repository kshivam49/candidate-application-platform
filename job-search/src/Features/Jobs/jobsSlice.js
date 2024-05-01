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
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { jdList } = action.payload;
                if (Array.isArray(jdList)) {
                    state.jobs.push(...jdList);
                    state.hasMore = jdList.length > 0;
                    state.page += 1;
                } else {
                    console.error('Payload does not contain a valid job list:', action.payload);
                }
            })

            .addCase(fetchJobs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default jobsSlice.reducer;