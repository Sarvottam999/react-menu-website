
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
 import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
 import Menu from './MenuComponent';
 import Home from './home';
 import { COMMENTS } from '../shared/comment';
 import { PROMOTIONS } from '../shared/promotion';
 import { LEADERS } from '../shared/leaders';
 
 import {
   BrowserRouter,
   Routes,
   Route,
   Link,
 } from "react-router-dom";
 import Contact from './contact';



class Main extends Component {
   
   constructor(props) {
      super(props);
      
      this.state = {
        dishes: DISHES,
         selectedDish: null
      }
   }
 
   onDishSelect(dish) {
    console.log(" in dish select ", dish);

      this.setState({ selectedDish: dish});
   }
    
   render() {   
    console.log("in main  render ");
      

      return (
        <div>
<Header/>
<Routes>

        <Route exact path="/" element={<Home />} /> 
        <Route path="/menu*" element={<Menu dishes ={this.state.dishes} onClick = {(dish ) => this.onDishSelect(dish )}/>} />
        <Route path="/dishdetail" element={<Dishdetail   selectedDish= {this.state.selectedDish}/>} />
        <Route exact path='/contact' element={<Contact/>}  />
</Routes>
            
<Footer />

            
                
                

        </div>
      );
   }
}

export default Main;