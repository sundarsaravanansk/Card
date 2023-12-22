import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './ImageSlider.css';
const ImageSlider = () => {
    return (
      <Container fluid>
        <Row className='justify-content-center align-item-center'>
            <Col lg={18}>
            <Carousel>
      <Carousel.Item>
        <img src='./image/banner/vegtable.jpg'  className='slide'/>
 
      </Carousel.Item>
      <Carousel.Item>
       <img src='./image/banner/dairy.jpg' className='slide'/>

      </Carousel.Item>
      <Carousel.Item>
       <img src='./image/banner/fruits.jpg'  className='slide'/>

      </Carousel.Item>
      <Carousel.Item>
       <img src='./image/banner/orange.jpg'  className='slide'/>
    </Carousel.Item>
    </Carousel> 
            </Col>
        </Row>
      </Container>
    );
}

export default ImageSlider;

