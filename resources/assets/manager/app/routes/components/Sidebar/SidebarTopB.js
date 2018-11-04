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
                        <div>
                            <i className="fa fa-bandcamp fa-fw fa-2x text-primary"></i>
                            Incomer
                        </div>
                    </Link>
                    <UncontrolledTooltip placement="right" target="tooltipBackToHome">
                        Back to Home
                    </UncontrolledTooltip>
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
