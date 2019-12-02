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
    
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos, i) => {
        
        return(
          <Producto
          key = {i}
          titulo = {listaProductos.titulo}
          imagen = {listaProductos.imagen}
          descripcion = {listaProductos.descripcion}
          precio = {listaProductos.precio}
          stock = {parseInt(listaProductos.stock)}

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