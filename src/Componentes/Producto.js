import React from 'react';
import {CardImg, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Row } from 'reactstrap';
import "./Producto.css";
import FichaProducto from "./FichaProducto"; 
class Producto extends React.Component{
    render(){
        return (
        <Col md="6">
            <Card className = "Card" body outline color = "primary" >
                <CardImg src = {this.props.imagen}/>
                <CardBody>
                    <CardTitle>
                        {this.props.titulo}
                    </CardTitle>
                    <CardSubtitle>
                        <b>Valor :</b>{this.props.titulo}
                    </CardSubtitle>
                    <CardText>
                        {this.props.descripcion}
                    </CardText>
                    <FichaProducto props = {this.props}/>
                    
                    
            
                </CardBody>
           
            </Card>
                
        </Col>  
        );  
    }
        
            

       
   

    
}

export default Producto;
