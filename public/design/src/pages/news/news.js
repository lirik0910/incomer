import './news.scss';
import 'normalize.css';
import Base from '../../Base.js';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import News from '../../components/News/index';
import RelatedNews from '../../components/RelatedNews/index';

new Base().call(() => {
	new Header();
	new Footer();
	new News();
	new RelatedNews();
});