import { Typography } from "@mui/material";
import React from 'react'

import './Profile.css'

const Profile = () => {
  return (
    <div className="profile containter_shadow">
      <div className="profile_name">
        <Typography className="name">Temp</Typography>
        <Typography className="title">Temp</Typography>
      </div>
      <figure className="profile_image">
        <img src={require('../../Assets/Images/Portfolio_pic.jpg')} alt="" />
      </figure>

      <div className="profile_info">
        Temp
        <br />
        <button>button</button>
      </div>
    </div>
  )
}

export default Profile