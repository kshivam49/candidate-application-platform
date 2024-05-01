import React from 'react';
import './JobCard.css';

const JobCard = ({ job }) => {

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    };


    return (
        <div className="job-card">
            <h3>{job.jobRole}</h3>
            <p>{job.company}</p>
            <p className='location'>{job.location}</p>
            <p><strong>Job Details :</strong> {truncateText(job.jobDetailsFromCompany, 200)}</p>
            <p>Estimated Salary: {job.minJdSalary} {job.salaryCurrencyCode} - {job.maxJdSalary} {job.salaryCurrencyCode} ✅</p>
            <p>Experience Required: {job.minExp} - {job.maxExp}</p>
            <a href={job.jdLink} target="_blank" rel="noopener noreferrer">
                <button className="apply-button">⚡ Easy Apply</button>
            </a>
        </div>
    );
};

export default JobCard;
