import React from "react";
import "./App.css";
import { Container, Grid } from "@mui/material";

import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";
import Contact from "./Pages/Contact/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
        <Router>
          <Header />
            <div className="main_content container_shadow">
              <Routes>
                <Route path="/portfolio" element={<Portfolio />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/portfolio-homepage" element={<Resume />}></Route>
              </Routes>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
