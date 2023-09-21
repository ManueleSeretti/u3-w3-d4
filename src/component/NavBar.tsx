import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Spaceflight </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="me-auto">
          <Link to={"/"}>
            {" "}
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>

          <Nav.Link href="#">Contatti</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
