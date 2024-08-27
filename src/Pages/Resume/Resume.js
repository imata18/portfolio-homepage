import React from 'react'

import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

import './Resume.css'
import jobInfo from '../../Utils/jobInfo'
import educationInfo from '../../Utils/educationInfo';
import skills_services from '../../Utils/skills_services';
import CustomTimeline, { CustomTimelineSeparator } from '../../Components/Timeline/Timeline'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { TimelineContent, TimelineDot, TimelineSeparator , TimelineItem} from '@mui/lab';
import Paper from '@mui/material/Paper';

const Resume = () => {
  return (
    <>
    
    {/* About Me */}
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

    {/* Education and Experience */}
    <Grid container className='section'>
      <Grid item className='section_title mb_30'>
        <span></span>
        <h6 className='section_title_text'>Resume</h6>
      </Grid>
      <Grid item xs={12}>
        <Grid container className='resume_timeline' >
          {/**Experience */}
          <Grid item sm={12} md={6}>
            <CustomTimeline 
            title="Work Experience" 
            icon={<WorkIcon/>}>
              {jobInfo.experiences.map(experience => (
                <TimelineItem>
                  <CustomTimelineSeparator className="separator_padding"/>
                    <TimelineContent className='timeline_content'> 
                      <Typography className='timeline_title'>{experience.title}</Typography>
                      <Typography variant = 'body2' className='timeline_company'>{experience.company}</Typography>
                      <Typography variant = 'caption' className='timeline_date'>{experience.date}</Typography>
                      <Typography variant = 'body2' className='timeline_description'>{experience.description}</Typography>
                    </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
          {/**Education */}
          <Grid item sm={12} md={6}>
            <CustomTimeline 
            title="Education" 
            icon={<SchoolIcon/>}>
              {educationInfo.educations.map(education => (
                <TimelineItem>
                  <CustomTimelineSeparator className="separator_padding"/>
                    <TimelineContent className='timeline_content'> 
                      <Typography className='timeline_title'>{education.school}</Typography>
                      <Typography variant = 'body2' className='timeline_company'>{education.degree}</Typography>
                      <Typography variant = 'caption' className='timeline_date'>{education.date}</Typography>
                      <Typography variant = 'body2' className='timeline_description'>{education.relevantCourses}</Typography>
                    </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
        </Grid>

      </Grid>
    </Grid>

    {/* Skills */}
    <Grid item className='section_title mb_30'>
        <span></span>
        <h6 className='section_title_text'>Skills</h6>
    </Grid>
    <Grid container 
    spacing={3}
    justify='space-between' 
    className='section graybg pb_45'>
      {skills_services.skills.map((skill) => (
        <Grid item xs={12} sm={6} md={3}>
          <Paper elevation = {0} className='skill'>
            <Typography variant='h6' className='skill_title'>
              {skill.title}
            </Typography>
            {skill.description.map((item) => (
              <Typography variant='body2' className='skill_description'>
                <TimelineDot variant='outlined' className='timeline_dot'/>
                {item}
              </Typography>
            ))}
          </Paper>
        </Grid>
      ))}

    </Grid>

    </ >
  )
}

export default Resume