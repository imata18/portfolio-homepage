import React from "react";

import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./Contact.css";
import CustomButton from "../../Components/Button/Button";
import contactInfo from "../../Utils/contactInfo";
import jobInfo from "../../Utils/jobInfo.js";

const Contact = () => {
  return (
    <>
      <Grid container className="section" spacing={5}>
        {/* Contact Form */}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3} className="contact_form">
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    className="input_field"
                    label="Name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    className="input_field"
                    label="Email"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    className="input_field"
                    label="Message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton className="btn_sendMessage" text='Send Message'/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography  variant="body2" className='contact_infoItem'>
                    <span>Address: </span>
                    {contactInfo.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" className='contact_infoItem'>
                    <span>Phone: </span>
                    {contactInfo.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" className='contact_infoItem'>
                    <span>Email: </span>
                    {contactInfo.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            
            {/* Social Links */}
            <Grid item xs={12}>
              <Grid container className="contact_socialLinks">
                {Object.keys (jobInfo.socials).map(key => (
                  <Grid item className="contact_socialLink"> 
                    <a href={jobInfo.socials[key].link}>{jobInfo.socials[key].icon}</a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Address - Google Map */}
      <Grid container className="map">
        <Grid item xs={12}>
          <div className="map_container">
            <iframe 
            title="Boston Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23591.783588272418!2d-71.11738608369444!3d42.34310010641215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a1fa648a9a7%3A0x7a62be935904a698!2sBoston%2C%20MA%2002115!5e0!3m2!1sen!2sus!4v1716312298219!5m2!1sen!2sus" 
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"/>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
