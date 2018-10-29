import React from 'react';
import { Link } from 'react-router-dom';

import { 
    InputGroup,
    InputGroupAddon,
    Button,
    Input
} from './../../../components';

const ChatCardFooter = () => (
    <React.Fragment>
        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <Button color="secondary">
                    <i className="fa fa fa-fw fa-paperclip"></i>
                </Button>
            </InputGroupAddon>
            <Input placeholder="Your message..." />
            <InputGroupAddon addonType="append">
                <Button color="primary" tag={ Link } to="/apps/chat">
                    <i className="fa fa-fw fa-send"></i>
                </Button>
            </InputGroupAddon>
        </InputGroup>
    </React.Fragment>
)

export { ChatCardFooter };
