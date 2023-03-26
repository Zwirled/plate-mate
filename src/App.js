import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Saved from './pages/Saved';
import ShoppingList from './pages/ShoppingList';
import Header from './components/Header';
import Footer from './components/Footer'
import useLocalStorage from './components/LocalStorage';

function App() {
  const Recipe = [{
    name: 'Test Frangipan Tart',
    MealImg:'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
    ingredient: ['digestive biscuits', 'Bramlet apples', 'caster sugar', 'eggs', 'butter'],
    measurement: {'digestive biscuits': '175g', 
                  'Bramlet apples':'200g',
                  'caster sugar': '75g',
                  'eggs': '2',
                  'butter':'75g'},
    instruction: 'Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter.'         
                }];
 
    const [storedRecipe] = useLocalStorage("Recipe", Recipe);
    console.log(storedRecipe);
  return (
    <Router basename="/">
      <div>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} end={true} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
