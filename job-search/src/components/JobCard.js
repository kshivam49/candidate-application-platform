import React from 'react';
import './JobCard.css';

const JobCard = ({ job }) => {
    return (
        <div className="job-card">
            <h3>{job.jobRole}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.jobDetailsFromCompany}</p>
            <p>Experience Required: {job.minExp} - {job.maxExp}</p>
            <a href={job.jdLink} target="_blank" rel="noopener noreferrer">
                <button className="apply-button">Apply</button>
            </a>
        </div>
    );
};

export default JobCard;
