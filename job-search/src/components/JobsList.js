import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../Features/Jobs/jobsSlice';
import { Grid } from '@mui/material';
import JobCard from './JobCard';
import './JobList.css';

const JobList = () => {
    const dispatch = useDispatch();
    const { jobs, hasMore } = useSelector(state => state.jobs);
    const [filterRole, setFilterRole] = useState('');
    const [filterLocation, setFilterLocation] = useState('');

    useEffect(() => {
        if (hasMore) {
            dispatch(fetchJobs({ limit: 10, offset: 0 }));
        }
    }, [dispatch, hasMore]);

    window.onscroll = function () {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            if (hasMore) {
                dispatch(fetchJobs({ limit: 10, offset: jobs.length }));
            }
        }
    };

    const filterJobs = (job) => {
        return job.jobRole.toLowerCase().includes(filterRole.toLowerCase()) &&
            job.location.toLowerCase().includes(filterLocation.toLowerCase());
    };

    const handleRoleChange = (e) => {
        setFilterRole(e.target.value);
    };

    const handleLocationChange = (e) => {
        setFilterLocation(e.target.value);
    };

    return (
        <div className="job-list-container">
            <h1 className="title">Candidate Application Platform</h1>
            <div className="filters-container">
                <input
                    type="text"
                    className="filter-input"
                    placeholder="Filter by Job Role"
                    value={filterRole}
                    onChange={handleRoleChange}
                />
                <input
                    type="text"
                    className="filter-input"
                    placeholder="Filter by Location"
                    value={filterLocation}
                    onChange={handleLocationChange}
                />
            </div>

            <Grid container spacing={2}>
                {jobs.filter(filterJobs).map((job, index) => (
                    <Grid item key={`${job.jdUid}-${job.location}-${index}`} xs={12} sm={6} md={4}>
                        <JobCard job={job} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default JobList;
