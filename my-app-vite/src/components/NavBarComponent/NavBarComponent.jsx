import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidgetComponent from '../CardWidgetComponent/CardWidgetComponent';

const NavBarComponent = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Tus Les Pepe's</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Instagram</Nav.Link>
                        <NavDropdown title="Secciones" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Niños</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Mujer
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Unisex</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Todos
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CardWidgetComponent/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;