import React from 'react';
import {
    Sidebar,
    Tools,
    UncontrolledTooltip
} from './../../components';
import { Link } from 'react-router-dom';

export const SidebarTop = () => (
    <Sidebar.Section>
        { /* START DESKTOP View */ }
        <Tools.DefaultOnly>
            <div className="d-flex">
                <Link to="/" className="align-self-center" id="tooltipBackToHome">
                    <i className="fa fa-bandcamp fa-fw fa-2x text-primary"></i>
                </Link>
                <UncontrolledTooltip placement="right" target="tooltipBackToHome">
                    Back to Home
                </UncontrolledTooltip>
                <div className="px-3 py-2">
                    <div className="h5 fw-900 sidebar-logo mb-1 text-left">
                        spin
                    </div>
                    <div className="job-title small text-left text-muted">
                        Version: React 2.0.0
                    </div>
                </div>
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
    </Sidebar.Section>
);
