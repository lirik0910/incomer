import React from 'react';

import {
    Sidebar,
    SidebarTrigger,
} from './../../components';

import { SidebarMiddleNav } from './SidebarMiddleNav';
import { SidebarTop } from './SidebarTop';
import { SidebarBottom } from './SidebarBottom';

export const DefaultSidebar = () => (
    <Sidebar>
        <Sidebar.Close>
            <SidebarTrigger tag={ 'a' } href="javascript:;">
                <i className="fa fa-times-circle fa-fw"></i>
            </SidebarTrigger>
        </Sidebar.Close>
        
        { /* fixed Section */}
        <SidebarTop />

        { /* scrollable on mobile */ }
        <Sidebar.MobileFluid>
            { /* scrollable on desktop */ }
            <Sidebar.Section fluid cover>
                <SidebarMiddleNav />
            </Sidebar.Section>

            <SidebarBottom />
        </Sidebar.MobileFluid>
    </Sidebar>
);
