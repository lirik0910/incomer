import './company.scss';
import 'normalize.css';
import Base from '../../Base.js';

import Header from '../../components/Header/index';
import CompanyInfo from '../../components/CompanyInfo/index';
import Chart from '../../components/Chart/index';
import CompanyNews from '../../components/CompanyNews/index';
import Footer from '../../components/Footer/index';

new Base().call(() => {
	new Header();
	new CompanyInfo();
	new Chart();
	new CompanyNews();
	new Footer();
});