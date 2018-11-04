import React from 'react';
import faker from 'faker';

import { 
    Sidebar,
    Tools,
    UncontrolledButtonDropdown,
    DropdownToggle,
    UncontrolledPopover,
    PopoverBody,
    Media,
    Avatar,
    AvatarAddOn
} from './../../../components';
import { randomAvatar } from './../../../utilities';

import { DropdownProfile } from '../Dropdowns/DropdownProfile';
import { FooterAuth } from '../Pages/FooterAuth';
import { FooterText } from '../FooterText';

const SidebarBottomB = () => (
    <React.Fragment>
        { /* START Sidebar BOTTOM: B */ }
        <Sidebar.Section>
            <Tools.DefaultOnly>
                <FooterAuth />
            </Tools.DefaultOnly>
            { /* END DESKTOP View */ }
            { /* START SLIM Only View */ }
            <Tools.SlimOnly>
                <div className="text-center">
                    <i className="fa fa-fw fa-question-circle-o" id="UncontrolledSidebarPopoverFooter"></i>
                    <UncontrolledPopover placement="left-end" target="UncontrolledSidebarPopoverFooter">
                        <PopoverBody>
                            <FooterText />
                        </PopoverBody>
                    </UncontrolledPopover>
                </div>
            </Tools.SlimOnly>
            { /* END SLIM Only View */ }
        </Sidebar.Section>
        { /* END Sidebar BOTTOM: B */ }
    </React.Fragment>
)

export { SidebarBottomB };
