import './blockchain.scss';
import 'normalize.css';
import Base from '../../Base.js';

import Header from '../../components/Header/index';
import Auth from '../../components/Auth/index';
import CurrentArticles from '../../components/CurrentArticles/index';
// import Chart from '../../components/Chart/index';
// import CompanyNews from '../../components/CompanyNews/index';
import Footer from '../../components/Footer/index';
import Modal from '../../components/Modal/index';

new Base().call(() => {
	new Header();
	new Auth();
	new CurrentArticles();
	// new Chart();
	// new CompanyNews();
	new Footer();
	new Modal();
});
