import React from 'react'

import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

import './Resume.css'
import jobInfo from '../../Utils/jobInfo'

const Resume = () => {
  return (
    <>
    
    <Grid container className='section pb_45'>
      <Grid item className='section_title mb_30'>
        <span></span>
        <h6 className='section_title_text'>About Me</h6>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body2' className = 'aboutme_text'> 
          {jobInfo.aboutMe}
        </Typography>
      </Grid>
    </Grid>

    <Grid container className='section'>
      
    </Grid>

    <Grid container className='section'>

    </Grid>
    </ >
  )
}

export default Resume