import React from 'react';
import {CardImg, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Row } from 'reactstrap';
import "./Producto.css";


function Producto(props){
    return (
        <Col sm="4">
            <Card>
                <CardImg src = {props.imagen}/>
                <CardBody>
                    <CardTitle>
                        {props.titulo}
                    </CardTitle>
                    <CardSubtitle>
                        <b>Valor :</b>{props.titulo}
                    </CardSubtitle>
                    <CardText>
                        {props.descripcion}
                    </CardText>
                    <Button className = "Button"> Comprar</Button>
                    <Button className = "Button"> Ver ficha</Button>
            
                </CardBody>
           
            </Card>
                
        </Col>    
            

       


    );
}

export default Producto;
