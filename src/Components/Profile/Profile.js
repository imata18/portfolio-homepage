import { Typography } from "@mui/material";
import React from 'react'
import CustomTimeline from '../Timeline/Timeline'

import jobInfo from "../../Utils/jobInfo";

import './Profile.css'


const Profile = () => {
  return (
    <div className="profile containter_shadow">
      <div className="profile_name">
        <Typography className="name">{jobInfo.name}</Typography>
        <Typography className="title">{jobInfo.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={require('../../Assets/Images/Portfolio_pic.jpg')} alt="" />
      </figure>

      <div className="profile_info">
        <CustomTimeline />
        <br />
        <button>button</button>
      </div>
    </div>
  )
}

export default Profile