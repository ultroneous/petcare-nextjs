import { Col, Container, Nav, Row, Navbar } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import styles from "@/styles/components/navBar.module.css";

const NavBar = () => {
  return (
    <Container fluid className={styles.contFluid}>
      <Navbar collapseOnSelect expand="lg" className={styles.Nav}>
        <Row className={styles.Navrow}>
          <Col xl={3} xs={12} className={styles.Brandname}>
            <Navbar.Brand href="#">Petcare.</Navbar.Brand>
          </Col>
          <Col xl={6} xs={6} className={styles.centerCol}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className={styles.Centermenu}
            >
              <Nav>
                <Nav.Link href="#" className={styles.navLink}>
                  Home
                </Nav.Link>
                <Nav.Link href="#" className={styles.navLink}>
                  Services
                </Nav.Link>
                <Nav.Link href="#" className={styles.navLink}>
                  Training
                </Nav.Link>
                <Nav.Link href="#" className={styles.navLink}>
                  Medicare
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col xl={3} xs={6} className={styles.Signupcol}>
            <Nav className={styles.Signup}>
              <Nav.Link href="/Signup" style={{ color: "#D47C88" }}>
                Signup <FaLongArrowAltRight />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Navbar>
    </Container>
  );
};

export default NavBar;
