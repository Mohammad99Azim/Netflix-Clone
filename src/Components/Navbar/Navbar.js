import { Navbar,Container , Nav} from 'react-bootstrap';

export default function Navbarr(){
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Netflix Clone</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/" >Home</Nav.Link>
                    <Nav.Link href="/favorite-list">Favourite</Nav.Link>
                    <Nav.Link href="#">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        </>
    )
}