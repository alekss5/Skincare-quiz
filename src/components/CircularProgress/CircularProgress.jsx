import React from 'react';
import './CircularProgress.css';

const CircularProgress = ({ questionId, totalQuestions }) => {
    const radius = 45;
    const strokeWidth = 6;
    const circumference = 2 * Math.PI * radius;
    const progress = ((questionId + 1) / totalQuestions) * 100;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="circular-progress-container">
            <svg className="circular-progress-svg" width="120" height="120" viewBox="0 0 120 120">
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    className="circular-progress-bg"
                    strokeWidth={strokeWidth}
                />
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    className="circular-progress-bar"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>
            <div className="circular-progress-text">
                <p>{`${questionId + 1}/${totalQuestions}`}</p>
            </div>
        </div>
    );
};

export default CircularProgress;
