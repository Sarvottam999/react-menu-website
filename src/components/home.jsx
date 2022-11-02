import React from 'react';
import logo from './shivaji.jpg';
import logo2 from '../images/shivaji2.jpeg';
import logo3 from '../images/shivaji3.jpeg';
// import logo4 from './';
 

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}) {
console.log(logo)
    return(
        <Card>
            <CardImg src={item }  />
            <CardBody>
            <CardTitle>वीर छत्रपति शिवाजी</CardTitle>
             <CardSubtitle> </CardSubtitle> 
            <CardText> निडर पराक्रमी वीर शिवाजी छत्रपति सम्राट हुए
झुके नहीं कहीं वीर सिंह व्यक्तित्व विराट लिये रणधीर पराक्रमी महायोद्धा महासमर में लड़ते थे
छापामार युद्ध प्रणाली नित्य कीर्तिमान गढ़ते थे</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {

    // const logo = require('./shivaji1.jpg');
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={logo} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={logo2} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={logo3} />
                </div>
            </div>
        </div>
    );
}

export default Home;