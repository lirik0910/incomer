import Base from '../../Base.js';

export default class UserProfile extends Base {
	initDOMElements(e) {
        this.els = {
        	_profileInput: $('.profile__input'),
        	_profileSelect: $('.profile__select'),
        	_profileSelectOption: $('.profile__select option'),
        	_passwordToggler: $('.profile__pass-btn'),
        	_profileSelectCountry: $('#country'),
        	_profileSelectCity: $('#city'),
        	_avatarInput: $('#avatarInput'),
        	_saveNewPersonalInfo: $('#saveNewPersonalInfo'),
        	_saveNewEmail: $('#saveNewEmail'),
        	_saveNewPassword: $('#saveNewPassword')
        }
    }

	onDOMReady(e) {
		this.els._profileInput.focusin((e) => this.focusinInputAnimation(e));
		this.els._profileInput.focusout((e) => this.focusoutInputAnimation(e));
		this.els._profileSelect.focusin((e) => this.focusinInputAnimation(e));
		this.els._profileSelect.focusout((e) => this.focusoutInputAnimation(e));
		this.els._profileSelect.change((e) => this.selectOption(e));
		this.els._passwordToggler.click((e) => this.togglePasswordVisibility(e));
		this.els._profileSelectCountry.change((e) => this.toggleSelectVisibility(e));
		this.els._avatarInput.change((e) => this.uploadAvatar(e));
		this.els._saveNewPersonalInfo.click((e) => this.saveNewPersonalInfo(e));
		this.els._saveNewEmail.click((e) => this.saveNewEmail(e));
		this.els._saveNewPassword.click((e) => this.saveNewPassword(e));
	}

	focusinInputAnimation(e) {
		$(e.currentTarget.parentNode.children[0]).addClass('profile__placeholder--active');
	}

	focusoutInputAnimation(e) {
		if (!e.currentTarget.value) {
			$(e.currentTarget.parentNode.children[0]).removeClass('profile__placeholder--active');
		}
	}

	selectOption(e) {
		if ($($(e.currentTarget.children[0])).is(':selected')) {
			$(e.currentTarget).removeClass('profile__select--filled');
		} else {
			$(e.currentTarget).addClass('profile__select--filled');
		}
	}

	togglePasswordVisibility(e) {
		e.preventDefault();
		var togglerValue = $(e.currentTarget).prev().attr('type') === 'password' ? 'text' : 'password';
		$(e.currentTarget).prev().prop('type', togglerValue);
	}

	toggleSelectVisibility(e) {
		if ($($(e.currentTarget.children[0])).is(':selected')) {
			this.els._profileSelectCity.parent().addClass('profile__field--block');
		} else {
			this.els._profileSelectCity.parent().removeClass('profile__field--block');
		}
	}

	uploadAvatar(e) {
		if ($(e.currentTarget)[0].files && $(e.currentTarget)[0].files[0]) {
		    var reader = new FileReader();
		    reader.onload = (e) => {
		        $('#avatar').attr('src', e.target.result);
		    }
		    reader.readAsDataURL($(e.currentTarget)[0].files[0]);
		}

		/*$.ajax({
            url: '/avatar',
            method: 'GET',
            dataType: 'text',
            data: {avatar: $(e.currentTarget)[0].files},
        }).done( (data) => {
        	
        	if ($(e.currentTarget)[0].files && $(e.currentTarget)[0].files[0]) {
			    var reader = new FileReader();
			    reader.onload = (e) => {
			        $('#avatar').attr('src', data);
			    }
			    reader.readAsDataURL($(e.currentTarget)[0].files[0]);
			}

        }).fail( (e) => {

        	$('.modal__header').text('Ошибка');
            $('.modal__body').text('Извините, попробуйте позже');
            $('.modal').fadeIn('400', function() {
                $('.modal__content').slideDown();
            });

        });*/
	}

	saveNewPersonalInfo(e) {
		e.preventDefault();

		/*$.ajax({
            url: '/user/info',
            method: 'POST',
            dataType: 'json',
            data: data,
        }).done((data) => {

            $('.profile__detail-block--personal input').val('');
			$('.profile__detail-block--personal select').val('');
			$('.profile__placeholder').removeClass('profile__placeholder--active');

            $('.modal__header').text('Успех');
            $('.modal__body').text('Информация была успешно обновлена');
            $('.modal').fadeIn('400', function() {
                $('.modal__content').slideDown();
            });

        }).fail(function(e) {
            $('.modal__header').text('Ошибка');
            $('.modal__body').text(error.statusText);
            $('.modal').fadeIn('400', function() {
                $('.modal__content').slideDown();
            });
        });*/
	}

	saveNewEmail(e) {
		e.preventDefault();
		
	}

	saveNewPassword(e) {
		e.preventDefault();

	}
}
