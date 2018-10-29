import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Tools,
    UncontrolledDropdown,
    DropdownToggle,
    UncontrolledTooltip
} from './../../../components';

import { SwitchVersion } from '../Dropdowns/SwitchVersion';

const SidebarTopB = () => (
    <React.Fragment>
        { /* START Sidebar TOP: B */ }
            { /* START DESKTOP View */ }
            <Tools.DefaultOnly>
                <div className="d-flex">
                    <Link to="/" className="align-self-center" id="tooltipBackToHome">
                        <i className="fa fa-bandcamp fa-fw fa-2x text-primary"></i>
                    </Link>
                    <UncontrolledTooltip placement="right" target="tooltipBackToHome">
                        Back to Home
                    </UncontrolledTooltip>
                    <UncontrolledDropdown>
                        { /* START "SPIN" Logo (Sidebar Version) */ }
                        <DropdownToggle color="link" className="btn-switch-version">
                            <div className="h5 fw-900 sidebar-logo mb-1 text-left">spin <i className="fa fa-angle-down ml-1"></i>
                            </div>
                            <div className="job-title small text-left text-muted">
                                Version: React, 2.0.0
                            </div>
                        </DropdownToggle>
                        { /* END "SPIN" Logo (Sidebar Version) */ }
                        <SwitchVersion />
                    </UncontrolledDropdown>
                </div>
            </Tools.DefaultOnly>
            { /* END DESKTOP View */ }
            { /* START SLIM Only View */ }
            <Tools.SlimOnly>
                <div className="d-flex justify-content-center">
                    <Link to="/">
                        <i className="fa fa-bandcamp fa-2x fa-fw text-primary" id="tooltipBackToHomeSlim"></i>
                    </Link>
                    <UncontrolledTooltip placement="right" target="tooltipBackToHomeSlim">
                        Back to Home
                    </UncontrolledTooltip>
                </div>
            </Tools.SlimOnly>
            { /* END SLIM Only View  */ }
        { /* END Sidebar TOP: B */ }
    </React.Fragment>
)

export { SidebarTopB };
