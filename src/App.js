import React from 'react';
import { Container, Grid} from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';



function App() {
  return (
    <Container>
      <Grid container>
        < Grid item xs={12} sm={12} lg={3} md={4}style={{backgroundColor:'red'}} >
        
        <Profile/>

       

          </Grid> 
          < Grid item xs style={{backgroundColor:'blue'}} >
        < Header/>
        <Router>
          <Routes>
          <Route  path='/portfolio'>
          <Portfolio/>
            </Route>
        <Route path='/resume'>
        <Resume/>
        </Route>
        </Routes>
          
          
       
        </Router>
        
        <Footer/>

          
          </Grid> 

      </Grid>
    </Container>
  );
}

export default App;
