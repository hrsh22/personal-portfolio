import { useState, useEffect } from "react";
import {Container, Row, Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleteing, setIsDeleteing] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random()*100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();

        },delta)

        return () => {
            clearInterval(ticker);
        }
    }, [text])

    const tick = () => {
        let i = loopNum%toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleteing ? fullText.substring(0, fullText.length-1) : fullText.substring(0, text.length+1);

        setText(updatedText);

        if(isDeleteing){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleteing && updatedText === fullText){
            setIsDeleteing(true);
            setDelta(period)     
        } else if(isDeleteing && updatedText === ''){
            setIsDeleteing(false);
            setDelta(500);
            setLoopNum(loopNum+1);
        }
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row classname="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Harsh Gupta `}<span className="wrap">{text}</span></h1>
                        <p>{`I'm a web developer with a passion for building beautiful and functional websites. I'm currently working as a freelancer.`}</p>
                        <button onClick={()=>console.log('connect')}>Let's connect <ArrowRightCircle size={25}></ArrowRightCircle> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>         
    )
    }