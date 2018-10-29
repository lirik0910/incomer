import React from 'react';
import faker from 'faker';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { 
    Card,
    CardBody,
    Badge,
    Avatar,
    Media,
    CustomInput,
    CardFooter,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from './../../../components';

import { randomArray, randomAvatar } from './../../../utilities';

const badgesColors = [
    "primary",
    "secondary",
    "info",
    "danger",
    "success",
    "warning"
];

const TasksCardGrid = (props) => (
    <React.Fragment>
        { /* START Card */}
        <Card>
            <CardBody>
                <UncontrolledButtonDropdown>
                    <DropdownToggle color="link" caret size="sm" className="mb-2">
                        <i className="fa fa-circle text-success mr-2"></i>
                        Small 
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Select Priority</DropdownItem>
                        <DropdownItem>
                            <i className="fa fa-circle text-danger mr-2"></i>
                            Big 
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fa fa-circle text-warning mr-2"></i>
                            High 
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fa fa-circle text-primary mr-2"></i>
                            Normal 
                        </DropdownItem>
                        <DropdownItem active>
                            <i className="fa fa-circle text-success mr-2"></i>
                            Small 
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
                <Media className="mb-2">
                    <Media left middle className="mr-2">
                        <CustomInput type="checkbox" id={`TasksCardGrid-${ props.id }` } label="" />
                    </Media>
                    <Media body>
                        <span className="mr-2">#{ faker.random.number() }</span>
                        <Link to="/apps/task-details">
                            { faker.hacker.phrase() }
                        </Link>
                    </Media>
                </Media>
                <p className="mb-0">
                    { faker.lorem.sentence() }
                </p>
            </CardBody>
            <CardFooter className="d-flex align-items-center">
                <Badge pill color={ randomArray(badgesColors) } className="mr-1">
                    { faker.commerce.department() }
                </Badge>
                <Badge pill color={ randomArray(badgesColors) } className="mr-1">
                    { faker.commerce.department() }
                </Badge>
            </CardFooter>
            <CardFooter>
                <Avatar.Image
                    size="md"
                    src={ randomAvatar() }
                    className="mr-2"
                />
                <Avatar.Image
                    size="md"
                    src={ randomAvatar() }
                    className="mr-2"
                />
                <Avatar.Image
                    size="md"
                    src={ randomAvatar() }
                    className="mr-2"
                />
            </CardFooter>
            <CardFooter className="d-flex">
                <span className="align-self-center">
                    20 Sep, Fri, 2018
                </span>
                <UncontrolledButtonDropdown className="align-self-center ml-auto">
                    <DropdownToggle color="link" caret size="sm">
                        <i className="fa fa-gear"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <i className="fa fa-fw fa-folder-open mr-2"></i>
                            View
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fa fa-fw fa-ticket mr-2"></i>
                            Add Task
                        </DropdownItem>
                        <DropdownItem>
                            <i className="fa fa-fw fa-paperclip mr-2"></i>
                            Add Files
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            <i className="fa fa-fw fa-trash mr-2"></i>
                            Delete
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </CardFooter>
        </Card>
        { /* END Card */}
    </React.Fragment>
)

TasksCardGrid.propTypes = {
    id: PropTypes.node
};
TasksCardGrid.defaultProps = {
    id: "1"
};

export { TasksCardGrid };
