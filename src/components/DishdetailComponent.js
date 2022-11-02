import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish(props) {

   return (
      <div className="col-12 col-md-5 m-1">
         <Card>
            <CardImg top src={props.dish.image} alt={props.dish.name} />
            <CardBody>
               <CardTitle>{props.dish.name}</CardTitle>
               <CardText>{props.dish.description}</CardText>
            </CardBody>
         </Card>
      </div>
   );
   }

 
 
function RenderComments(comments) {

       return (
         <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
               {comments.comments.map((comment) => {
                  return (
                     <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                     </li>
                  );
               })}
            </ul>
         </div>
      );
 
}

function renderDetail(props){

   if (props.selectedDish != undefined) {

      return (
         <div className="container">
            <div className="row">
               <RenderDish dish = {props.selectedDish}/ >
               <RenderComments comments ={props.selectedDish.comments} />
            </div>
         </div>
         );};}
 
    
 



export default renderDetail;