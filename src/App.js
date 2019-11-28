import React from 'react';
import Producto from './Componentes/Producto';
import './App.css';
import {listaProductos} from "./listaProductos.json";
import {CardImg, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Row } from 'reactstrap';
import Navegacion from "./Componentes/Navegacion";

console.log(listaProductos);

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      listaProductos
    };
  }
  render(){
    // inicio de problemas
    const arregloCarrito = this.state.listaCarrito.map(
      (listaCarrito, i) => {
        return(
          <tr>
            <td>{(i += 1)}</td>
            <td>{listaCarrito.titulo}</td>
            <td>{listaCarrito.precio}</td>
          </tr>
        );
      }
    )

       // fin de problema
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos, i) => {
        
        return(
          <Producto
          key = {i}
          titulo = {listaProductos.titulo}
          imagen = {listaProductos.imagen}
          descripcion = {listaProductos.descripcion}
          precio = {listaProductos.precio}
          stock = {listaProductos.stock}

          />
        )

      }
    );
    return (
      <Container>
        <Navegacion titulo= "Feral insumos de Impresion"/>
        <Row>
        
          {arregloComponentes}

        </Row>  
          
      </Container>
    );
  }  
    
}

export default App;