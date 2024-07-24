import { Col, Container, Row } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import logo from '../assets/img/JIMMY LE.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/lehoangchoco/"><img src={navIcon1}/></a>
                            <a href="https://www.facebook.com/profile.php?id=100005293694345"><img src={navIcon2}/></a>
                            <a href="https://www.instagram.com/?hl=en"><img src={navIcon3}/></a>
                        </div>
                        <p>Copyright 2022 &copy; Jimmy Le</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}