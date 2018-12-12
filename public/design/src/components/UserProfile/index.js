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
        	_saveNewPassword: $('#saveNewPassword'),
            _infoSaveBtn: $('.profile__btn')
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
		this.els._infoSaveBtn.click((e) => this.saveInfo(e));
		this.isEmpty();
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

	isEmpty() {
		for (var i = 0; i < this.els._profileInput.length; i++) {
			$(this.els._profileInput[i]).parent().children().first()
				.removeClass('profile__placeholder--active');
		}
		for (var j = 0; j < this.els._profileSelect.length; j++) {
			if ($(this.els._profileSelect[j].children[0]).is(':selected')) {
				$(this.els._profileSelect[j]).removeClass('profile__select--filled');
			}
			else {
				$(this.els._profileSelect[j]).addClass('profile__select--filled');
			}
		}
	}

	uploadAvatar(e) {
/*		if ($(e.currentTarget)[0].files && $(e.currentTarget)[0].files[0]) {
		    var reader = new FileReader();
		    reader.onload = (e) => {
		        $('#avatar').attr('src', e.target.result);
		    }
		    reader.readAsDataURL($(e.currentTarget)[0].files[0]);
		}*/


        let data = {};
        //data.append('logo', logo);
        //console.log(logo);
        data['logo'] = $(e.currentTarget)[0].files[0];

		$.ajax({
            url: '/private_area/logo',
            method: 'POST',
            //dataType: 'text',
            contentType: false,
            processData: false,
            data: data,
        }).done( (data) => {
        	console.log('done!');
/*        	if ($(e.currentTarget)[0].files && $(e.currentTarget)[0].files[0]) {
			    var reader = new FileReader();
			    reader.onload = (e) => {
			        $('#avatar').attr('src', data);
			    }
			    reader.readAsDataURL($(e.currentTarget)[0].files[0]);
			}*/

        }).fail( (e) => {
            console.log('fail');
/*
        	$('.modal__header').text('Ошибка');
            $('.modal__body').text('Извините, попробуйте позже');
            $('.modal').fadeIn('400', function() {
                $('.modal__content').slideDown();
            });*/

        });
	}

	saveInfo(e) {
		e.preventDefault();

		let inputs = $('.profile__detail-block--personal').find('input');
		let data = {};

		inputs.each(function () {
            data[$(this).attr('name')] = $(this).val();
        });

		$('.profile__detail-block--personal').find('select').each(function () {
            data[$(this).attr('name')] = $(this).val();
        });

        //console.log(data);

		$.ajax({
            url: '/private_area/info',
            method: 'POST',
            //dataType: 'json',
            data: data,
        }).done((data) => {
            location.reload();
/*            $('.profile__detail-block--personal input').val('');
			$('.profile__detail-block--personal select').val('');
			$('.profile__placeholder').removeClass('profile__placeholder--active');

            $('.modal__header').text('Успех');
            $('.modal__body').text('Информация была успешно обновлена');
            $('.modal').fadeIn('400', function() {
                $('.modal__content').slideDown();
            });*/

        }).fail(function(e) {

            $('.modal__header').text('Ошибка');
            $('.modal__body').text(error.statusText);
            $('.modal').fadeIn('400', function() {
                $('.modal__content').slideDown();
            });
        });
	}

	saveNewEmail(e) {
		e.preventDefault();
		
	}

	saveNewPassword(e) {
		e.preventDefault();

	}
}
