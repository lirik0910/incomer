import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';

// ----------- Pages Imports ---------------
import Login from './Pages/Login';
import News from './Pages/News';
import Prototypes from './Pages/Prototypes';
import Video from './Pages/Video';
import Library from './Pages/Library';
import Statistics from './Pages/Statistics';
import Users from './Pages/Users';
import Settings from './Pages/Settings';

import Analytics from './Dashboards/Analytics';
import ProjectsDashboard from './Dashboards/Projects';
import System from './Dashboards/System';

import Widgets from './Widgets';

import Cards from './Cards/Cards';
import CardsHeaders from './Cards/CardsHeaders';

import NavbarOnly from './Layouts/NavbarOnly';
import SidebarDefault from './Layouts/SidebarDefault';
import SidebarA from './Layouts/SidebarA';

import Accordions from './Interface/Accordions';
import Alerts from './Interface/Alerts';
import Avatars from './Interface/Avatars';
import BadgesLabels from './Interface/BadgesLabels';
import Breadcrumbs from './Interface/Breadcrumbs';
import Buttons from './Interface/Buttons';
import Colors from './Interface/Colors';
import Dropdowns from './Interface/Dropdowns';
import Images from './Interface/Images';
import ListGroups from './Interface/ListGroups';
import MediaObjects from './Interface/MediaObjects';
import Modals from './Interface/Modals';
import Navbars from './Interface/Navbars';
import Paginations from './Interface/Paginations';
import ProgressBars from './Interface/ProgressBars';
import TabsPills from './Interface/TabsPills';
import TooltipPopovers from './Interface/TooltipsPopovers';
import Typography from './Interface/Typography';

import ReCharts from './Graphs/ReCharts';

import Forms from './Forms/Forms';
import FormsLayouts from './Forms/FormsLayouts';
import InputGroups from './Forms/InputGroups';

import Tables from './Tables/Tables';

import AccountEdit from './Apps/AccountEdit';
import BillingEdit from './Apps/BillingEdit';
import Chat from './Apps/Chat';
import Clients from './Apps/Clients';
import EmailDetails from './Apps/EmailDetails';
import Files from './Apps/Files';
import GalleryGrid from './Apps/GalleryGrid';
import GalleryTable from './Apps/GalleryTable';
import ImagesResults from './Apps/ImagesResults';
import Inbox from './Apps/Inbox';
import NewEmail from './Apps/NewEmail';
import ProfileDetails from './Apps/ProfileDetails';
import ProfileEdit from './Apps/ProfileEdit';
import Projects from './Apps/Projects';
import SearchResults from './Apps/SearchResults';
import SessionsEdit from './Apps/SessionsEdit';
import SettingsEdit from './Apps/SettingsEdit';
import Tasks from './Apps/Tasks';
import TasksDetails from './Apps/TasksDetails';
import TasksKanban from './Apps/TasksKanban';
//import Users from './Apps/Users';
import UsersResults from './Apps/UsersResults';
import VideosResults from './Apps/VideosResults';

import ComingSoon from './Pages/ComingSoon';
import Confirmation from './Pages/Confirmation';
import Danger from './Pages/Danger';
import Error404 from './Pages/Error404';
import ForgotPassword from './Pages/ForgotPassword';
import LockScreen from './Pages/LockScreen';

import Register from './Pages/Register';
import Success from './Pages/Success';
import Timeline from './Pages/Timeline';

import Icons from './Icons';

// ----------- Layout Imports ---------------
import { DefaultNavbar } from './../layout/components/DefaultNavbar';
import { DefaultSidebar } from './../layout/components/DefaultSidebar';

import { SidebarANavbar } from './../layout/components/SidebarANavbar';
import { SidebarASidebar } from './../layout/components/SidebarASidebar';

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
const getRoutes = () => {
    return (
        <Switch>
            <Redirect from="/" to="/dashboards/projects" exact />

            <Route path="/login" exact component={Login} />
            <Route path="/news" exact component={News} />
            <Route path="/prototypes" exact component={Prototypes} />
            <Route path="/video" exact component={Video} />
            <Route path="/library" exact component={Library} />
            <Route path="/statistics" exact component={Statistics} />
            <Route path="/users" exact component={Users} />
            <Route path="/settings" exact component={Settings} />

            <Route path="/dashboards/analytics" exact component={Analytics} />
            <Route path="/dashboards/projects" exact component={ProjectsDashboard} />
            <Route path="/dashboards/system" exact component={System} />

            <Route path='/widgets' exact component={Widgets} />
            
            { /*    Cards Routes     */ }
            <Route path='/cards/cards' exact component={Cards} />
            <Route path='/cards/cardsheaders' exact component={CardsHeaders} />
            
            { /*    Layouts     */ }
            <Route path='/layouts/navbar-only' component={NavbarOnly} />
            <Route path='/layouts/sidebar-default' component={SidebarDefault} />
            <Route path='/layouts/sidebar-a' component={SidebarA} />

            { /*    Interface Routes   */ }
            <Route component={ Accordions } path="/interface/accordions" />
            <Route component={ Alerts } path="/interface/alerts" />
            <Route component={ Avatars } path="/interface/avatars" />
            <Route component={ BadgesLabels } path="/interface/badges-and-labels" />
            <Route component={ Breadcrumbs } path="/interface/breadcrumbs" />
            <Route component={ Buttons } path="/interface/buttons" />
            <Route component={ Colors } path="/interface/colors" />
            <Route component={ Dropdowns } path="/interface/dropdowns" />
            <Route component={ Images } path="/interface/images" />
            <Route component={ ListGroups } path="/interface/list-groups" />
            <Route component={ MediaObjects } path="/interface/media-objects" />
            <Route component={ Modals } path="/interface/modals" />
            <Route component={ Navbars } path="/interface/navbars" />
            <Route component={ Paginations } path="/interface/paginations" />
            <Route component={ ProgressBars } path="/interface/progress-bars" />
            <Route component={ TabsPills } path="/interface/tabs-pills" />
            <Route component={ TooltipPopovers } path="/interface/tooltips-and-popovers" />
            <Route component={ Typography } path="/interface/typography" />

            { /*    Forms Routes    */ }
            <Route component={ Forms } path="/forms/forms" />
            <Route component={ FormsLayouts } path="/forms/forms-layouts" />
            <Route component={ InputGroups } path="/forms/input-groups" />

            { /*    Graphs Routes   */ }
            <Route component={ ReCharts } path="/graphs/re-charts" />

            { /*    Tables Routes   */ }
            <Route component={ Tables } path="/tables/tables" />

            { /*    Apps Routes     */ }
            <Route component={ AccountEdit } path="/apps/account-edit" />
            <Route component={ BillingEdit } path="/apps/billing-edit" />
            <Route component={ Chat } path="/apps/chat" />
            <Route component={ Clients } path="/apps/clients" />
            <Route component={ EmailDetails } path="/apps/email-details" />
            <Route component={ Files } path="/apps/files/:type"/>
            <Route component={ GalleryGrid } path="/apps/gallery-grid" />
            <Route component={ GalleryTable } path="/apps/gallery-table" />
            <Route component={ ImagesResults } path="/apps/images-results" />
            <Route component={ Inbox } path="/apps/inbox" />
            <Route component={ NewEmail } path="/apps/new-email" />
            <Route component={ ProfileDetails } path="/apps/profile-details" />
            <Route component={ ProfileEdit } path="/apps/profile-edit" />
            <Route component={ Projects } path="/apps/projects/:type" />
            <Route component={ SearchResults } path="/apps/search-results" />
            <Route component={ SessionsEdit } path="/apps/sessions-edit" />
            <Route component={ SettingsEdit } path="/apps/settings-edit" />
            <Route component={ Tasks } path="/apps/tasks/:type" />
            <Route component={ TasksDetails } path="/apps/task-details" />
            <Route component={ TasksKanban } path="/apps/tasks-kanban" />
            <Route component={ Users } path="/apps/users/:type" />
            <Route component={ UsersResults } path="/apps/users-results" />
            <Route component={ VideosResults } path="/apps/videos-results" />

            { /*    Pages Routes    */ }
            <Route component={ ComingSoon } path="/pages/coming-soon" />
            <Route component={ Confirmation } path="/pages/confirmation" />
            <Route component={ Danger } path="/pages/danger" />
            <Route component={ Error404 } path="/pages/error-404" />
            <Route component={ ForgotPassword } path="/pages/forgot-password" />
            <Route component={ LockScreen } path="/pages/lock-screen" />
            <Route component={ Login } path="/pages/login" />
            <Route component={ Register } path="/pages/register" />
            <Route component={ Success } path="/pages/success" />
            <Route component={ Timeline } path="/pages/timeline" />

            <Route path='/icons' exact component={Icons} />

            { /*    404    */ }
            <Redirect to="/pages/error-404" />
        </Switch>
    );
};

//------ Custom Layout Parts --------
const getNavbars = () => (
    <Switch>
        { /* Other Navbars: */}
        {/*<Route
            component={ SidebarANavbar }
            path="/layouts/sidebar-a"
        />
        <Route
            component={ NavbarOnly.Navbar }
            path="/layouts/navbar-only"
        />*/}
        { /* Default Navbar: */}
        <Route
            component={ DefaultNavbar }
        />
    </Switch>  
);

const getSidebars = () => (
    <Switch>
        { /* Other Sidebars: */}
        <Route
            component={ SidebarASidebar }
            path="/layouts/sidebar-a"
        />
        { /* Default Sidebar: */}
        <Route
            component={ SidebarASidebar }
        />
    </Switch>
);

export {
    getRoutes,
    getNavbars,
    getSidebars
};
