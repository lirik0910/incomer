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
    DropdownMenu,
    DropdownItem,
    UncontrolledButtonDropdown,
    DropdownToggle,
    InputGroup,
    InputGroupAddon,
    Pagination,
    PaginationItem,
    PaginationLink,
    Input,
    ListGroup,
    ListGroupItem,
    Media,
    Col
} from './../../../components';
import { setupPage } from './../../../components/Layout/setupPage';

import { HeaderMain } from "../../components/HeaderMain";
import {TrTableBordered} from "../../Tables/Tables/components/TrTableBordered";
import CustomInput from "../../../components/CustomInput";

const News = () => (
    <Container>
        <Row className="mb-2">
            <Col lg={2}>
                <CustomInput
                    type="select"
                    name="statusFilter"
                    id="statusType"
                >
                    <option value="#">По статусу</option>
                    <option>Неопубликован</option>
                    <option>Опубликован</option>
                </CustomInput>
            </Col>
            <Col lg={4}>
                <CustomInput
                    type="select"
                    name="statusFilter"
                    id="statusType"
                >
                    <option value="#">По статусу</option>
                    <option>Неопубликован</option>
                    <option>Опубликован</option>
                </CustomInput>
            </Col>
            <Col lg={3}>
                <Input
                    type="text"
                    name="tagFilter"
                    id="tagType"
                    placeholder="По тэгам..."
                />
            </Col>
            <Col lg={3}>
                <CustomInput
                    type="select"
                    name="statusFilter"
                    id="statusType"
                >
                    <option value="#">По автору</option>
                    <option>Иван Иванов</option>
                    <option>Алексей Константинов</option>
                    <option>Кирил Мажоров</option>
                </CustomInput>
            </Col>
        </Row>
        <Row className="mb-3">
            <Col lg={4}>
                <Input
                    type="text"
                    name="textFilter"
                    id="textSearch"
                    placeholder="Поиск..."
                />
            </Col>
            <Col lg={1}>
                <CustomInput
                    type="select"
                    name="countView"
                    id="countView"
                >
                    <option value="#">10</option>
                    <option>25</option>
                    <option>50</option>
                </CustomInput>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
                <Table className="mb-0" bordered responsive>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Заголовок</th>
                        <th>Автор</th>
                        <th>Дата создания</th>
                        <th>Дата публикации</th>
                        <th>Просмотров</th>
                        <th>Комментариев</th>
                        <th>Статус</th>
                        <th className="text-right">
                            Действия
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <TrTableBordered />
                    </tbody>
                </Table>
            </Col>
        </Row>
        <Row className="my-3">
            <Col lg={8}>
            </Col>
            <Col lg={4}>
                <Pagination aria-label="Page navigation example" className="float-right">
                    <PaginationItem>
                        <PaginationLink previous href="#">
                            <i className="fa fa-fw fa-caret-left"></i>
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                        <PaginationLink href="#">
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationLink next href="#">
                        <i className="fa fa-fw fa-caret-right"></i>
                    </PaginationLink>
                </Pagination>
            </Col>
        </Row>
    </Container>
);

export default setupPage({
    pageTitle: 'Новости'
})(News);
