import React from 'react';

import { 
    Container,
    Row,
    Col,
    Table,
    Card,
    Button,
    CardBody,
    CardFooter,
    CardTitle,
    Progress
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";
import { ProfileLeftNav } from "./../../components/Profile/ProfileLeftNav";
import { ProfileHeader } from "./../../components/Profile/ProfileHeader";
import { TrTableBorderless } from "./../../Tables/Tables/components/TrTableBorderless";

const BillingEdit = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Billing Edit"
                className="mb-5 mt-4"
            />
            { /* START Content */}
            <Row>
                <Col lg={ 12 }>
                   <ProfileHeader />
                </Col>
                <Col lg={ 3 }>
                    <ProfileLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-4">
                               <CardTitle tag="h6">
                                    Billing Edit
                               </CardTitle>
                                <span className="ml-auto align-self-start small">
                                    Fields mark as <span className="text-danger">*</span> is required.
                                </span>
                            </div>
                            <Row className="mb-4">
                                <Col sm={3} className="text-right">
                                   Your Plan
                                </Col>
                                <Col sm={9}>
                                    <div className="mb-2">
                                        <span className="text-inverse">
                                            Premium
                                        </span> - You use <strong>37%</strong> of the available space.
                                    </div>
                                    <Progress multi style={{height: "5px"}} className="mb-3">
                                        <Progress bar value="15" />
                                        <Progress bar color="success" value="30" />
                                        <Progress bar color="info" value="25" />
                                    </Progress>
                                    <dl className="row">
                                        <dt className="col-sm-4 text-right">Amount Space</dt>
                                        <dd className="col-sm-8">214,8 GB / 1,03 TB</dd>
                                        <dt className="col-sm-4 text-right">Regular Files</dt>
                                        <dd className="col-sm-8">
                                            <i className="fa fa-circle text-primary mr-2"></i>
                                            177,8 GB
                                        </dd>
                                        <dt className="col-sm-4 text-right">Shared Files</dt>
                                        <dd className="col-sm-8">
                                            <i className="fa fa-circle text-success mr-2"></i>
                                            37 GB
                                        </dd>
                                        <dt className="col-sm-4 text-right">Available Files</dt>
                                        <dd className="col-sm-8">
                                            <i className="fa fa-circle text-info mr-2"></i>
                                            177,8 GB
                                        </dd>
                                        <dt className="col-sm-4 text-right">Action</dt>
                                        <dd className="col-sm-8">
                                            <Button color="secondary" size="sm">
                                                Change Plan
                                            </Button>
                                        </dd>
                                    </dl>
                                </Col>
                            </Row>
                            <div className="mb-4">
                                <span className="small">Payment</span>
                            </div>
                            <Row>
                                <Col sm={3} className="text-right">
                                   Payment Method
                                </Col>
                                <Col sm={9}>
                                    <div className="mb-2">
                                        <i className="fa fa-fw fa-paypal text-primary mr-2"></i>
                                        <span className="text-inverse">
                                            PayPal
                                        </span> - Account: <samp>Tyshawn_Lakin56@gmail.com</samp>
                                    </div>
                                    <dl className="row">
                                        <dt className="col-sm-4 text-right">Next Payment Due</dt>
                                        <dd className="col-sm-8">2016-05-21</dd>
                                        <dt className="col-sm-4 text-right">Amount</dt>
                                        <dd className="col-sm-8">$ 13.00</dd>
                                        <dt className="col-sm-4 text-right">Action</dt>
                                        <dd className="col-sm-8">
                                            <Button color="secondary" size="sm">
                                                Change Payment
                                            </Button>
                                        </dd>
                                    </dl>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter className="small">
                            <i className="fa fa-fw fa-support text-muted mr-2"></i>
                             If you want to personalize the notification settings, go <a href="#">here</a>
                        </CardFooter>
                    </Card>
                    <Card className="mb-3">
                        <CardBody>
                           <CardTitle tag="h6" className="mb-0">
                                Billing History
                           </CardTitle>
                        </CardBody>
                        { /* START Table */}
                        <Table className="mb-0" hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Description</th>
                                    <th>Payment Method</th>
                                    <th className="text-right">
                                        Receipt
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <TrTableBorderless />
                            </tbody>
                        </Table>
                        { /* END Table */}
                    </Card>
                </Col>
            </Row>
            { /* END Content */}
        </Container>
    </React.Fragment>
);

export default BillingEdit;