import './index.scss';
import 'normalize.css';
import Base from '../../Base.js';

import Header from '../../components/Header/index';
import Auth from '../../components/Auth/index';
// import TopArticles from '../../components/TopArticles/index';
import PopularArticles from '../../components/PopularArticles/index';
// import VideoPreviews from '../../components/VideoPreviews/index';
import CompaniesRating from '../../components/CompaniesRating/index';
import Footer from '../../components/Footer/index';
import Modal from '../../components/Modal/index';

new Base().call(() => {
	new Header();
	new Auth();
	// new TopArticles();
	new PopularArticles();
	// new VideoPreviews();
	new CompaniesRating();
	new Footer();
	new Modal();
});
