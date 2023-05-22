import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://udeponline.com/moodle/pluginfile.php/1/core_admin/logo/0x150/1621974217/LOGO%20UDEP2.png"
            alt="logo"
            width="50"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Juegos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/juego/gato">Gato</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/juego/quiz">Quiz</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/juego/arkanoid">
                Arkanoid
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/juego/whac">
                Whac-a-Mole
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
