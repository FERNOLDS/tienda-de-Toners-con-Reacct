import React from "react";

import {Modal, ModalHeader, ModalFooter, ModalBody, Container, Button, CardImg } from "reactstrap";
import "./FichaProducto.css";
import {listaCarrito} from '../listaCarrito.json';



class FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state = {
            modal : false,
            listaCarrito
        };
        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }

    toggle(){
        this.setState(prevState =>({
            modal: !prevState.modal

        }));

    }
    agregarCarrito(){
        listaCarrito.push({
            "titulo" : this.props.props.titulo,
            "precio" : this.props.props.precio
        });
        this.setState(prevState => ({
            modal : !prevState.modal
        }

        ))

<<<<<<< HEAD
        
    }
    contador = 2
   
    // contador(){
        //  var contar = 0;
        // for( i < listaCarrito.length ){
            // contar += 1;
        // };
            
                
                
            

        
    // }
=======
    }
>>>>>>> parent of 916d3a1... mas cambios con el carrito

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
                        <p>Hay <b>{this.props.props.stock}</b> unidades de este producto.</p>
                


                    </ModalBody>
                    <ModalFooter className = "modalfooter">
                        <Button color = "primary" onClick={this.toggle}>Quiero Comprarlo</Button>
                        <Button color = "secondary" onClick={this.toggle}>Volver atras</Button>
                        <Button color = "primary" onClick={this.agregarCarrito}>Agregar al carrito</Button>



                    </ModalFooter>

                </Modal>
            </Container>
            

        );
    }
}
export default FichaProducto;


