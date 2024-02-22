import { Typography } from "@mui/material";
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from "@mui/lab/TimelineContent";
import CustomButton from "../Button/Button";
import GetAppIcon from '@mui/icons-material/GetApp';


import jobInfo from "../../Utils/jobInfo";

import './Profile.css'

const CustomTimelineItem = ({title, text, link}) => {
  return (
    <TimelineItem>
      <CustomTimelineSeparator/>
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text">
            <span>{title}:</span>{" "}
            <a href={link} target="_blank">
              {text}
            </a>
          </Typography>
        ): (
          <Typography className="timelineItem_text">
            <span>{title}:</span> {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  )
}

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
        <CustomTimeline icon={<PersonOutlineOutlinedIcon/>}>
          <CustomTimelineItem title='Name' text={jobInfo.name}/>
          <CustomTimelineItem title='Title' text={jobInfo.title}/>
          <CustomTimelineItem title='Email' text={jobInfo.email}/>

          {Object.keys(jobInfo.socials).map(key => (
            <CustomTimelineItem title={key} text={jobInfo.socials[key].text} link={jobInfo.socials[key].link}/>
          ))}
        </CustomTimeline>
        <br />
        <CustomButton text={"Download Resume"}  icon={<GetAppIcon />}/>
      </div>
    </div>
  )
}

export default Profile