import React from 'react'

import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import './Contact.css';

const Contact = () => {
  return (
    <>
        <Grid container className='section'>
            {/* Contact Form */}
            <Grid item className='section_title mb_30'>
            <span></span>
            <h6 className='section_title_text'>Contact Form</h6>
            </Grid>
            <Grid item xs={12}>
                <Grid container className='contact_form'>
                    <Grid item xs={12} lg={3}> 
                        <TextField className='input_field' label="Name" variant="standard" />
                    </Grid>
                    <Grid item xs={12} lg={3}> 
                        <TextField className='input_field' label="Email" variant="standard" />
                    </Grid>
                </Grid>
                <TextField
                    className='input_field top_30'
                    label="Message"
                    multiline 
                    rows={4}
                />
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} lg={5}> 
            </Grid>
        </Grid>

        {/* Address - Google Map */}
        
    </>
  )
}

export default Contact