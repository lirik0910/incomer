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
        	_search: $('.header .search'),
        	_searchInput: $('.header .search__input'),
        	_searchBtn: $('.header .search__btn'),
        	_searchResult: $('.header .search__results'),
        	_searchCategory: $('.header .search__category'),
        	_searchCategoryCount: $('.header .search__category-count'),
        	_searchCategoryList: $('.header .search__category-list'),
        	_searchCategoryLink: $('.header .search__category-link'),
        	_searchInfoList: $('.header .search__info-list')
        }
    }

	onDOMReady(e) {
		this.els._searchBtn.click((e) => this.searchAnimation(e));
		this.els._headerProfileWrap.click(() => this.loginProfile());
		this.els._headerProfileItem.last().click((e) => this.logoutProfile(e));
		this.els._searchInput.on('input', (e) => this.getSearchResult(e));
		this.checkSearchResultFilling();
		this.baseDOM._window.click((e) => this.closeSearchByLosingFocus(e));
		this.els._searchCategoryList.on('click', 
			'a:not(.search__category-link--active, .search__category-link--light)', 
			(e) => this.searchFilter(e));


		console.log('AAAAAAAA');


		// console.log(
		// 	// this.els._searchCategoryList
		// 	// 	.children()
		// 	// 	.children('.search__category-link--active')
		// 	// 	.index()

		// 		// .children()
		// 		// .index();
		// 	 // this.els._searchCategoryList
  //   //         	.find('.search__category-link--active')
  //   //         	.index()

  //           // $('search__category-link').parent()
		// )
	}

	searchAnimation(e) {
		e.preventDefault();
		$('.search__input, .search__btn').toggleClass('search--active');
		this.els._searchInput.focus();
		this.els._headerNav.css({'opacity': 0})
		if (this.els._searchInput.val() !== '') {
			this.els._searchResult.fadeIn();
		}
	}

	loginProfile() {
		if (!this.els._headerProfile.hasClass('header__profile--login')) {
			this.els._authPopup.fadeIn();
			this.els._auth.fadeIn();
		}

		if ($('.auth__tab-content:first-of-type').height() < 
			$('.auth__tab-content:nth-of-type(2)').height()) {
			$('.auth__content').height($('.auth__tab-content:first-of-type').height())
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
			this.els._searchInput.css({'border-radius': '20px 20px 0 0'})
		}
		else {
			this.els._searchResult.fadeOut();
			this.els._searchInput.css({'border-radius': '20px'})
		}
		

		// console.log($('.search__category-list').children().children('.search__category-link--active').index())
		// console.log(
		// 	 this.els._searchCategoryList
  //           	.find('.search__category-link--active')
  //           	.index()
		// )


		$.ajax({
            url: '/search',
            method: 'GET',
            dataType: 'html',
            data: {searchText: $(e.currentTarget).val()},
        }).done( (data) => {
            console.log('done');

            // if (this.els._searchResult.children('.search__info')) {
            // 	this.els._searchResult.children('.search__info').remove();

            if (this.els._searchResult.children('.search__info')) {
            	this.els._searchResult.children('.search__info').remove();
            	// this.els._searchResult.append(data);
            }
            // else {
            // 	this.els._searchResult.append(data);
            // }
            this.els._searchResult.append(data);



            
            // $('.search__category-list').children('.search__category-link--active')


    //         this.els._searchInfoList
				// .eq($(e.currentTarget).parent().index())
				// .addClass('search__info-list--active');

        }).fail( (e) => {
            console.log('bad');
        });



	}

	checkSearchResultFilling() {
		for (var i = 0; i < this.els._searchCategoryCount.length; i++) {
			if ($(this.els._searchCategoryCount[i]).text() === '0') {
				$(this.els._searchCategoryCount[i])
					.prev()
					.addClass('search__category-link--light');
				$(this.els._searchCategoryCount[i]).addClass('search__category-count--light')
			}
		}
	}

	searchFilter(e) {
		e.preventDefault();
		this.els._searchCategoryLink.removeClass('search__category-link--active')
		$(e.currentTarget).addClass('search__category-link--active')
		this.els._searchInfoList.removeClass('search__info-list--active');
		this.els._searchInfoList
			.eq($(e.currentTarget).parent().index())
			.addClass('search__info-list--active');
	}

	closeSearchByLosingFocus(e) {
		if ( 
			// checks if descendants was clicked
           	this.els._search.has(e.target).length == 0
           	&&
           	// checks if the element itself was clicked
           	!this.els._search.is(e.target) 
		) {
			// e.preventDefault();
			if ($('.search__input, .search__btn').hasClass('search--active')) {
				$('.search__input, .search__btn').toggleClass('search--active');
				this.els._headerNav.css({'opacity': 1})
				this.els._searchResult.fadeOut();
			}
		}
	}
}
