import React, { useState } from 'react';

import { Box, Tab, Tabs } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassWater, faDumbbell } from '@fortawesome/free-solid-svg-icons'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

import WaterTracker from './WaterTracker';
import ExerciseTracker from './ExerciseTracker';
import MeditationTracker from './MeditationTracker';

import '../../../styles/pages/daily-activities/DailyActivities.scss';
import 'react-circular-progressbar/dist/styles.css';

export default function DailyActivities() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };

    return (
        <Box className="dailyActivities">
            <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth">
                <Tab label="Meditation Tracker" icon={<SelfImprovementIcon />} />
                <Tab label="Water Tracker" icon={<FontAwesomeIcon icon={faGlassWater} />} />
                <Tab label="Excercise Tracker" icon={<FontAwesomeIcon icon={faDumbbell} />} />
            </Tabs>

            {tabIndex === 0 && (<MeditationTracker />)}
            {tabIndex === 1 && (<WaterTracker />)}
            {tabIndex === 2 && (<ExerciseTracker />)}
        </Box>
    );
}