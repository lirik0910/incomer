import React from 'react';

import { 
    Badge, 
} from './../../../components';

import { 
    DropdownMenu,
    DropdownItem
} from './../../../components';

const SwitchVersion = () => (
    <React.Fragment>
        <DropdownMenu>
            <DropdownItem header>
                SPIN Versions:
            </DropdownItem>
            <DropdownItem href="javascript:;" className="d-flex" disabled>
                <span>
                    Jquery 2.0
                    <br />
                    <span className="small">
                        Ready in <strong>70%</strong>
                    </span>
                </span>
                <i className="fa fa-fw ml-auto align-self-center pl-2" />
            </DropdownItem>
            <DropdownItem href="http://v2.react.spin.webkom.co" active className="d-flex">
                <span>
                    React 2.0 <Badge color="primary" pill className="ml-1">Latest</Badge>
                    <br />
                    <span className="small">
                        Bootstrap 4, React 16, NPM
                    </span>
                </span>
                <i className="fa fa-fw fa-check ml-auto align-self-center pl-4" />
            </DropdownItem>
            <DropdownItem href="javascript:;" className="d-flex" disabled>
                <span>
                    Angular 1.0
                    <br />
                    <span className="small">
                        Ready in <strong>30%</strong>
                    </span>
                </span>
                <i className="fa fa-fw ml-auto align-self-center pl-2" />
            </DropdownItem>
            <DropdownItem href="javascript:;" className="d-flex" disabled>
                <span>
                    Vue 1.0.0
                    <br />
                    <span className="small">
                        Ready in <strong>10%</strong>
                    </span>
                </span>
                <i className="fa fa-fw ml-auto align-self-center pl-2" />
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem header>
                Older Versions:
            </DropdownItem>
            <DropdownItem href="http://v1.react.spin.webkom.co" className="d-flex">
                <span>
                    React 1.0 <Badge color="secondary" pill className="ml-1">Deprecated</Badge>
                    <br />
                    <span className="small">
                        Bootstrap 3, React 15, NPM
                    </span>
                </span>
                <i className="fa fa-fw ml-auto align-self-center pl-4" />
            </DropdownItem>
            <DropdownItem href="http://v1.spin.webkom.co" className="d-flex">
                <span>
                    JQuery 1.0
                    <br />
                    <span className="small">
                        Bootstrap 3
                    </span>
                </span>
                <i className="fa fa-fw ml-auto align-self-center pl-4" />
            </DropdownItem>
        </DropdownMenu>
    </React.Fragment>
)

export { SwitchVersion };
