import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import TrackVisibility from "react-on-screen"
import { isVisible } from "@testing-library/user-event/dist/utils"
import "animate.css"

export const Projects = ({ onOpenPopup }) => {

    const projects = [
        {
            title: "Customs Declaration Management Systems",
            description: "Design & Development",
            imgUrl: projImg1,
            popupContent: "Frontend & Backend Project",
            Details: "Systems for logistics companies such as Amerasian Shipping Logistics (ASL) and WR1 NVOCC.",
        },
        {
            title: "Customer Relationship Management",
            description: "Design & Development",
            imgUrl: projImg2,
            popupContent: "Frontend Project",
            Details: "Software for Pudong Prime International Co Ltd. to manage their customer base..",
        },
        {
            title: "Movie Website",
            description: "Design & Development",
            imgUrl: projImg3,
            popupContent: "Fullstack Project",
            Details: "Responsive movie streaming website.",
        },
        {
            title: "Forecast Application",
            description: "Design & Development",
            imgUrl: projImg1,
            popupContent: "Fullstack Project",
            Details: "Systems for logistics companies such as Amerasian Shipping Logistics (ASL) and WR1 NVOCC.",
        },
        {
            title: "Personal Portfolio Website",
            description: "Design & Development",
            imgUrl: projImg2,
            popupContent: "Frontend Project",
            Details: "Getting temperature, max, min, humidity, real feel, sunrise, sunset, hourly, and daily forecast. We will also display the local time at the selected location.",
        },
    ]

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <h2>Projects</h2>
                                    <p>Here are a few projects I've worked on recently.</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" disabled>Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" disabled>
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        title={project.title}
                                                        description={project.description}
                                                        imgUrl={project.imgUrl}
                                                        onButtonClick={() => onOpenPopup(project.popupContent, project.Details)}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}