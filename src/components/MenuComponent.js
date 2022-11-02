import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



function MenuItem(props) {
   console.log("******************", props.dishes);


   //   const item= props.dishes.map((dish) => {
   return (
      <div className="container"   >
         <div className="row">
            {props.dishes.map((dish) => {
               return(
               <div key={dish.id} className="col-12 col-md-5 m-1">
                  <Card onClick={() => props.onClick(dish)}>
                     <CardImg width="100%" src={dish.image} alt={dish.name} />
                     <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                     </CardImgOverlay>
                  </Card>
               </div>
               )
            }
            )}
         </div>

      </div>

   )
}

//   return ( 
//    <>
//    {item}
//    </>
//    );


function Menu(props) {
   console.log("####################", props.dishes);

   return (
      <div className="container">
         <div className="row">
            <MenuItem dishes={props.dishes} onClick= {props.onClick}/>
         </div>

      </div>
   );
}


export default Menu;