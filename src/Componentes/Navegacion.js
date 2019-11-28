import React from "react";
import {Navbar, NavItem, NavLink, NavbarBrand, Nav} from "reactstrap";
import Carro from "./Carro";

class Navegacion extends React.Component {
    render(){
        return(
            <Navbar color = "light" light expand = "md">
                <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                <Nav className = "ml-auto" navbar>
                    <NavItem>
                        <NavLink href = "/">Inicio </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href = "/">Carrito </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href = "/">Nosotros </NavLink>
                    </NavItem>
                    <NavItem>
                        <Carro/>
                    </NavItem>

                </Nav>

            </Navbar>

        );
    }

}
export default Navegacion;

