import Base from '../../Base.js';

export default class UserProfile extends Base {
	initDOMElements(e) {
        this.els = {
        	// _auth: $('.auth')
        }
    }

	onDOMReady(e) {
		// this.els._authTab.click((e) => this.tabNavigation(e));
		// this.els._passwordToggler.click((e) => this.togglePasswordVisibility(e));
		// this.els._authInput.focusin((e) => this.focusinInputAnimation(e));
		// this.els._authInput.focusout((e) => this.focusoutInputAnimation(e));
	}
}
