import React from 'react'
import Layout from '../components/Layout'
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Mon',
  'Tue',
  'Wed',
  'Thur',
  'Fri',
  'Sat',
  'Sun',
];

const steps = [
    'Check out the daily Status',
    'Change workout accordingly',
    'Complete challenge',
  ];


function Activities() {
    return (
        <>

            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container'>
                    <h1> Your Dashbaord </h1>
                </div>
                <div className='graph'>
                <BarChart
                width={500}
                height={300}
                series={[
                  { data: pData, label: 'Workout', id: 'WId' },
                  { data: uData, label: 'Calorie', id: 'CId' },
                ]}
                xAxis={[{ data: xLabels, scaleType: 'band' }]}
              />
              <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: 'Calorie' },
                    { id: 1, value: 15, label: 'Workout' },
                    { id: 2, value: 20, label: 'Steps' },
                  ],
                },
              ]}
              width={400}
              height={200}
            />

            <Box sx={{ width: '30%' }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

           
                </div>
                
    </div>
   
            
        </>
    )
}

export default Activities