import './cryptocurrency.scss';
import 'normalize.css';
import Base from '../../Base.js';

import Header from '../../components/Header/index';
import Auth from '../../components/Auth/index';
import Rate from '../../components/Rate/index';
import Exchange from '../../components/Exchange/index';
import Footer from '../../components/Footer/index';
import Modal from '../../components/Modal/index';
import CurrentArticles from '../../components/CurrentArticles/index';

new Base().call(() => {
	new Header();
	new Auth();
	new Rate();
	new Exchange();
	new CurrentArticles();
	new Footer();
	new Modal();
});
