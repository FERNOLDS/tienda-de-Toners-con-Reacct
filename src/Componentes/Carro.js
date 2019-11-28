import React from "react";
import {Popover, PopoverHeader, Table, PopoverBody, Badge, Button} from "reactstrap";
import {listaCarrito} from "../listaCarrito";

class Carro extends React.Component{

    constructor(props){
        super();
        this.state = {
            popoverOpen : false.
            listaCarrito
        };
        this.toggle = this.toggle.bind(this);
       
    }

    toggle(){
        this.setState(prevState =>({
            popoverOpen: !prevState.popoverOpen

        }));

    }

        render(){
            //problemas aquiiiiiiiiiiiiiiiiiii
            const arregloCarrito = this.state.listaCarrito.map(
                (listaCarrito, i) => {
                    return(
                        <tr>
                            <td>{(i += 1)}</td>
                            <td>{listaCarrito.titulo}</td>
                            <td>{listaCarrito.titulo}</td>
                        </tr>
                    );
                }
             )
             // fin de problemaaaaaaaaaaaaaa
            return(
                <div>
                    <Button id = "Popover1" color = "info">
                        <span className = "material-icons">shopping_cart </span>
                        <Badge color = "secondary">{arregloCarrito.lenght}</Badge>
                    
                    </Button>
                    <Popover target = "Popover1" placement = "bottom" isOpen= {this.state.popoverOpen} toggle={this.toggle}>
                        <PopoverHeader>Listado de compras</PopoverHeader>
                        <PopoverBody>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Producto</th>
                                        <th>Precio</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {arregloCarrito}


                                </tbody>

                            </Table>

                        </PopoverBody>x

                    </Popover>


                </div>

            );
        }
}

export default Carro;
