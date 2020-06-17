import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbotron {
        background-color: black;
        background-size: cover;
        color: #ccc;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Box = () => (
    <Styles>
        <Jumbotron fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome</h1>
                <p>Learn to code from YouTube videos</p>
            </Container>
        </Jumbotron>
    </Styles>
)