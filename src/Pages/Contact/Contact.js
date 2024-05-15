import React from 'react'

import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

const Contact = () => {
  return (
    <>
        <Grid container className='section'>
            {/* Contact Form */}
            <Grid item xs={12} lg={7}> 
            <Grid container>
                <Grid item className='section_title mb_30'>
                <span></span>
                <h6 className='section_title_text'>Contact Form</h6>
                </Grid>
            </Grid>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} lg={5}> 
            </Grid>
        </Grid>
    </>
  )
}

export default Contact