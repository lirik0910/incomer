import './post.scss';
import 'normalize.css';
import Base from '../../Base.js';

import Header from '../../components/Header/index';
import Auth from '../../components/Auth/index';
// import Post from '../../components/Post/index';
// import SidebarNews from '../../components/SidebarNews/index';
import Footer from '../../components/Footer/index';
import Modal from '../../components/Modal/index';

new Base().call(() => {
	new Header();
	new Auth();
	// new Post();
	// new SidebarNews();
	new Footer();
	new Modal();
});