import React from "react";
import "./App.css";
import { Container, Grid } from "@mui/material";

import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <Profile />
        </Grid>
        <Grid item lg={9} md={9} sm={12} xs={12}>
          <Header />
          <Router>
            <Routes>
              <Route path="/portfolio" element={<Portfolio />}></Route>
              <Route path="/" element={<Resume />}></Route>
            </Routes>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
