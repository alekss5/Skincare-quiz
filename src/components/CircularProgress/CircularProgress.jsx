import React from 'react';
import styles from './CircularProgress.module.css';

const CircularProgress = ({ questionNumber, totalQuestions }) => {
    const radius = 45;
    const strokeWidth = 6;
    const circumference = 2 * Math.PI * radius;
    const progress = (questionNumber / totalQuestions) * 100;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className={styles.circularProgressContainer}>
            <svg className={styles.circularProgressSvg} width="120" height="120" viewBox="0 0 120 120">
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    className={styles.circularProgressBg}
                    strokeWidth={strokeWidth}
                />
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    className={styles.circularProgressBar}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>
            <div className={styles.circularProgressText}>
                <p>{`${questionNumber}/${totalQuestions}`}</p>
            </div>
        </div>
    );
};

export default CircularProgress;
