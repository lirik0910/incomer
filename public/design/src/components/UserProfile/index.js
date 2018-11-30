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
        	_avatarInput: $('#avatarInput')
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

		// $.ajax({
  //           url: '/avatar',
  //           method: 'POST',
  //           dataType: 'json',
  //           // dataType: 'html',
  //           data: {avatar: $(e.currentTarget)[0].files},
  //       }).done( (data) => {
            
  //       }).fail( (e) => { });
	}
}
