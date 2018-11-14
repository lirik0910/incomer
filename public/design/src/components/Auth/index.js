import Base from '../../Base.js';

export default class Auth extends Base {
	initDOMElements(e) {
        this.els = {
        	_auth: $('.auth'),
        	_authPopup: $('.auth__popup'),
        	_authTab: $('.auth__tab'),
        	_authContent: $('.auth__content'),
        	_authTabContent: $('.auth__tab-content'),
        	_authTabsList: $('.auth__tabs-list'),
        	_authInput: $('.auth__input'),
        	_authClose: $('.auth__close'),
        	_authSubmit: $('.auth__submit'),
        	_authRestore: $('.auth__restore'),
        	_passwordInput: $('.auth__pass .auth__input'),
        	_passwordToggler: $('.auth__pass-btn'),
        	_loginEmail: $('#login-email'),
        	_loginPassword: $('#login-password'),
        	_loginSend: $('#login-send'),
        	_registerEmail: $('#register-email'),
        	_registerLogin: $('#register-login'),
        	_registerPassword: $('#register-password'),
        	_registerSend: $('#register-send'),
        	_headerProfile: $('.header__profile'),
        	_headerProfileTitle: $('.header__profile-title')
        }
    }

	onDOMReady(e) {
		this.els._authTab.click((e) => this.tabNavigation(e));
		this.els._passwordToggler.click((e) => this.togglePasswordVisibility(e));
		this.els._authInput.focusin((e) => this.focusinInputAnimation(e));
		this.els._authInput.focusout((e) => this.focusoutInputAnimation(e));
		this.els._authClose.click((e) => this.closePopup(e));
		this.els._auth.click((e) => this.closePopupByLosingFocus(e));
		this.els._loginSend.click((e) => this.authSubmit(e));
		this.els._registerSend.click((e) => this.registerSubmit(e));
		this.els._authRestore.click((e) => this.authRestore(e));
		$('#login-email, #login-password').on('input', (e) => this.loginFilling(e))
		$('#register-email, #register-login, #register-password').on('input', (e) => this.registerFilling(e))
	}

	tabNavigation(e) {
		var id = $(e.currentTarget).attr('data-id') - 1,
			count = this.els._authTabsList.children('.auth__tab').length,
			tab_width = $(e.currentTarget).width(),
			slider_width = this.els._authContent.width();

		// delete all active classes from tab & add it on current
		this.els._authTab.removeClass('auth__tab--active');
		$(e.currentTarget).addClass('auth__tab--active');

		// block's height
		if (this.els._authTab.eq(1).hasClass('auth__tab--active')) {
			if (this.els._authTabContent.eq(0).height() < 
				this.els._authTabContent.eq(1).height()) {
				this.els._authContent.height(this.els._authTabContent.eq(1).height())
			}
			// slide effect
			this.els._authContent.stop().animate({'left':-(id*slider_width)-10+'px'}, 300);
		}
		if (this.els._authTab.eq(0).hasClass('auth__tab--active')) {
			if (this.els._authTabContent.eq(0).height() < 
				this.els._authTabContent.eq(1).height()) {
				this.els._authContent.height(this.els._authTabContent.eq(0).height())
			}
			// slide effect
			this.els._authContent.stop().animate({'left':'0px'}, 300);
		}
	}

	togglePasswordVisibility(e) {
		e.preventDefault();
		var togglerValue = this.els._passwordInput.attr('type') === 'password' ? 'text' : 'password';
		this.els._passwordInput.prop('type', togglerValue);
	}

	focusinInputAnimation(e) {
		$(e.currentTarget.parentNode.children[0]).addClass('auth__placeholder--active');
	}

	focusoutInputAnimation(e) {
		// check if the input is empty
		if (!e.currentTarget.value) {
			$(e.currentTarget.parentNode.children[0]).removeClass('auth__placeholder--active');
		}
	}

	closePopup(e) {
		e.preventDefault();
		this.els._authPopup.slideUp();
		this.els._auth.fadeOut();
	}

	closePopupByLosingFocus(e) {
		if ( 
			// checks if descendants was clicked
           	this.els._authPopup.has(e.target).length == 0 
           	&&
           	// checks if the element itself was clicked
           	!this.els._authPopup.is(e.target) 
		) {
			this.els._auth.fadeOut();
		}
	}

	authSubmit(e) {
		e.preventDefault();
		var data = {};		

		data.type = 'login';
		if (this.els._loginEmail.val() !== undefined) data.email = this.els._loginEmail.val();
		if (this.els._loginPassword.val() !== undefined) data.password = this.els._loginPassword.val();

		/*this.els._authPopup.slideUp();
		this.els._auth.fadeOut();
		this.els._headerProfileTitle.text('exampleuser@gmail.com');
		this.els._headerProfile.addClass('header__profile--login');*/

		$.ajax({
            url: 'ajax/formcontacts',
            method: "POST",
            dataType: "json",
            data: data,
            // beforeSend: function() { 
                
            // },
            // complete: function() {
                
            // },
            error: function(error) {
            	// $('html').css({ 'overflow': 'hidden' });
				$('.modal__header').text('Ошибка');
				$('.modal__body').text(error.statusText);
				$('.modal').fadeIn('400', function() {
					$('.modal__content').slideDown();
				});
            },
            success: function(data) {
                if (data.auth) {
                	this.els._authPopup.slideUp();
					this.els._auth.fadeOut();
                	this.els._headerProfileTitle.text(data.user.email);
					this.els._headerProfile.addClass('header__profile--login');
                } 
                else {
                	$('.modal__header').text('Ошибка');
                    $('.modal__body').text('Извините, попробуйте позже');
                }

                this.els._loginEmail.val('');
                this.els._loginPassword.val('');
            }
        })
	}

	authRestore(e) {
		e.preventDefault();
	}

	loginFilling(e) {
        if (this.els._loginEmail.val() !== '' && this.els._loginPassword.val() !== '')
        	this.els._loginSend.removeAttr('disabled');
        else this.els._loginSend.attr('disabled', true);
	}

	registerFilling(e) {
        if (this.els._registerEmail.val() !== '' &&
        	this.els._registerLogin.val() !== '' &&
        	this.els._registerPassword.val() !== '')
        	this.els._registerSend.removeAttr('disabled');
        else this.els._registerSend.attr('disabled', true);
	}

	registerSubmit(e) {
		e.preventDefault();
		var data = {};		

		data.type = 'register';
		if (this.els._registerEmail.val() !== undefined) 
			data.email = this.els._registerEmail.val();
		if (this.els._registerLogin.val() !== undefined) 
			data.login = this.els._registerLogin.val();
		if (this.els._registerPassword.val() !== undefined) 
			data.password = this.els._registerPassword.val();

		console.log(data)

		$.ajax({
            url: 'ajax/formcontacts',
            method: 'POST',
            dataType: 'json',
            data: data,

            error: function(error) {
				$('.modal__header').text('Ошибка');
				$('.modal__body').text(error.statusText);
				$('.modal').fadeIn('400', function() {
					$('.modal__content').slideDown();
				});
            },
            success: function(data) {
                if (data.succes) {
                	this.els._authPopup.slideUp();
					this.els._auth.fadeOut();
                	this.els._headerProfileTitle.text(data.user.email);
					this.els._headerProfile.addClass('header__profile--login');
                } 
                else {
                	$('.modal__header').text('Ошибка');
                    $('.modal__body').text('Извините, попробуйте позже');
                }

                this.els._loginEmail.val('');
                this.els._loginPassword.val('');
            }
        })
	}
}
