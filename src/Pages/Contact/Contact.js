import React from "react";

import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./Contact.css";
import CustomButton from "../../Components/Button/Button";

const Contact = () => {
  return (
    <>
      <Grid container className="section">
        <Grid item xs={12} lg={7}>
          <Grid container>
            {/* Contact Form */}
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

        </Grid>
      </Grid>

      {/* Address - Google Map */}
    </>
  );
};

export default Contact;
