import React from "react";

import {Modal, ModalHeader, ModalFooter, ModalBody, Container, Button, CardImg } from "reactstrap";
import "./FichaProducto.css";
import {listaCarrito} from "../listaCarrito.json";
import {listaProductos} from "../listaProductos.json";



class FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state = {
            modal : false,
            listaCarrito,
            
            stock:this.props.props.stock
           
        };
        this.toggle = this.toggle.bind(this);
       this.agregarCarrito = this.agregarCarrito.bind(this);
    } 
    // cuentas(){
    //     this.setState(prevState =>({
    //         stock:this.props.props.stock
    //     }));
    // }

    toggle(){
        this.setState(prevState =>({
<<<<<<< Updated upstream
            modal: !prevState.modal,
            stock:this.props.props.stock
=======
            modal: !prevState.modal
           
            // azul:this.props.props.stock,
            // pan:this.state.azul,
            // verde:this.state.papas
            // stocks:valor
>>>>>>> Stashed changes

        }));
        // 
        // this.setState({
        //     stock:this.props.props.stock
        // })
        //    
    }
 
    agregarCarrito(){ 

        // var cebolla = this.state.pan - 1
        const stock = this.state.listaProductos.map(
        (listaProductos) => {
            return(
                stock= this.state.stock -1
            );
        }
     );
        listaCarrito.push({
            "titulo" : this.props.props.titulo,
            "precio" : this.props.props.precio
        });        
        // let valor = listaProductos.stock-=1;
        this.setState(prevState => ({
            modal : !prevState.modal,
            // stocks:valor         
            // stock:this.props.props.stock 
            // papas:cebolla
        }
        ))
    }
   

    render(){
        
        return(
            <Container>
                <Button onClick = {this.toggle}>Ver Ficha</Button>
                <Modal isOpen = {this.state.modal}>
                    Este es el mejor Toner en el mundo Papá
                      
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}/>
                        <p>El detalle del producto seleccionado es el siguiente: </p>
                        {this.props.props.descripcion}
                        <p>El precio del producto es <b>{this.props.props.precio}</b> pesos.</p>
                        <p>Hay <b>{this.state.stock}</b> unidades de este producto.</p>
                


                    </ModalBody>
                    <ModalFooter className = "modalfooter">
                        
                        <Button color = "secondary" onClick={this.toggle}>Volver atras</Button>
                        <Button color = "success" onClick={this.agregarCarrito}>Agregar al carrito</Button>



                    </ModalFooter>

                </Modal>
            </Container>
            

        );
    }
}
export default FichaProducto;


