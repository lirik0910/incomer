import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Home"
            to='/'
        />
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-plug"></i>}
            title="Nested Routes"
        >
            <SidebarMenu.Item
                to="/nested-routes/single-static"
                title="Single Static"
            />
            <SidebarMenu.Item
                title="Nested Async"
            >
                <SidebarMenu.Item
                    to="/nested-routes/nested-async/first-async"
                    title="First Async"
                />
                <SidebarMenu.Item
                    to="/nested-routes/nested-async/second-async"
                    title="Second Async"
                />
            </SidebarMenu.Item>
        </SidebarMenu.Item>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-bookmark-o"></i>}
            title="Docs"
            href='http://webkom.gitbook.io/spin/'
        />
    </SidebarMenu >
);
