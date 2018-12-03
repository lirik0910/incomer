import Base from '../../Base.js';

export default class Header extends Base {
	initDOMElements(e) {
        this.els = {
        	_headerNav: $('.header__nav'),
        	_headerProfile: $('.header__profile'),
        	_headerProfileWrap: $('.header__profile-wrap'),
        	_headerProfileTitle: $('.header__profile-title'),
        	_headerProfileItem: $('.header__profile-item'),
        	_auth: $('.auth'),
        	_authPopup: $('.auth__popup'),
        	_authContent: $('.auth__content'),
        	_authTabContent: $('.auth__tab-content'),
        	_search: $('.header .search'),
        	_searchInput: $('.header .search__input'),
        	_searchBtn: $('.header .search__btn'),
        	_searchResult: $('.header .search__results'),
        	_searchCategory: $('.header .search__category'),
        	_searchInfoList: $('.header .search__info-list'),
        	_searchCategoryCount: $('.header .search__category-count'),
        	_searchCategoryList: $('.header .search__category-list'),
        	_searchCategoryLink: $('.header .search__category-link')
        }
    }

	onDOMReady(e) {
		this.els._searchBtn.click((e) => this.searchAnimation(e));
		this.baseDOM._window.click((e) => this.closeSearchByClickOutside(e));
		this.els._headerProfileWrap.click(() => this.loginProfile());
		this.els._headerProfileItem.last().click((e) => this.logoutProfile(e));
		this.els._searchCategoryList.click((e) => e.preventDefault());
		this.els._searchInput.on('input', (e) => this.getSearchResult(e));
		// this.checkSearchResultFilling();
		this.els._searchCategoryList.on('click', 
			'a:not(.search__category-link--active, .search__category-link--light)', 
			(e) => this.searchActiveFilterTab(e));
		this.setResultsItems();
	}

	searchAnimation(e) {
		e.preventDefault();
		$('.search__input, .search__btn').toggleClass('search--active');
		this.els._searchInput.focus();
		this.els._headerNav.css({'opacity': 0})
		if (this.els._searchInput.val() !== '') {
			this.els._searchResult.fadeIn();
		}
		if (!$('.search__input, .search__btn').hasClass('search--active')) {
			this.els._headerNav.css({'opacity': 1})
			this.els._searchResult.fadeOut();
		}
	}

	loginProfile() {
		if (!this.els._headerProfile.hasClass('header__profile--login')) {
			this.els._authPopup.fadeIn();
			this.els._auth.fadeIn();
		}

		if (this.els._authTabContent.eq(0).height() < 
			this.els._authTabContent.eq(1).height()) {
			this.els._authContent.height(this.els._authTabContent.eq(0).height())
		}
	}

	logoutProfile(e) {
		// e.preventDefault();
		// this.els._headerProfileTitle.text('Авторизоваться');
		// this.els._headerProfile.removeClass('header__profile--login');
	}

	getSearchResult(e) {
		e.preventDefault();
		if ($(e.currentTarget).val()) {
			this.els._searchResult.fadeIn();
			this.els._searchInput.addClass('search__input--rounded');
			// this.els._searchInput.css({'border-radius': '20px 20px 0 0'})
		}
		else {
			this.els._searchResult.fadeOut();
			// this.els._searchInput.css({'border-radius': '20px'})
			this.els._searchInput.removeClass('search__input--rounded');
		}

		$.ajax({
            url: '/search',
            method: 'GET',
            dataType: 'html',
            data: {searchText: $(e.currentTarget).val()},
        }).done( (data) => {
            if (this.els._searchResult.find('.search__info')) {
            	this.els._searchResult.find('.search__info').remove();
            }
            this.els._searchResult.append(data);
        }).fail( (e) => { });
        
		// this.checkSearchResultFilling();
		this.setResultsItems();
	}

	checkSearchResultFilling() {
		for (var i = 0; i < $('.header .search__category-count').length; i++) {
			if ($($('.header .search__category-count')[i]).text() === '0') {
				$($('.header .search__category-count')[i])
					.prev()
					.addClass('search__category-link--light');
				$($('.header .search__category-count')[i])
					.addClass('search__category-count--light')
			}
			else {
				$($('.header .search__category-count')[i])
					.prev()
					.removeClass('search__category-link--light')
				$($('.header .search__category-count')[i])
					.removeClass('search__category-count--light')
			}
		}
	}

	searchActiveFilterTab(e) {
		e.preventDefault();
		this.els._searchCategoryLink.removeClass('search__category-link--active');
		$(e.currentTarget).addClass('search__category-link--active');
		$('.header .search__info-list').removeClass('search__info-list--active');

		switch($(e.currentTarget).parent().index()) {
			case 0:
				$('.header .search__info-list.all')
					.addClass('search__info-list--active');
				break;
			case 1:
				$('.header .search__info-list.news')
					.addClass('search__info-list--active');
				break;
			case 2:
				$('.header .search__info-list.companies')
					.addClass('search__info-list--active');
				break;
			case 3:
				$('.header .search__info-list.people')
					.addClass('search__info-list--active');
				break;
			case 4:
				$('.header .search__info-list.products')
					.addClass('search__info-list--active');
				break;
			default:
				$('.header .search__info-list.all')
					.addClass('search__info-list--active');
		}
	}

	closeSearchByClickOutside(e) {
		if ( 
			// checks if descendants was clicked
           	this.els._search.has(e.target).length == 0
           	&&
           	// checks if the element itself was clicked
           	!this.els._search.is(e.target) 
		) {
			if ($('.search__input, .search__btn').hasClass('search--active')) {
				$('.search__input, .search__btn').toggleClass('search--active');
				this.els._headerNav.css({'opacity': 1})
				this.els._searchResult.fadeOut();
			}
		}
	}

	setResultsItems() {
		for (var i = 0; i < $('.search__info-list').length; i++) {
			var itemNum = $($('.search__info-list')[i]).children().length;
			$($('.search__category-count')[i]).text(itemNum);
		}
		this.checkSearchResultFilling();
	}
}
