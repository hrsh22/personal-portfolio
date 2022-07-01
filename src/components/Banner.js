import {Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    return(
        <section className="banner" id="home">
            <Container>
                <Row classname="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Harsh Gupta`}<span className="wrap">web developer</span></h1>
                        <p>{`I'm a web developer with a passion for building beautiful and functional websites. I'm currently working as a freelancer.`}</p>
                        <button onClick={()=>console.log('connect')}>Let's connect <ArrowRightCircle size={24}></ArrowRightCircle> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>         
    )
    }