import './index.scss';
import 'normalize.css';
import Base from '../../Base.js';

import Header from '../../components/Header/index';
import Auth from '../../components/Auth/index';
// import TopArticles from '../../components/TopArticles/index';
// import PopularArticles from '../../components/PopularArticles/index';
// import VideoPreviews from '../../components/VideoPreviews/index';
import CompaniesRating from '../../components/CompaniesRating/index';
// import MainNews from '../../components/MainNews/index';
import Footer from '../../components/Footer/index';

new Base().call(() => {
	new Header();
	new Auth();
	// new TopArticles();
	// new PopularArticles();
	// new VideoPreviews();
	new CompaniesRating();
	// new MainNews();
	new Footer();
});