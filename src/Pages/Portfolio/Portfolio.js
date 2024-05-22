import React, { useState } from "react";
import "./Portfolio.css";
import {
  Grid,
  Tabs,
  Tab,
  CardActionArea,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grow,
} from "@mui/material";
import projects from "../../Utils/projects";
import { Card, CardMedia } from "@mui/material";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  const ProjectDialog = () => {
    
  };

  return (
    <Grid container className="section pb_45 pt_45">
      {/* Title */}
      <Grid item className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="custom_tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue == "All" ? "customTabs_item_active" : "customTabs_item"
            }
          />

          {[...new Set(projects.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue == "All"
                    ? "customTabs_item_active"
                    : "customTabs_item"
                }
              ></Tab>
            )
          )}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {projects.projects.map((project) => (
            <>
              {tabValue == project.tag || tabValue == "All" ? (
                <Grid item>
                  <Grow in timeout={1000}>
                    <Card className='customCard' onClick={() => setProjectDialog(project)}>
                      <CardActionArea>
                        <CardMedia className='customCard_image' 
                        image={project.image} 
                        name={project.name}/>
                        <CardContent>
                          <Typography className='customCard_name'>{project.name}</Typography>
                          <Typography className='customCard_caption'>{project.caption}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog open={projectDialog} onClose={() => setProjectDialog(false)}>
      <DialogTitle onClose={() => setProjectDialog(false)}>
        {projectDialog.name}
        </DialogTitle>
      <img src="" alt="" />
      <DialogContent>
        {projectDialog.description}
      </DialogContent>
      <DialogActions>
        {projectDialog?.links?.map((link) => (
          <a href={link.link} target="_blank">
            {link.icon}
          </a>
        ))}
      </DialogActions>
    </Dialog>

    </Grid>
  );
};

export default Portfolio;
