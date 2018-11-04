import React from 'react';
import faker from 'faker';
import { Link } from 'react-router-dom';
import {
    Container,
    Row,
    Card,
    CardBody,
    Badge,
    Table,
    CardTitle,
    Button,
    InputGroup,
    InputGroupAddon,
    Input,
    ListGroup,
    ListGroupItem,
    Media,
    Col
} from './../../../components';
import { setupPage } from './../../../components/Layout/setupPage';

import { HeaderMain } from "../../components/HeaderMain";

const Statistics = () => (
    <Container>
        <Row className="mb-5">
            <Col lg={ 12 }>
                <HeaderMain 
                    title="Прототипы"
                    className="mb-4 mb-lg-5"
                />
                <p>
                    { faker.lorem.paragraph() }
                </p>
            </Col>
        </Row>
        <Row>

        </Row>
    </Container>
);

export default setupPage({
    pageTitle: 'Прототипы'
})(Statistics);
