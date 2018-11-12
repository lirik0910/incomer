import './post.scss';
import 'normalize.css';
import Base from '../../Base.js';

import Header from '../../components/Header/index';
import Auth from '../../components/Auth/index';
// import Post from '../../components/Post/index';
import RelatedNews from '../../components/RelatedNews/index';
import Footer from '../../components/Footer/index';

new Base().call(() => {
	new Header();
	new Auth();
	// new Post();
	new RelatedNews();
	new Footer();
});