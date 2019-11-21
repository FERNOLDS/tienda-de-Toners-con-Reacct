import React from "react";

import {Modal, ModalHeader, ModalFooter, ModalBody, Container, Button, CardImg } from "reactstrap";
import "./FichaProducto.css";



class FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state = {
            modal : false
        };
        this.toggle = this.toggle.bind(this);
        console.log(props.props);
    }

    toggle(){
        this.setState(prevState =>({
            modal: !prevState.modal

        }));

    }

    render(){
        return(
            <Container>
                <Button onClick = {this.toggle}>Ver Ficha</Button>
                <Modal isOpen = {this.state.modal}>
                    Este es el mejor Toner en el mundo Papá
                    mas hielo para la piscola se llena y sube sola  
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}/>
                        <p>El detalle del producto seleccionado es el siguiente: </p>
                        {this.props.props.descripcion}
                        <p>El precio del producto es <b>{this.props.props.precio}</b> pesos.</p>

                    </ModalBody>
                    <ModalFooter className = "modalfooter">
                        <Button color = "primary" onClick={this.toggle}>Quiero Comprarlo</Button>
                        <Button color = "secondary" onClick={this.toggle}>Volver atras</Button>



                    </ModalFooter>

                </Modal>
            </Container>
            

        );
    }
}
export default FichaProducto;


