import Base from '../../Base.js';
// import Isotope from 'isotope-layout';

export default class Comments extends Base {
	initDOMElements(e) {
        this.els = {
        	_commentsTabLink: $('.comments__tab-link'),
        	_commentsVoteArrows: $('.comments__vote-up, .comments__vote-down'),
            _commentCreateBtn: $('.comments__btn'),
            _commentsReadBtn: $('.post__comment-btn'),
        }
    }

	onDOMReady(e) {
		var flag = { up: true, down: true };
		this.els._commentsVoteArrows.click((e) => this.makeVoteArrowActive(e, flag));
        this.els._commentCreateBtn.click((e) => this.createComment(e));
        this.els._commentsReadBtn.click((e) => this.displayComments(e));
/*        $('.comments__strange').fadeOut();*/
		// var iso = this.initIsotope();
		// this.els._commentsTabLink.click((e) => this.sortingIsotop(e, iso));
	}

	displayComments(e){
	    e.preventDefault();

	    $('.comments__strange').fadeIn();
    }

	createComment(e){
	    e.preventDefault();

	    let value = $('.comments__own').find('textarea').val();
	    let post_id = location.pathname.split('/')[2];

        $.ajax({
            url: '/comments/create',
            method: 'POST',
            data: {value: value, commentable_id: post_id},
            //dataType: 'html',
        }).done( (data) => {
            location.reload();
        }).fail( (e) => { });
    }

	makeVoteArrowActive(e, flag) {
		e.preventDefault();

		var voteNumber = $(e.currentTarget).siblings('.comments__vote-num').text();
		voteNumber = parseInt(voteNumber);

		if ($(e.currentTarget).hasClass('comments__vote-up') && flag.up === true) {
			if ($(e.currentTarget).siblings('.comments__vote-down').hasClass('active')) {
				voteNumber += 2;
			}
			else {
				voteNumber += 1;
			}
			$(e.currentTarget).siblings('.comments__vote-down').removeClass('active');
			$(e.currentTarget).siblings('.comments__vote-num').text(voteNumber);
			$(e.currentTarget).addClass('active');

			// prevents multiple changes of comments number
			flag.up = false;
			flag.down = true;
		}
		else if ($(e.currentTarget).hasClass('comments__vote-down') && flag.down === true) {
			if ($(e.currentTarget).siblings('.comments__vote-up').hasClass('active')) {
				voteNumber -= 2;
			}
			else {
				voteNumber -= 1;
			}
			$(e.currentTarget).siblings('.comments__vote-up').removeClass('active');
			$(e.currentTarget).siblings('.comments__vote-num').text(voteNumber);
			$(e.currentTarget).addClass('active');

			// prevents multiple changes of comments number
			flag.up = true;
			flag.down = false;
		}
		return flag;
	}

	/*initIsotope() {
		var iso = new Isotope( '.comments__list', {
			itemSelector: '.comments__item',
			getSortData: {
				rating: '.comments__vote-num parseInt',
				relevant: function(item) {
					// console.log($(item))
					var day = item.querySelector('.comments__date span').textContent
					var time = item.querySelector('.comments__date span').textContent
					// console.log(day)
					// var months = ['January', 'February', 'March', 'April', 'May', 
					// 		   'June', 'July', 'August', 'September', 'October',
					// 		   'November', 'December']
					switch (day) {
						case 'сегодня':
							var date = new Date();

							var getDate = date.getDate(),
								getMonth = date.getMonth(),
								// getYear = date.getFullYear(),
								getHour = date.getHour(),
								getMinute = date.getMinute()
							// console.log('aa',date.toDateString())
							break;
						default:
							var getDate = 10,
								getMonth = 1,
								// getYear = 2018,
								getHour = 1,
								getMinute = 1
					}


					var fullDate = Date(2018, 
										getMonth(), 
										getDate(),
										getHour(),
										getMinute())
					console.log(fullDate);
					return true;
				}
			}
		});
		return iso;
	}*/

	/*sortingIsotop(e, iso) {
		e.preventDefault();
		var sortValue = $(e.currentTarget).attr('data-sort-value'),
			sortType = $(e.currentTarget).attr('data-sort-type');

		switch(sortType) {
			case 'original-order': 
				iso.arrange({ sortBy: sortValue, sortAscending: true });
				break;
			case 'asc': 
				iso.arrange({ sortBy: sortValue, sortAscending: false });
				break;
			case 'desc': 
				iso.arrange({ sortBy: 'original-order', sortAscending: true });
				break;
			default:
				iso.arrange({ sortBy: 'original-order', sortAscending: true });
				break;
		}
	}*/
}
