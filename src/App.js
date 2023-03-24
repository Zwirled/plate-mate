import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Saved from './pages/Saved';
import ShoppingList from './pages/ShoppingList';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Container from '@mui/material/Container';
import RecipeApi from './components/RecipeApi';
import Footer from './components/Footer'

function App() {
  return (
    <Router basename="/">
      <div>
        <Header />
        <Navigation />
        <RecipeApi />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} end={true} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
